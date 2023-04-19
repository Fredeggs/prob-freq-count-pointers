// add whatever parameters you deem necessary
function separatePositive(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] < 0 && arr[right] > 0) {
      // swap and increment both
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    } else if (arr[left] > 0 && arr[right] > 0) {
      // increment left
      left++;
    } else if (arr[left] < 0 && arr[right] < 0) {
      // increment right
      right--;
    } else {
      left++;
      right--;
    }
  }
  return arr;
}

module.exports = { separatePositive };
