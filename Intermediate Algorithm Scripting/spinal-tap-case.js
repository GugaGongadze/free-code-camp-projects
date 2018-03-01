function spinalCase(str) {
    let newStr = [];

    str.split('').map((char, i) => {
        if (char === char.toUpperCase()) {
            if (char.match(/\W/) || char === '_') {
                newStr.push('-');
            } else if (i === 0){
                newStr.push(char.toLowerCase())
            } else if (/\W/.test(str[i - 1]) === false && str[i - 1] !== '_') {
                newStr.push('-' + char.toLowerCase());
            } else {
                newStr.push(char.toLowerCase());
            }
        } else {
            newStr.push(char);
        }
    });

    return newStr.join('');

}

spinalCase('The_Andy_Griffith_Show');