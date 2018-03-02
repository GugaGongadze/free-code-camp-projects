function addTogether() {
    const args = Array.from(arguments);
    if (args.length === 2 && args.every(el => typeof el === 'number')) {
        return args[0] + args[1];
    } else if (args.length === 1 && typeof args[0] === 'number') {
        return function (x) {
            return typeof x === 'number' ? x + args[0] : undefined;
        };
    }
}

addTogether(2)(3);