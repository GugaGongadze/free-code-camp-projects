function sumFibs(num) {
    const fibArr = [1];
    for (let i = 1; i <= num;) {
        fibArr.push(i);
        i = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
    }
    return fibArr
        .filter(element => element % 2 === 1)
        .reduce((total, num) => total + num);
}

sumFibs(4);
