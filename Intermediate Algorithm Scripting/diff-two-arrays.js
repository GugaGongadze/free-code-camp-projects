function diffArray(arr1, arr2) {
    let newArr = [];

    let uniqueInArr1 = arr1.filter((element) => {
        return arr2.indexOf(element) === -1;
    });

    let uniqueInArr2 = arr2.filter((element) => {
        return arr1.indexOf(element) === -1;
    });

    newArr = uniqueInArr1.concat(uniqueInArr2);
    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
