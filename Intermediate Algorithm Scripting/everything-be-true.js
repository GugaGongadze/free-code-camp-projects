function truthCheck(collection, pre) {
    let counter = 0;
    for (const tubby of collection) {
        if (tubby[pre]) {
            counter++;
        }
    }
    return counter === collection.length ? true : false;
}

truthCheck([
    {
        "user": "Tinky-Winky",
        "sex": "male"
    },
    {
        "user": "Dipsy",
        "sex": "male"
    },
    {
        "user": "Laa-Laa",
        "sex": "female"
    },
    {
        "user": "Po",
        "sex": "female"
    }
], "sex");
