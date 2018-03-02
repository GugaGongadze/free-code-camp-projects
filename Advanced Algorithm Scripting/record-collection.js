// Setup
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
    for (const record in collection) {
        if (id == record) {
            const currentRecord = collection[record];
            if (value === '' && Object.keys(currentRecord).includes(prop)) {
                delete currentRecord[prop];
            } else {
                if (Object.keys(currentRecord).includes(prop)) {
                    if (prop === 'tracks') {
                        currentRecord[prop].push(value);
                    } else {
                        currentRecord[prop] = value;
                    }
                } else if (prop === 'tracks') {
                    currentRecord[prop] = [];
                    currentRecord[prop].push(value);
                } else {
                    currentRecord[prop] = value;
                }
            }
        }
    }

    return collection;
}

// Alter values below to test your code
updateRecords(2548, "artist", "")