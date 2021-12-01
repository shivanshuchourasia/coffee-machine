const { prepareCoffee } = require('./preparation')
const testCases = require('./testCases')

for(let i = 0; i < testCases.length; i++) {
  test('prepare coffee orders', () => {
    let testCase = testCases[i]
    const result = prepareCoffee(testCase)
    // console.log(`Test Case ${i+1} Output:\n${JSON.stringify(result.machine.orders)}`)

    expect(result.machine).toHaveProperty('isCaseValid')
    if(result.machine.isCaseValid) {
      expect(result.machine.orders).toBeTruthy()
    }
  })
}