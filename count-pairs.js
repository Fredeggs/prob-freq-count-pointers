// add whatever parameters you deem necessary
// solution here is O(n^2) which is bad

// function countPairs(arr, val) {
//   let pairCount = 0;
//   while (arr.length) {
//     let lastEl = arr.pop();
//     for (let i = 0; i < arr.length; i++) {
//       if (lastEl + arr[i] === val) pairCount++;
//     }
//   }
//   return pairCount;
// }

function countPairs(arr, val) {
  arr.sort((a, b) => a - b);
  let count = 0;
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let sum = arr[start] + arr[end];
    if (sum === num) {
      count++;
      start++;
      end--;
    } else if (sum < num) {
      start++;
    } else {
      end--;
    }
  }
  return count;
}

module.exports = { countPairs };
