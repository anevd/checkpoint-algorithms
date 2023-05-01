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

// Всё, что ниже, нужно для тестов. Не изменяй этот код
const functions = { crawlTree, twoSum };
module.exports = functions;
