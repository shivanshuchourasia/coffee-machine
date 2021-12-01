const { prepareCoffee, logOutput, logTestCaseOutput } = require('./preparation')
const testCases = require('./testCases')

// console.log('NODE_ENV: ', process.env.NODE_ENV)
if(process.env.NODE_ENV && process.env.NODE_ENV === 'dev') {
  for(let i = 0; i < testCases.length; i++) {
    const coffeeMachine = testCases[i]
    const output = prepareCoffee(coffeeMachine)
    logTestCaseOutput(output, i)
    logOutput(output)
  }
} else {
  const coffeeMachine = testCases[0]
  const output = prepareCoffee(coffeeMachine)
  logOutput(output)
}