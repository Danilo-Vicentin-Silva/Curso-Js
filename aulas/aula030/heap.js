//Métodos auxiliares
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
const swap = (array, a, b) => ([array[a], array[b]] = [array[b], array[a]])

class MinHeap {
	constructor(CompareFn = defaultCompare) {
		this.CompareFn = CompareFn
		this.heap = []
	}
	getLeftIndex(index) {
		return 2 * index + 1
	}
	getRightIndex(index) {
		return 2 * index + 2
	}
	getParentIndex(index) {
		if (index === 0) {
			return undefined
		}
		return Math.floor((index - 1) / 2)
	}
	insert(value) {
		if (value != null) {
			this.heap.push(value)
			this.siftUp(this.heap.length - 1)
			return true
		}
		return false
	}
	siftUp(index) {
		let parent = this.getParentIndex(index)
		while (
			index > 0 &&
			this.CompareFn(this.heap[parent], this.heap[index]) > Compare.BIGGER_THAN
	
		) {
			swap(this.heap, parent, index)
			index = parent
			parent = this.getParentIndex(index)
		}
	}
	size() {
		return this.heap.length
	}
	isEmpty() {
		return this.size() === 0
	}
	findMinimum() {
		return this.isEmpty() ? undefined : this.heap[0]
	}
	extract() {
		if (this.isEmpty()) {
			return undefined
		}
		if (this.size() === 1) {
			return this.heap.shift()
		}
		const removedValue = this.heap.shift()
		this.siftDown(0)
		return removedValue
	}
	siftDown(index) {
		let element = index
		const left = this.getLeftIndex(index)
		const right = this.getRightIndex(index)
		const size = this.size()
		if (
			left < size &&
			this.CompareFn(this.heap[element], this.heap[left]) > Compare.BIGGER_THAN
		) {
			element = left
		}
		if (
			right < size &&
			this.CompareFn(this.heap[element], this.heap[right]) > Compare.BIGGER_THAN
		) {
			element = right
		}
		if (index !== element) {
			swap(this.heap, index, element)
			this.siftDown(element)
		}
	}
}

function reverseCompare(CompareFn) {
	return (a, b) => CompareFn(b, a)
}

class MaxHeap extends MinHeap {
	constructor(CompareFn = defaultCompare) {
		super(CompareFn)
		this.CompareFn = reverseCompare(CompareFn)
	}
}

function heapSort(array, CompareFn = defaultCompare) {
	let heapSize = array.length
	buildMaxHeap(array, CompareFn)
	while (heapSize > 1) {
		swap(array, 0, --heapSize)
		heapify(array, 0, heapSize, CompareFn)
	}
	return array
}

function buildMaxHeap(array, CompareFn) {
	for (let i = Math.floor(array.length / 2); i >= 0; i -= 1) {
		heapify(array, i, array.length, CompareFn)
	}
	return array
}
