function factorialize(num) {
    if (num == 1)
        return num;
    else
        return num * factorialize(num - 1);
}

console.log(factorialize(5));