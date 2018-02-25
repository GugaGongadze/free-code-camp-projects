function convertToRoman(num) {
  let res = '';

  while (num > 0) {
    if (num >= 1000) {
      res += 'M';
      num -= 1000;
    } else if (num >= 500) {
      if (num >= 900) {
        res += 'CM';
        num -= 900;
      } else {
        res += 'D';
        num -= 500;
      }
    } else if (num >= 100) {
      if (num >= 400) {
        res += 'CD';
        num -= 400;
      } else {
        res += 'C';
        num -= 100;
      }
    } else if (num >= 50) {
      if (num >= 90) {
        res += 'XC';
        num -= 90;
      } else {
        res += 'L';
        num -= 50;
      }
    } else if (num >= 10) {
      if (num >= 40) {
        res += 'XL';
        num -= 40;
      } else {
        res += 'X';
        num -= 10;
      }
    } else if (num >= 5) {
      if (num >= 9) {
        res += 'IX';
        num -= 9;
      } else {
        res += 'V';
        num -= 5;
      }
    } else if (num >= 1) {
      if (num >= 4) {
        res += 'IV';
        num -= 4;
      } else {
        res += 'I';
        num -= 1;
      }
    }
  }
  return res;
}

convertToRoman(1984);
