function repeatStringNumTimes(str, num) {
    if (num <= 0) {
        return '';
    } else {
        var res = '';
        for (var i = 0; i < num; i++) {
            res += str;
        }
        return res;
    }
}

console.log(repeatStringNumTimes('abc', 3));
