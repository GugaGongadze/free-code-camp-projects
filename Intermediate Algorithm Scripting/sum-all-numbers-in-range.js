function sumAll(arr) {
  let lower = Math.min(arr[0], arr[1]);
  let higher = Math.max(arr[0], arr[1]);
  let sum = 0;
  for (let i = lower; i <= higher; i++) {
    sum += i;
  }

  return sum;
}

sumAll([1, 4]);