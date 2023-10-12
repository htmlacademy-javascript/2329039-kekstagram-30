function checkingLength(string, length) {
  if (string.length <= length) {
    return true;
  } else {
    return false;
  }
}

function isPalindrome(string) {
  const normalizeString = string.replaceAll().toLowerCase();
  let newString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string.at(i);
  }
  if (newString === normalizeString) {
    return true;
  } else {
    return false;
  }
}
