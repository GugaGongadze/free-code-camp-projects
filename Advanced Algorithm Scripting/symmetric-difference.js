function sym(args) {
    const res = [];
    const argArr = Array.from(arguments);
    const cleanArr = [];
    argArr.forEach(arg => {
        const temp = [];
        arg.forEach(el => {
            if (!temp.includes(el)) {
                temp.push(el);
            }
        });
        cleanArr.push(temp);
    });
    cleanArr.forEach(arg => {
        arg.forEach(el => {
            if (!res.includes(el)) {
                res.push(el);
            } else {
                res.splice(res.indexOf(el), 1);
            }
        });
    });
    return res;
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])