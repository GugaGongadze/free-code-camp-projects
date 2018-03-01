function sumPrimes(num) {
    const primes = [];
    for (let i = 2; i <= num; i++) {
        let divisibleBy = 0;
        for (let b = 1; b <= i; b++) {
            if (i % b === 0) {
                divisibleBy++;
            }
        }
        if (divisibleBy <= 2) {
            primes.push(i);
        }
    }
    return primes.reduce((total, prime) => total + prime);
}

sumPrimes(10);
