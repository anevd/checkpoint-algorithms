// Код для первого задания напиши в этой функции
function crawlTree(tree) {
	let string = "";
	tree.forEach((el) => {
		if (Array.isArray(el)) {
			string += crawlTree(el);
		} else {
			string += el;
		}
	});
	return string;
}

/* console.log(
	crawlTree([
		[
			[["П", "р"], "и"],
			["в", ["е", "т"]],
		],
		[["и", "к"], "и"],
	])
); */
// console.log(crawlTree([["П", "и"], ["с", ["т", ["о"]]], "л", [["е", "т"], [["и", "к"]]], "и"]));

// Код для второго задания напиши в этой функции
function twoSum(arr, target, start = 0) {
	let indexes = [];
	if (arr[start] + arr[start + 1] === target) return [start, start + 1];
	for (let i = start; i < arr.length; i++) {
		if (arr[start] + arr[i] === target && i !== start) {
			indexes.push(start);
			indexes.push(i);
		} else {
			return twoSum(arr, target, start + 1);
		}
	}
	return indexes;
}

// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 3], 6));

// Всё, что ниже, нужно для тестов. Не изменяй этот код
const functions = { crawlTree, twoSum };
module.exports = functions;
