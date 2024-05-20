const getMax = (...arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    if (max < arr[i]) { max = arr[i]; }
  }
  return max;
};
console.log(getMax([1, 10, 8]));
