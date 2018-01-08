function destroyer(arr) {
    var destroyers = [];
    for (var arg in arguments)
        if (arg > 0)
            destroyers.push(arr[arg]);

    return arr.filter(function(el) {
        return destroyers.indexOf(el) == -1;
    });
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));