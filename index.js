function hasTargetSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    const difference = target - arr[i];
    if (arr.slice(0, i).concat(arr.slice(i + 1)).includes(difference)) {
      return true;
    }
  }
  return false;
}

module.exports = hasTargetSum;
