function confirmEnding (str, target) {
    return str.substr(str.length - 1) === target;
}

console.log((confirmEnding('Basian', 'n')));
