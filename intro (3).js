//ARITHMETIC OPERATORS
//Addition
function sum(a,b){
    return a+b;
}
console.log(sum(6,4))

//Substraction
function substract(a,b){
    return a-b;
}
console.log(substract(6,4))

//Multiplication
function multiply(a,b){
    return a*b;
}
console.log(multiply(6,4))

// Increment/Decrement operators
let n = 6;
function increment(n) {
  n++;
  return n;
}
function decrement(n) {
  n--;
  return n;
}
console.log(increment(n));
console.log(decrement(n)); 


// Modulus operator
function modulus(a, b) {
  return a % b;
}
console.log(modulus(6, 4));
// END OF ARITHMETIC OPERATORS

// String operators
function concat(a, b) {
  return a.toString() + b.toString();
}
console.log(concat(6, 4)); 


// Comparison operators
function compare(a, b) {
  console.log("Equal: ", a === b);
  console.log("Not Equal: ", a !== b);
  console.log("Greater Than: ", a > b);
  console.log("Less Than: ", a < b);
  console.log("Greater Than or Equal: ", a >= b);
  console.log("Less Than or Equal: ", a <= b);
}
compare(6, 4);



// Logical operators
function logical(a, b) {
  console.log("AND: ", a > b && a === 6);
  console.log("OR: ", a < b || a === 6);
  console.log("NOT: ", !(a > b));
}
logical(6, 4);




// Assignment operators
let result = 2;
function assign(a, b) {
  result += a + b;
  return result;
}
console.log(assign(6, 4)); 



function simplify(number1, number2, operator) {
  if (operator === "+") {
    return number1 + number2;
  } else if (operator === "-") {
    return number1 - number2;
  } else if (operator === "*") {
    return number1 * number2;
  } else if (operator === "/") {
    return number1 / number2;
  } else {
    return   
 "Invalid Operator";
  }
}

const returnedValue = simplify(3, 7, "/");
console.log(returnedValue);
const Value = simplify(3,7, "+")
console.log(Value);
const Value2 = simplify(3, 7, "-");
console.log(Value2);