// Algoritmos auxiliares

const Compare = {
	LESS_THAN: -1,
	BIGGER_THAN: 1,
}
function defaultCompare(a, b) {
	if (a === b) {
		return 0
	}
	return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}
function swap(array, a, b) {
	;[array[a], array[b]] = [array[b], array[a]]
}

//
function bubbleSort(array, compareFn = defaultCompare) {
	const { length } = array
	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length - 1 ; j++) {
			if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
				swap(array, j, j + 1)
			}
		}
	}
	return array
}
//Ou
function modifiedBubbleSort(array, compareFn = defaultCompare) {
	const { length } = array
	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length - 1 -i; j++) {
			if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
				swap(array, j, j + 1)
			}
		}
	}
	return array
}


function selectionSort(array, compareFn = defaultCompare) {
	const { length } = array
	let indexMin
	for (let i = 0; i < length - 1; i++) {
		indexMin = i
		for (let j = 0; j < length; j++) {
			if (compareFn(array[indexMin], array[j]) === Compare.BIGGER_THAN) {
				indexMin = j
			}			
		}
		if (i !== indexMin) {
			swap(array, i, indexMin)
		}
	}
	return array
}

function insertionSort(array, compareFn = defaultCompare) {
	const { length } = array
	let temp
	for (let i = 1; i < length; i++) {
		let j = i
		temp = array[i]
		while (j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN) {
			array[j] = array[j - 1]
			j--
		}
		array[j] = temp
	}
	return array
}