function whatIsInAName(collection, source) {
    // What's in a name?
    const arr = [];
    // Only change code below this line
    const sourceKeys = Object.keys(source);
    const sourceKeyNumber = Object.keys(source).length;

    for (const item of collection) {
        const itemKeyNumber = Object.keys(item).length;

        if (itemKeyNumber >= sourceKeyNumber) {
            let matchNumber = 0;

            sourceKeys.forEach(sourceKey => {
                if (item.hasOwnProperty(sourceKey) && item[sourceKey] === source[sourceKey]) {
                    matchNumber++;
                }
            });

            if (matchNumber === sourceKeyNumber) {
                arr.push(item);
            }
        }
    }
    // Only change code above this line
    return arr;
  }

  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
