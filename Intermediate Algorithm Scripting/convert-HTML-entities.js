function convertHTML(str) {
    const newStr = str.split('');
    newStr.map((char, i) => {
        if (char === '&') {
            newStr[i] = '&amp;';
        } else if(char === '<') {
            newStr[i] = '&lt;';
        } else if (char === '>') {
            newStr[i] = '&gt;';
        } else if (char === '"') {
            newStr[i] = '&quot;';
        } else if (char === '\'') {
            newStr[i] = '&apos;';
        }
    });
    return newStr.join('');
}

convertHTML("Dolce & Gabbana");