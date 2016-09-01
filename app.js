function palindrome(str) {
  /*The RegExp constructor creates a regular expression object for matching text with a pattern.
  The replace() method returns a new string with some or all matches of a pattern
  replaced by a replacement. The pattern can be a string or a RegExp, and the
  replacement can be a string or a function to be called for each match.
  str.replace(regexp|substr, newSubStr|function)*/
  var re = /[^A-Za-z0-9]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');

  // Turn string into an array - split('')
  // Reverse the array - reverse()
  // Turn the array back into a string - join('')
  // Store the string in reverseStr
  var reverseStr = lowRegStr.split('').reverse().join('');
  //console.log(lowRegStr);

  // return true when the reversed string matches the string that was passed
  // through the function palindrome using the str parameter
  return reverseStr === lowRegStr;
}

console.log(palindrome("eye")); // true
console.log(palindrome("_Eye")); // true
console.log(palindrome("race car")); // true
console.log(palindrome("not a palindrome")); // false
console.log(palindrome("A man, a plan, a canal. Panama")); // true
console.log(palindrome("never odd or even")); // true
console.log(palindrome("nope")); // false
console.log(palindrome("almostomla")); // false
console.log(palindrome("My age is 0, 0 si ega ym.")); // true
console.log(palindrome("1 eye for of 1 eye.")); // false
console.log(palindrome("0_0 (: /-\ :) 0-0")); // true
console.log(palindrome("five|\_/|four")); // false

// String.prototype.replace()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

// Three Ways to Reverse a String in JavaScript
// https://medium.freecodecamp.com/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb#.gmxzjjgzf
