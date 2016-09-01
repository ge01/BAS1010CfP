function palindrome(str) {
  // \W removes all non-alphanumeric characters:
  // \W is equivalent to [^A-Za-z0–9_]
  // g flag for global search
  var newStr = str.replace( /[^A-Za-z0–9]/g);
  return true;
}



palindrome("eye");

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
