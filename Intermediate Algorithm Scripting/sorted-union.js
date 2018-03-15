function uniteUnique(arr) {
    const result = [];
    Array.from(arguments).map(argument => {
        argument.map(el => {
            if (!result.includes(el)) {
                result.push(el);
            }
        });
    });
    return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);