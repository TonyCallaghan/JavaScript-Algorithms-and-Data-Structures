// Concatenating Strings with Plus Operator

/*
In JavaScript, when the + operator is used with a String value, 
it is called the concatenation operator. You can build a new 
string out of other strings by concatenating them together.

Example:
*/

var ourStr = "I come first. " + "I come second.";
// ourStr is "I come first. I come second."

/*
Note
Watch out for spaces. Concatenation does not add spaces between 
concatenated strings, so you'll need to add them yourself.

Example:
*/

var name = "Tony";
var intro = "Hi i am " + name + "!"

consoleLog(intro); // Hi i am Tony!


/*
***********
We can also use the += operator to concatenate a string onto the end 
of an existing string variable. This can be very helpful to break a 
long string over several lines.

*/

var ourStr = "I come first. ";
ourStr += "I come second.";
// ourStr is now "I come first. I come second."
