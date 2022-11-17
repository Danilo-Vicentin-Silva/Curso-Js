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
//Para a ECMANScript antiga:
/*function swap(array, a, b) {
    const temp = array[a]
    array[a] = array[b]
    array[b] = temp
}
*/
//Para a nova ECMANScript (desde 2015):
const swap = (array, a, b) => [array[a], array[b]] = [array[b], array[a]]

//Heap Binário
//Estrutura de dados feita para se extrair valores minímos e máximos o mais rapido possível

class MinHeap {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn
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
            index > 0 
            &&
            this.compareFn(this.heap[parent], this.heap[index]) > Compare.BIGGER_THAN
        ) {
            swap(this.heap, parent, index)
            index = parent
            parent = this.getParentIndex(index)
        }
    }
}