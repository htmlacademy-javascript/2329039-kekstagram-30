function checkingLength(string, length) {
  return string.length <= length;
}

function isPalindrome(string) {
  const normalizeString = string.replaceAll(' ', '').toLowerCase();
  let newString = '';
  for (let i = normalizeString.length - 1; i >= 0; i--) {
    newString += normalizeString[i];
  }
  return newString === normalizeString;
}

console.log(isPalindrome('Лёша на полке клопа нашёл '));
