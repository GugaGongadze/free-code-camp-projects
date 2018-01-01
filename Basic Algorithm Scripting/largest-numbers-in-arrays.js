function largestNumbers(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var number = 0;
        for (var b = 0; b < arr[i].length; b++) {
            if (arr[i][b] > number) {
                number = arr[i][b];
            }
        }
        result.push(number);
    }
    return result;
}

console.log(largestNumbers([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
