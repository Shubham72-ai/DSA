const arr1 = [1, 5, 8, 11, 15];
const arr2 = [0, 3, 9, 14, 19, 20];

const MargeArray = (arr1, arr2) => {
	let i = 0,
		j = 0; // this are our markers
	let newArr = [];
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			newArr.push(arr1[i]);
			console.log(newArr);
			i++;
		} else {
			newArr.push(arr2[j]);
			console.log(newArr);
			j++;
		}
	}
	// now we have to check if the array1 or array2 has some ele left or not
	while (i < arr1.length) {
		newArr.push(arr1[i]);
		i++;
	}
	// now same for the j
	while (j < arr2.length) {
		newArr.push(arr2[j]);
		j++;
	}
	return newArr;
};

console.log(MargeArray(arr1, arr2));
