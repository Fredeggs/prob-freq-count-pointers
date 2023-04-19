// add whatever parameters you deem necessary
function twoArrayObject(keyArr, valArr) {
  let obj = {};
  for (let i = 0; i < keyArr.length; i++) {
    let val = valArr[i];
    let key = keyArr[i];
    if (!val) {
      obj[key] = null;
    } else {
      obj[key] = val;
    }
  }
  return obj;
}

module.exports = { twoArrayObject };
