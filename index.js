let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here

console.log(weeklyExpenses,monthlyExpenses,annualExpenses)
console.log(weeklyExpenseQuestions)

for(let i = 0; i < weeklyExpenseQuestions.length; i++ ){
    let response = parseInt(window.prompt(weeklyExpenseQuestions[i]))
    weeklyExpenses = weeklyExpenses + response
   
}

console.log(monthlyExpenseQuestions)

for(let i = 0; i < monthlyExpenseQuestions.length; i++ ){
    let response = parseInt(window.prompt(monthlyExpenseQuestions[i]))
    monthlyExpenses = monthlyExpenses + response
}
console.log(annualExpenseQuestions)

for(let i = 0; i < weeklyExpenseQuestions.length; i++ ){
    let response = parseInt(window.prompt(annualExpenseQuestions[i]))
    annualExpenses = annualExpenses + response
}