function mutation(arr) {
    var value = arr[0].toLowerCase();
    var key = arr[1].toLowerCase();
    var temp = 0;

    for (var i = 0; i < key.length; i++) {
        for (var b = 0; b < value.length; b++) {
            if (key[i] == value[b])
                temp++;
        }
    }

    if (temp < key.length)
        return false;
    else
        return true;
}

console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));