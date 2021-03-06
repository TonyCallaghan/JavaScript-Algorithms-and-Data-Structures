// Local Scope and Functions

/*
Variables which are declared within a function, as well as the function
parameters have local scope. That means, they are only visible within that function.

Here is a function myTest with a local variable called loc.
*/

function myTest() {
  var loc = "foo";
  console.log(loc);
}
myTest(); // logs "foo"
console.log(loc); // loc is not defined

// loc is not defined outside of the function.
