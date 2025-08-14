let expenses = [
  { description: "Groceries", amount: 50, category: "Food" },
  { description: "Electricity Bill", amount: 100, category: "Utilities" },
  { description: "Dinner", amount: 30, category: "Food" },
  { description: "Internet Bill", amount: 50, category: "Utilities" },
];

let expensesReport = expenses.reduce((report, expense) => {
    report[expense.category] += expense.amount;
    return report;
}, 
{ Food: 0, Utilities: 0 }
);

// console.log("total expenses:", expensesReport);


let tasks = [
  {
    description: "Write report", completed: false, priority: 2
  },
   {
    description: "Send email", completed: true, priority: 1
  },
   {
    description: "Prepare presentation", completed: false, priority: 1
  }
  
]

let pendingSortedTasks = tasks
.filter((task) => !task.completed)
.sort((a, b) => a.priority - b.priority);

// console.log(pendingSortedTasks);




let expensesRepordt = expenses.reduce((report, expense) => {
    // If the category doesn't exist yet, create it with 0
    if (!report[expense.category]) {
        report[expense.category] = 0;
    }
    
    // Add the amount    
    report[expense.category] += expense.amount;
    return report;
}, {});


let movieRatings = [
  {title: "A", ratings: [2,4,6]},
  {title: "b", ratings: [2,4,3]},
  {title: "c", ratings: [7,5,6]},

]

let averageRatings = movieRatings.map((movie) => {
  let total = movie.ratings.reduce((sum, rating) => sum + rating, 0)
  let ava = total / movie.ratings.length
  movie.ratings = ava.toFixed(2)
  return movie
  return {title: movie.title, averageRatings: ava.toFixed(2)}
})
console.log(averageRatings);
console.log(movieRatings);

