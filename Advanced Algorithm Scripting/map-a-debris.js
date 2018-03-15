function orbitalPeriod(arr) {
	const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const newArr = [];

    function calculatePeriod(num) {
		return +(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + num, 3) / GM)).toFixed();
    }

    arr.forEach(el => {
        const orbitalPeriod = calculatePeriod(el.avgAlt);
        newArr.push({
            name: el.name,
            orbitalPeriod
        });
    });

    return newArr;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])
