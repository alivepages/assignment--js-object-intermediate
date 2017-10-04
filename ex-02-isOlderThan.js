/**
 * isOlderThan()
 *
 * Write a method called .isOlderThan() that accepts a number argument
 * and returns a boolean value of `true` if the input number is less
 * than the value of the `.age` property
 *
**/

let someGirl = {
  name: 'Lisa',
  age: 20
}

/*
 * On the `someGirl` object, write the '.isOlderThan()' method and its logic  below :
*/
someGirl.isOlderThan = function(number) {
  if (number < this.age) {
    return true;
  }
  return false;
}




//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

console.assert (typeof someGirl.isOlderThan === 'function')
console.assert (someGirl.isOlderThan(21) === false)
console.assert (someGirl.isOlderThan(44) === false)
console.assert (someGirl.isOlderThan(14) === true)
console.assert (someGirl.isOlderThan(8) === true)
console.assert (someGirl.isOlderThan(20) === false)


// Instructor Evaluation
// checking `isOlderThan` method with other context with .call method
//   https://docs.microsoft.com/en-us/scripting/javascript/reference/call-method-function-javascript
console.assert( someGirl.isOlderThan.call({ age: 20 },34) === false)
console.assert( someGirl.isOlderThan.call({ age: 30 },34) === false)
console.assert( someGirl.isOlderThan.call({ age: 15 },10) === true)
