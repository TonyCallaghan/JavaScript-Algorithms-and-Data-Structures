// Quoting Strings with Single Quotes

/*
String values in JavaScript may be written with single or double quotes, 
as long as you start and end with the same type of quote. Unlike some 
other programming languages, single and double quotes work the same in JavaScript.
*/

doubleQuoteStr = "This is a string"; 
singleQuoteStr = 'This is also a string';

// SAME THING

/*
The reason why you might want to use one type of quote over the other is 
if you want to use both in a string. This might happen if you want to save 
a conversation in a string and have the conversation in quotes. Another use 
for it would be saving an <a> tag with various attributes in quotes, all within a string.
*/

conversation = 'Finn exclaims to Jake, "Algebraic!"';

goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
badStr = 'Finn responds, "Let's go!"'; // Throws an error

// IRL EXAMPLE:

var myStr = '<a href="http://www.example.com" target="_blank">Link</a>;'
