/*
You have a list of food items, but you want to keep only the healthy ones. Remove all items that contain
"Burger".
Problem stateman: Create a function that removes unhealthy food items (those containing "Burger")
and returns the updated list.
*/

function filterHealthy(foodList) {
  // Remove unhealthy food and return updated list
  let index = foodList.indexOf("Burger");
  if (index > -1) {
    foodList.splice(index, 1);
  }
  return foodList;
}

// 2nd way
function filterHealthy(foodList) {
  return foodList.filter((item) => item !== "Burger");
}
