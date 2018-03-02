function dropElements(arr, func) {
    // Drop them elements.
    let newArr = [];
    arr.map((element, i) => {
        if (func(element) && newArr.length === 0) {
            newArr = arr.slice(i);
        }
    });
    return newArr;
}

dropElements([0, 1, 0, 1], function (n) { return n === 1; })
