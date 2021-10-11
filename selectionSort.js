// // so first find smallest element and then
// swap it with first this is the most imp thing about selection sort

console.log("*********** SELECTION SORT **********");
arr = [34, 67, 9, 32, 55, 64, 3];
const Lnth = arr.length;
for (let i = 0; i < Lnth; i++) {
	let pos = i;
	let min = i;
	for (let j = i; j < Lnth; j++) {
		// console.log(min, arr[j]);
		if (arr[j] < arr[min]) {
			min = j;
		}
	} // at the end of this loop we will found the min
	// console.log("->", min, arr[pos]);
	let temp = arr[pos];
	arr[pos] = arr[min];
	arr[min] = temp;
}
console.log(arr);
