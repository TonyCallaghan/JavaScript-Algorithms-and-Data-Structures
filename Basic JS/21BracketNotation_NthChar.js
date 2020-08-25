// Use Bracket Notation to Find the Nth Character in a String

/*
You can also use bracket notation to get the character at other positions within a string.

Remember that computers start counting at 0, so the first character is actually the zeroth character.

Example:
*/

var firstName = "Tony";
var secondLetterOfFirstName = firstName[1]; // secondLetterOfFirstName is "o"

// *************************

// Bracket Notation to Find the Last Character in a String

/*
In order to get the last letter of a string, you can subtract one from the string's length.

For example, if var firstName = "Charles", you can get the value of the last letter of the string by using firstName[firstName.length - 1].

Example:
*/

var firstName = "Charles";
var lastLetter = firstName[firstName.length - 1]; // lastLetter is "s"

// length = 7 characters - s has index of 6.
