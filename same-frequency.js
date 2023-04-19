// add whatever parameters you deem necessary

function createFrequencies(str) {
  let frequencies = new Map();
  for (const num of str) {
    const numberCount = frequencies.get(num);
    if (numberCount) {
      frequencies.set(num, numberCount + 1);
    } else {
      frequencies.set(num, 1);
    }
  }
  return frequencies;
}

function sameFrequency(num1, num2) {
  let str1 = num1.toString();
  let str2 = num2.toString();
  if (str1.length !== str2.length) return false;
  frequency1 = createFrequencies(str1);
  frequency2 = createFrequencies(str2);
  for (const num of frequency1.keys()) {
    const digitCount1 = frequency1.get(num);
    const digitCount2 = frequency2.get(num);
    if (!digitCount2) return false;
    if (digitCount1 !== digitCount2) return false;
  }
  return true;
}

module.exports = { sameFrequency };
