function telephoneCheck(str) {
    return /^((1 )*(\d{3}( |-)*\d{3}( |-)*)\d{4}$|\(\d{3}\) *\d{3}-\d{4}$|1 *\(\d{3}\) *\d{3}-\d{4}$)/g.test(str) ? true : false;
}



telephoneCheck("555-555-5555");
