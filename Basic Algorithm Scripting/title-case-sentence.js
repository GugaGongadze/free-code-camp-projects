function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
        return word[0].toUpperCase() + word.slice(1);
    }).join(' ');
}

console.log(titleCase("I'm a little tea pot"));