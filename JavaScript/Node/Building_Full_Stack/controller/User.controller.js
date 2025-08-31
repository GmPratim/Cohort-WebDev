import User from "../model/User.model.js";
import crypto from "crypto";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// import { use } from "react";
// import { use } from "react";

const registerUser = async (req, res) => {
  // get data
  // validate
  // check if user already exists
  // create a user in database
  // create a verification token
  // save token in database
  // send token as email to user
  // send success status to user

  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
    });
    console.log(user);

    if (!user) {
      return res.status(400).json({
        message: "User not registered",
      });
    }

    const token = crypto.randomBytes(32).toString("hex");
    console.log(token);
    user.verificationToken = token;

    await user.save();

    //send email
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    const verificationLink = `${process.env.BASE_URL}/api/v1/users/verify/${token}`;

    const mailOption = {
      from: process.env.MAILTRAP_SENDEREMAIL,
      to: user.email,
      subject: "Verify your email", // Subject line
      text: `Please click on the following link:  ${verificationLink}`,
      html: `<p>Please click the link below to verify your email:</p>
         <p><a href="${verificationLink}" target="_blank">${verificationLink}</a></p>`, // clickable link
    };

    await transporter.sendMail(mailOption);

    res.status(201).json({
      message: "User registered successfully",
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: "User not registered",
      error,
      success: false,
    });
  }
};

// verify user

const verifyUser = async (req, res) => {
  //get token from url
  //validate
  // find user based on token
  //if not
  // set isVerified field to true
  // remove verification token
  // save
  //return response

  const { token } = req.params;
  console.log(token);
  if (!token) {
    return res.status(400).json({
      message: "Invalid token",
    });
  }
  try {
    console.log("verification started");

    const user = await User.findOne({ verificationToken: token });

    if (!user) {
      return res.status(400).json({
        message: "Invalid token",
      });
    }
    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save();

    res.status(200).json({
      message: "User verified successfully",
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: "User not verified",
      error,
      success: false,
    });
  }
};

// login

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    const user = await User.findOne({ email });
    if (!email || !password) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    console.log(isMatch);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      }
    ); // jwt.sign(payload, secretOrPrivateKey, [options, callback])

    const cookieOptions = {
      httpOnly: true, // normal user is cookie ke sath cher char nhi kar sakta
      secure: true,
      maxAge: 24 * 60 * 60 * 1000, // expire time for 24h
    };

    res.cookie("token", token, cookieOptions);

    res.status(200).json({
      success: true,
      message: "Login Successfull",
      token,
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
        // password: user.password,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: "User not registered ",
      error,
      success: false,
    });
  }
};

// profile

const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // "-password" means password mat do
    console.log("User de:", user);

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {}
};

// logout user

const logoutUser = async (req, res) => {
  try {
    res.cookie("token", "", {
      // expiresIn: new Date(0) -- this for if we expires the cookie
      // we can pass options
    });

    console.log("Logout");

    res.status(200).json({
      success: true,
      message: "Logged out successfully ",
    });
  } catch (error) {}
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      message: "Email required",
    });
  }
  try {
    // get email
    // find user based on email
    // set reset token + reset expiry => Date.now() + 10 * 60 * 1000 => user.save()
    // send mail => design url

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email",
      });
    }

    const token = crypto.randomBytes(32).toString("hex");

    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 10 * 60 * 1000;
    await user.save();

    // send mail
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    const forgotVerificationLik = `${process.env.BASE_URL}/api/v1/users/reset/${token}`;

    const mailOption = {
      from: process.env.MAILTRAP_SENDEREMAIL,
      to: user.email,
      subject: "Forgot your password", // Subject line
      text: `Please click on the following link:  ${forgotVerificationLik}`,
      html: `<p>Please click the link below to reset your password:</p>
         <p><a href="${forgotVerificationLik}" target="_blank">${forgotVerificationLik}</a></p>`, // clickable link
    };

    await transporter.sendMail(mailOption);

    res.status(201).json({
      message: "Check your email",
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: "Wrong info",
      error,
      success: false,
    });
  }
};

const resetPassword = async (req, res) => {
  // collect token from params
  // password from req.body
  const { token } = req.params;
  const { password } = req.body;

  try {
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        message: "Invalid or expired reset token",
        success: false,
      });
    }

    // set password in user
    user.password = password;
    // resetToken, restExpiru => reset
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    // save
    await user.save();

    res.status(201).json({
      message: "password reset sucessfull",
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong",
      error,
      success: false,
    });
  }
};

export {
  registerUser,
  verifyUser,
  login,
  getMe,
  logoutUser,
  forgotPassword,
  resetPassword,
};
