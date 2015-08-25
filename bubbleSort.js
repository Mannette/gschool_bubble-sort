function bubbleSort (arr) {
  var cached;

  for (var x = 0; x < arr.length; x++) {
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] < arr[i]) {
        // swap
        cached = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = cached;
        // console.log(arr);
      }
    }
  }
  return arr;
}

module.exports = bubbleSort;
