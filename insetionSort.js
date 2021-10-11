// it is like start with the 2nd ele
// then create a check for the left portion
// then place it one by one
console.log("*********** SELECTION SORT **********");
arr = [34, 67, 9, 32, 55, 64, 3];

const InserSort = (arr) => {
	const Len = arr.length;
	let i, j, currentVal;
	for (i = 1; i < Len; i++) {
		currentVal = arr[i];
		// loop for other half
		for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
			// if (arr[j] > currentVal) {
			// we need to shift if one place + 1
			arr[j + 1] = arr[j];
			// }
			// at the jth place it is we have to stick the currval
		}
		arr[j + 1] = currentVal;
	}
	return arr;
};

console.log(InserSort(arr));
