function pairElement(str) {
    const splitStr = str.split('');
    const result = [];
    splitStr.forEach(strand => {
        const pair = [];
        pair.push(strand);
        if (strand === 'A') {
            pair.push('T');
        } else if (strand === 'T') {
            pair.push('A');
        } else if (strand === 'G') {
            pair.push('C');
        } else if (strand === 'C') {
            pair.push('G');
        }
        result.push(pair);
    });
    return result;
}

pairElement("GCG");