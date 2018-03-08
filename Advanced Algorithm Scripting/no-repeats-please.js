function permAlone(str) {
  const res = [];
  const strArr = str.split('');
  const regex = /(.)\1+/g;

  function swap(a, b) {
    let temp = strArr[a];
    strArr[a] = strArr[b];
    strArr[b] = temp;
  }

  function generate(num, strArr) {
    if (num === 1) {
      res.push(strArr.join(''));
    } else {
      for (let i = 0; i < num - 1; i++) {
        generate(num - 1, strArr);
        if (num % 2 === 0) {
          swap(i, num - 1);
        } else {
          swap(0, num - 1);
        }
      }

      generate(num - 1, strArr);
    }
  }

  generate(strArr.length, strArr);

  const filtered = res.filter(perm => !perm.match(regex));

  return filtered.length;
}

permAlone('aab');
