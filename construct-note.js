// add whatever parameters you deem necessary

function freqCounter(str) {
  let frequencies = new Map();
  for (const char of str) {
    let value = frequencies.get(char);
    if (value) {
      frequencies.set(char, value + 1);
    } else {
      frequencies.set(char, 1);
    }
  }
  return frequencies;
}

// Character Pool: {a: 1, b: 1, c: 1}
// String Wanted: {a:2, b:1}

function constructNote(str1, str2) {
  let strWanted = freqCounter(str1);
  let charPool = freqCounter(str2);
  for (char of charPool.keys()) {
    let numWantedChars = strWanted.get(char);
    let numAvailableChars = charPool.get(char);
    if (numWantedChars) {
      let usedCharPool = numWantedChars - numAvailableChars;
      if (usedCharPool <= 0) {
        strWanted.delete(char);
      } else {
        strWanted.set(char, numWantedChars - 1);
      }
    }
  }
  if (strWanted.size > 0) return false;
  return true;
}

module.exports = { constructNote };
