// Compound Assignment With Augmented Addition

/*
In programming, it is common to use assignments to modify the contents of a variable. 
Remember that everything to the right of the equals sign is evaluated first, so we can say:

myVar = myVar + 5;

to add 5 to myVar. Since this is such a common pattern, there are operators which do both 
a mathematical operation and assignment in one step.

// Operators:
// +=  
// -= 
// *=
// /=

Example: 
*/

var myVar = 1;
myVar += 5;
console.log(myVar); // Returns 6


// Examples "2"

var a = 3;
var b = 17;
var c = 12;
var d = 19.2;

// Only change code below this line
a = a + 12; // > a += 12;
b = 9 - b;  // > b -= 9;
c = c * 7;  // > c *= 7;
d = d / 2;  // > d /= 2; 
  
