var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  array
  array = [`${element}`, ...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array
  array.unshift(`${element}`)
  return array
}

function addElementToEndOfArray(array, element) {
  array
  array = [...array, `${element}`]
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  
}

function accessElementInArray(array, index) {
  
}