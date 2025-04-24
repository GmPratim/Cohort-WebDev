/*
Problem stateman
You are designing a simple robot system. Each robot has a name and a batteryLeveI. The robot should have a method charge() that increases
the battery level by 2e, but it cannot exceed lee.
Challenge
• Implement a constructor function Robot that initializes name and batteryLeve1.
• Attach a method charge() to its prototype that increases batteryLeveI by 20, ensuring it does not go above 100.
*/

// You need to implement the Robot constructor function and its prototype method

function Robot(name, batteryLevel) {
  // Initialize name and batteryLevel properties
  this.name = name;
  this.batteryLevel = batteryLevel;
}

// Define charge method on Robot's prototype
Robot.prototype.charge = function () {
  let charge = 20;

  if (this.batteryLevel + charge <= 100) {
    this.batteryLevel += charge; // Update batteryLevel
  } else {
    this.batteryLevel = 100; // Ensure max limit is 100
  }

  return this.batteryLevel; // Return updated batteryLevel
};

/*
//another ans

// You need to implement the Robot constructor function and its prototype method
function Robot(name, batteryLevel) (
this.name = name;
this.batteryLevel batteryLevel;
// Define charge method on Robots prototype
Robot.prototype.charge = function0 {
this.batteryLevel Math.min(this.batteryLevel + 20, 100);
l;
*/
