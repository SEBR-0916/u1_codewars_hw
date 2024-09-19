// 1) In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// Examples

// Kata.MakeNegative(1);  // return -1
// Kata.MakeNegative(-5); // return -5
// Kata.MakeNegative(0);  // return 0

const makeNegative = (num) =>{
    if(num < 0) return num
    else return num*-1
}
console.log(makeNegative(-1))
console.log(makeNegative(-5))
console.log(makeNegative(0))




// 2) You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function sum(numList) {
    if(numList.length === 0) return 0;
    let sum = 0;
    for(let i = 0; i < numList.length; i++){
      sum+= numList[i];
    }
   
    return sum;
  }
  console.log(sum)





// (3) Now you have to write a function that takes an argument and returns the square of it.
const squreOff = (num)=>{
    return num*num
}
console.log(squreOff(9))


//(4)  function to return the sum of numbers in a given list
function sum(numList) {
    if(numList.length === 0) return 0;
   
    let sum = 0;
    for(let i = 0; i < numList.length; i++){
      sum+= numList[i];
    }   
    return sum;
    }
  console.log(sum([1, 5.2, 4, 0, -1]))
  
  //(5)  function to reverse the string
  function reverse(str) {
    let reverseStr = "";
   
    for(let i = str.length-1; i >=0; i--) {
      reverseStr+= str[i];
    }
   
    return reverseStr;
  }
  console.log(reverse('world'))
  console.log(reverse("word"))




