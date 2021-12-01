const _ = require('lodash')

const prepareCoffee = data => {
  try {
    data = validateMachine(data)
    // Return if the input isn't valid
    if(!data.machine.isCaseValid) {
      return data
    }

    // leftItems will have the remaining ingredients data
    data.machine.leftItems = {...data.machine.total_items_quantity}
    let items = data.machine.leftItems
    const beverages = data.machine.beverages
    const orders = [] // orders will have the order details, like, it's name, whether prepared or not, unavailable and/or insufficient ingredient for the order

    // Loop through all the orders
    for(const beverage in beverages) {
      const machineItems = {...items}
      let order = {
        beverage,
        isPrepared: true
      }
      // Loop through all the ingredients needed for the order
      for(const ingredient in beverages[beverage]) {
        if(!items[ingredient]) {
          order.isPrepared = false
          order.unavailableItem = ingredient
          break
        } else if(items[ingredient] < beverages[beverage][ingredient]) {
          order.isPrepared = false
          order.insufficientItem = ingredient
        } else if(order.isPrepared) {
          machineItems[ingredient] -= beverages[beverage][ingredient]
        }
      }

      if(order.isPrepared) {
        items = machineItems
      }
      orders.push(order)
    }

    data.machine.orders = orders
    data.machine.leftItems = items
    return data
  } catch (err) {
    console.error(err)
  }
}

// Validate the input
const validateMachine = data => {
  data.machine.isCaseValid = true

  if(!data.machine ||
    !data.machine.outlets || !data.machine.outlets.count_n || data.machine.outlets.count_n <= 0 ||
    !data.machine.total_items_quantity || _.isEmpty(data.machine.total_items_quantity) ||
    !data.machine.beverages || _.isEmpty(data.machine.beverages)) {
      data.machine.isCaseValid = false
  }

  return data
}

// Log the result
const logOutput = data => {
  if(!data.machine.isCaseValid) {
    console.log('OUTPUT: Invalid Input!')
    return
  }

  if(data.machine.orders) {
    console.log('OUTPUT:')
    for(let i = 0; i < data.machine.orders.length; i++) {
      const order = data.machine.orders[i]
      if(order.isPrepared) {
        console.log(`${order.beverage} is prepared`)
      } else if(order.unavailableItem) {
        console.log(`${order.beverage} cannot be prepared because ${order.unavailableItem} is not available`)
      } else if(order.insufficientItem) {
        console.log(`${order.beverage} cannot be prepared because ${order.insufficientItem} is not sufficient`)
      }
    }
    console.log('\nINGREDIENTS LEFT:\n', data.machine.leftItems)
  }
}

// Log the result with testcase data
const logTestCaseOutput = (data, testId) => {
  console.log(`\n----------------------------------------------------------------------------------\nTest Case: ${testId + 1}`)
  if(data.machine.isCaseValid) {
    console.log('INPUT:\n', data.machine, '\n')
  }
}

module.exports = {
  prepareCoffee,
  logOutput,
  logTestCaseOutput,
}