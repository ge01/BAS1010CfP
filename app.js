function palindrome(str) {
/*The RegExp constructor creates a regular expression object for matching text with a pattern.
The replace() method returns a new string with some or all matches of a pattern
replaced by a replacement. The pattern can be a string or a RegExp, and the
replacement can be a string or a function to be called for each match.

str.replace(regexp|substr, newSubStr|function)*/
var re = /[^A-Za-z0-9]/g;

var lowRegStr = str.toLowerCase().replace(re, '');
console.log(lowRegStr);
  return true;
}

palindrome("_Eye");
palindrome("race car");
palindrome("A man, a plan, a canal. Panama");

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
