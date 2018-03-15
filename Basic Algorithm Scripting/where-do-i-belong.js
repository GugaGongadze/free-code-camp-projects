function getIndexToIns(arr, num) {
    arr.push(num);
    return arr.sort(function (a, b) {
        return a - b;
    }).indexOf(num);
}

console.log(getIndexToIns([3, 10, 5], 3));