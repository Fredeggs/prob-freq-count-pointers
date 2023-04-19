// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
  let sought = str1[0];
  let newStringArr = [];
  let count = 0;
  for (char of str2) {
    if (char === sought) {
      newStringArr.push(char);
      count++;
      sought = str1[count];
    }
  }
  const newString = newStringArr.join("");
  if (str1 === newString) return true;
  return false;
}

module.exports = { isSubsequence };
