function fearNotLetter(str) {
    const stringInCharCodes = str.split('').map(letter => letter.charCodeAt(0));
    let temp = stringInCharCodes[0];
    let counter;
    let missingChar;
    stringInCharCodes.forEach(code => {
        if (code - temp === 1 || code - temp === 0) {
            temp = code;
            counter++;
        } else {
            missingChar = String.fromCharCode(code - (code - temp - 1));
        }
    });
    return counter !== str.length ? missingChar : undefined;
}
fearNotLetter("abce");