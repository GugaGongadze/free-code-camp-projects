function pairwise(arr, arg) {
	let newArr = arr.slice(0);
	let counter = [];

	newArr.forEach((element, index) => {
		newArr.forEach((el, i) => {
			if (element + el === arg) {
				if (index !== i && index < i) {
					counter.push([index, i]);
				}
			}
		});
	});

	let res = counter[0];
	counter.slice(1).forEach(indices => {
		if (!res.includes(indices[0]) && !res.includes(indices[1])) {
			res.push(...indices);
		}
	});

	return res ? res.reduce((total, index) => total + index) : 0;
}

pairwise([1, 4, 2, 3, 0, 5], 7);
