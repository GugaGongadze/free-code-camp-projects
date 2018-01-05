function chunkArrayInGroups(arr, size) {
    var res = [];
    for (var i = 0; i < arr.length; i += size) {        
        res.push(arr.slice(i, i + size));
    }
    return res;
}

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2));
