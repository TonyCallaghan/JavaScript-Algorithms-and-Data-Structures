// Global vs. Local Scope in Functions

/*
It is possible to have both local and global variables with the same name. 
When you do this, the local variable takes precedence over the global variable.

In this example:
*/

var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}

// The function myFun will return "Head" because the local version of the variable is present.
