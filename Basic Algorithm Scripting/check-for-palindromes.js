function palindrome(str) {
    return str.replace(/[\W_]/g, '').toLowerCase() ===
        str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}

console.log(palindrome('2_A3*3#A2'));