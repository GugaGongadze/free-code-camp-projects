function updateInventory(arr1, arr2) {
    if (arr1.length === 0) {
        const obj2 = arr2.reduce((obj, key) => Object.assign(obj, { [key[1]]: key[0] }), {});
        const res = [];

        Object.keys(obj2)
            .sort()
            .forEach((el, i) => {
                res.push([obj2[el], el]);
            });
        return res;

    } else {
        const obj2 = arr2.reduce((obj, key) => Object.assign(obj, { [key[1]]: key[0] }), {});
        const obj1 = arr1.reduce((obj, key) => Object.assign(obj, { [key[1]]: key[0] }), {});
        const addToObject1 = [];

        for (const el in obj2) {
            let counter = 0;
            for (const inv in obj1) {
                if (inv === el) {
                    obj1[inv] = obj1[inv] + obj2[el];
                } else {
                    counter++;
                }
            }
            if (counter === 4) {
                addToObject1.push([el, obj2[el]]);
            }
        }

        addToObject1.forEach(arr => {
            obj1[arr[0]] = arr[1];
        });

        const res = [];

        Object.keys(obj1)
            .sort()
            .forEach((el, i) => {
                res.push([obj1[el], el]);
            });
        return res;
    }
}

updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])
