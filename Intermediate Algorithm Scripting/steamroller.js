function steamrollArray(arr) {
    const newArr = [].concat(...arr);

    if (newArr.some(Array.isArray)) {
        return steamrollArray(newArr)
    } else {
        return newArr;
    }

}

steamrollArray([1, [2], [3, [[4]]]]);