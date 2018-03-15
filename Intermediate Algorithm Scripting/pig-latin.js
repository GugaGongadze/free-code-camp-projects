function translatePigLatin(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.includes(str.charAt(0))) {
        str = str.concat('way');
    } else {
        let index = 0;
        const firstvowelIndex = vowels.forEach(vowel => {
            if (str.indexOf(vowel) > -1) {
                if (index ===0 || str.indexOf(vowel) < index) {
                    index = str.indexOf(vowel);
                }
            }

        });

        str = str.slice(index).concat(str.slice(0, index) + 'ay');
    }
    return str;
}

translatePigLatin('cconsonant');
