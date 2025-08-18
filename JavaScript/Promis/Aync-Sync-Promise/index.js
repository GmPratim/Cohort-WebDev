const fs = require("fs");
const fsv2 = require("fs/promises");

console.log("Starting Program"); // sync code

//  ----------------- Modern code --------------------
// more clean 2nd code      // async code

/*
fsv2
  .readFile("./backup.txt", "utf-8")
  .then((content) => fsv2.writeFile("./hello.txt", content))
  .then(() => fsv2.unlink("./backup.txt")function readFileWithPromise(filePath, encodin) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, encodin, (err, content) => {
      if (err) {
        reject(err);
      } else {
        resolve(content); // resolve means fullfield.... // then function call
      }
    });
  });
})
  .catch((e) => console.log("Error", e));
  */

//  ---------------- Legacy code ---------------------
// 1st code with call back, when promis dosen't exxist, devloper write promise code

/* 
fs.readFile("./hello.txt", "utf-8", function (err, content) {
  if (err) {
    console.log("error", err);
  } else {
    console.log();
    fs.writeFile("./backup.txt", content, function (err) {
      if (err) {
        console.log("error", err);
      } else {
        fs.unlink("./hello.txt", function (e) {
          if (e) {
            console.log("error", e);
          } else {
            console.log("file deleted succesfully");
          }
        });
      }
    });
  }
}); // call back hell
*/

// ---------------- Custome Promise ------------------
// Legecy code to mordern promiss build on your own

function readFileWithPromise(filePath, encodin) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, encodin, (err, content) => {
      if (err) {
        reject(err);
      } else {
        resolve(content); // resolve means fullfield.... // then function call
      }
    });
  });
}

function writeFileWithPromise(filePath, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(); // resolve means fullfield.... // then function call
      }
    });
  });
}

function unlinkWithPromise(filePath) {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (e) => {
      if (e) {
        reject(e);
      } else {
        resolve(); // resolve means fullfield.... // then function call
      }
    });
  });
}
// multiple Async sode is running in sync fashion
readFileWithPromise("./hello.txt", "utf-8")
  .then((content) => writeFileWithPromise("./backup.txt", content))
  .then(() => unlinkWithPromise("./hello.txt"))
  .catch((e) => console.log("Error", e));
// convert legacy callback code to support promises.
// ek code jo promise ke uppar chal ta tha  usko wrap kar diye.. isko promisification bolte hain

// -------------- Aura -------------- (Syntax sugar)
async function doTasks() {
  try {
    const fileContent = await readFileWithPromise("./hello.txt", "utf-8");
    await writeFileWithPromise("./backup.txt", fileContent);
    await unlinkWithPromise("./hello.txt");
  } catch (e) {
    console.log("Error", e);
  }
}

doTasks().then(() => console.log("All done"));
