function findElement(arr, func) {

    var num = 0;
    return arr.filter(element => func(element))[0];
}

findElement([1, 2, 3, 4], function (num) { return num % 2 === 0; });