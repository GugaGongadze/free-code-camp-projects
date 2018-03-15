function rot13(str) {
    return str.split('')
        .map(function (letter) {
            return String.fromCharCode(((letter.charCodeAt(0) - 65 + 13) % 26 + 65));
        })
        .join('')
        .replace(/\W/g, ' ');
}

console.log(rot13('SERR PBQR PNZC'));