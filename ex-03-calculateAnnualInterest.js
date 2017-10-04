/**
 * calculateAnnualInterest()
 *
 * Write a method called calculateInterestPayment() that
 * accepts a number parameter as a balance and calculates
 * annual interest payment for a risk for a profile
 *
 *  if creditScore is less than 200, the interest rate is 20%
 *  if creditScore is between 201 and 500, the interest rate is 10%
 *  if creditScore is more than 501 , the interest rate is 5%
 *
 *
**/


let someGuy = {
  name: 'Famos Jameis',
  age: 39,
  creditScore: 310
}

someGuy.calculateAnnualInterest = function(balance){
  var rate = 0;
  if (this.creditScore < 200) {
    rate = 0.2;
  } else if (this.creditScore <= 500) {
    rate = 0.1;
  } else {
    rate = 0.05;
  }
  return rate * balance;
}


//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
console.assert( someGuy.calculateAnnualInterest(40) === 4 )
console.assert( someGuy.calculateAnnualInterest(100) === 10 )
console.assert( someGuy.calculateAnnualInterest(3000) === 300 )


// Instructor Evaluation
// checking `isOlderThan` method with other context with .call method
//   https://docs.microsoft.com/en-us/scripting/javascript/reference/call-method-function-javascript
console.assert( someGuy.calculateAnnualInterest.call({ creditScore: 55 }, 100) === 20)
console.assert( someGuy.calculateAnnualInterest.call({ creditScore: 205 }, 100) === 10)
console.assert( someGuy.calculateAnnualInterest.call({ creditScore: 705 }, 100) === 5)
