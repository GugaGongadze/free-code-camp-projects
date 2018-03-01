function smallestCommons(arr) {
    const nums = [];
    let res = 0;

    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        nums.push(i);
    }


    for (let i = 1; i === i; i++) {
        let counter = 0;
        nums.forEach(num => {
            if (i % num === 0) {
                counter++;
            }
        });
        if (counter === nums.length) {
            res = i;
            break;
        }
    }
    return res;
}

smallestCommons([23, 18]);