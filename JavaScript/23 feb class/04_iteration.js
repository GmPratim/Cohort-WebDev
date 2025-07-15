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

console.log(pendingSortedTasks);
