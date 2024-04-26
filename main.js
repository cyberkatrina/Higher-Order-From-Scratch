
let numbers = [0, 10, 20, 30, 40, 50, 60, 70]

// .map() - function that takes an array of items and a function that returns an array with each item manipulated by that function.
const customMap = (array, callback) => {
  let newArray = []
  // runs callback function on every element in array and adds it to the new array after calculation
  for (let num of array) {
    let element = callback(num)
    newArray.push(element)
  }
  return newArray
}

// callback function that multiplies the given element by 10
const timesTen = customMap(numbers, (element) => element * 10)

console.log(timesTen)


let foods = [
  {name: 'steak', price: 20},
  {name: 'fruit', price: 8},
  {name: 'salad', price: 10},
  {name: 'chips', price: 3},
  {name: 'ice cream', price: 5},
]; 

// .reduce() - function that takes an array of food orders with their amounts and returns the total amount of all the food orders.
const customReduce = (array, callback, initialValue) => {
  let accumulator = initialValue
  // runs callback function on every element in array and adds every price property to the sum
  for (let value in array) {
    let current = array[value]
    accumulator = callback(current.price, accumulator)
  }
  return accumulator
}

// callback function to calculate the sum of elements
const totalPrice = customReduce(foods, (element, accumulator) => accumulator += element, 0)

console.log(totalPrice)


let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// .filter() - function that takes an array of items and a function that returns an array with only the items that return true in the function.
const customFilter = (array, callback) => {
  let newArray = []
  // runs callback function on every element in array and adds it to the new array after filtering
  for (let num of array) {
    if (callback(num)) {
      newArray.push(num)
    }
  }
  return newArray
}

// callback function to filter the even elements out
const filterEvens = customFilter(nums, (element) => element % 2 == 0)

console.log(filterEvens)