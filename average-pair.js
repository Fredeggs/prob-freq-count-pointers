// add whatever parameters you deem necessary

function findAverage(num1, num2) {
  return (num1 + num2) / 2;
}

function averagePair(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let average = findAverage(arr[left], arr[right]);
    if (average === val) {
      return true;
    }
    if (average < val) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

module.exports = { averagePair };
