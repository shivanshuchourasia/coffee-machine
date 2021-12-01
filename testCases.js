module.exports = [
  // Given testcase
  {
    "machine": {
      "outlets": {
        "count_n": 4
      },
      "total_items_quantity": {
        "hot_water": 500,
        "hot_milk": 500,
        "ginger_syrup": 100,
        "sugar_syrup": 100,
        "tea_leaves_syrup": 100
      },
      "beverages": {
        "hot_tea": {
          "hot_water": 200,
          "hot_milk": 100,
          "ginger_syrup": 10,
          "sugar_syrup": 10,
          "tea_leaves_syrup": 30
        },
        "hot_coffee": {
          "hot_water": 100,
          "ginger_syrup": 30,
          "hot_milk": 400,
          "sugar_syrup": 50,
          "tea_leaves_syrup": 30
        },
        "black_tea": {
          "hot_water": 300,
          "ginger_syrup": 30,
          "sugar_syrup": 50,
          "tea_leaves_syrup": 30
        },
        "green_tea": {
          "hot_water": 100,
          "ginger_syrup": 30,
          "sugar_syrup": 50,
          "green_mixture": 30
        }
      }
    }
  },
  // Case when every order can be prepared
  {
    "machine": {
      "outlets": {
        "count_n": 4
      },
      "total_items_quantity": {
        "hot_water": 500,
        "hot_milk": 500,
        "ginger_syrup": 100,
        "sugar_syrup": 100,
        "tea_leaves_syrup": 100
      },
      "beverages": {
        "hot_tea": {
          "hot_water": 200,
          "hot_milk": 100,
          "ginger_syrup": 10,
          "sugar_syrup": 10,
          "tea_leaves_syrup": 30
        },
        "hot_coffee": {
          "hot_water": 100,
          "ginger_syrup": 30,
          "hot_milk": 400,
          "sugar_syrup": 50,
          "tea_leaves_syrup": 30
        }
      }
    }
  },
  // Case when no order can be prepared
  {
    "machine": {
      "outlets": {
        "count_n": 2
      },
      "total_items_quantity": {
        "hot_water": 50,
        "hot_milk": 500,
        "ginger_syrup": 100
      },
      "beverages": {
        "hot_tea": {
          "hot_water": 200,
          "hot_milk": 100,
          "ginger_syrup": 10,
          "sugar_syrup": 10,
          "tea_leaves_syrup": 30
        },
        "hot_coffee": {
          "hot_water": 100,
          "ginger_syrup": 30,
          "hot_milk": 400,
          "sugar_syrup": 50,
          "tea_leaves_syrup": 30
        }
      }
    }
  },
  // Case with invalid input
  {
    "machine": {
      "outlets": {
        // "count_n": 2
      },
      "total_items_quantity": {
        "hot_water": 50,
        "hot_milk": 500,
        "ginger_syrup": 100
      },
      "beverages": {
        "hot_tea": {
          "hot_water": 200,
          "hot_milk": 100,
          "ginger_syrup": 10,
          "sugar_syrup": 10,
          "tea_leaves_syrup": 30
        },
        "hot_coffee": {
          "hot_water": 100,
          "ginger_syrup": 30,
          "hot_milk": 400,
          "sugar_syrup": 50,
          "tea_leaves_syrup": 30
        }
      }
    }
  },
  // Case with no ingredients available
  {
    "machine": {
      "outlets": {
        "count_n": 4
      },
      "total_items_quantity": {
        "hot_water": 0,
        "hot_milk": 0,
        "ginger_syrup": 0
      },
      "beverages": {
        "hot_tea": {
          "hot_water": 200,
          "hot_milk": 100,
          "ginger_syrup": 10,
          "sugar_syrup": 10,
          "tea_leaves_syrup": 30
        },
        "hot_coffee": {
          "hot_water": 100,
          "ginger_syrup": 30,
          "hot_milk": 400,
          "sugar_syrup": 50,
          "tea_leaves_syrup": 30
        }
      }
    }
  },
  // Case with no orders
  {
    "machine": {
      "outlets": {
        "count_n": 2
      },
      "total_items_quantity": {
        "hot_water": 1000,
        "hot_milk": 600,
        "ginger_syrup": 100,
        "sugar_syrup": 100,
        "tea_leaves_syrup": 100,
        "elaichi_syrup": 50,
      },
      "beverages": {}
    }
  },
  // Case with more orders than the machine outlets
  {
    "machine": {
      "outlets": {
        "count_n": 2
      },
      "total_items_quantity": {
        "hot_water": 1000,
        "hot_milk": 600,
        "ginger_syrup": 100,
        "sugar_syrup": 100,
        "tea_leaves_syrup": 100,
        "elaichi_syrup": 50,
      },
      "beverages": {
        "hot_tea": {
          "hot_water": 200,
          "hot_milk": 100,
          "ginger_syrup": 10,
          "sugar_syrup": 10,
          "tea_leaves_syrup": 30
        },
        "hot_coffee": {
          "hot_water": 100,
          "ginger_syrup": 30,
          "hot_milk": 400,
          "sugar_syrup": 50,
          "tea_leaves_syrup": 30
        },
        "elaichi_tea": {
          "hot_water": 50,
          "sugar_syrup": 10,
          "hot_milk": 10,
          "elaichi_syrup": 5,
          "tea_leaves_syrup": 10
        }
      }
    }
  },
]