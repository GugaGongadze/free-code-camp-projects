function findLongestWord(str) {
    return str.split(' ').reduce(function(res, word) {
        return Math.max(res, word.length);
    }, 0);
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
