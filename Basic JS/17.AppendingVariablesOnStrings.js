// Appending Variables to Strings

/*
Just as we can build a string over multiple lines out of string literals, we can also append variables to a string using the plus equals (+=) operator.

Example:
*/

var anAdjective = "awesome!";
var ourStr = "Tony is ";
ourStr += anAdjective;


console.log(ourStr); // ourStr is now "Tony is awesome!"
