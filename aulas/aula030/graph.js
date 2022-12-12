function defaultToString(item) {
	if (item === null) {
		return "null"
	} else if (item === undefined) {
		return "undefined"
	} else if (typeof item === "string" || item instanceof String) {
		return `${item}`
	}
	return item.toString()
}

class ValuePair {
	constructor(key, value) {
		this.key = key
		this.value = value
	}
	toString() {
		return `[#${this.key} : ${this.value}]`
	}
}

class Dicionary {
	constructor(toStrFn = defaultToString) {
		this.toStrFn = toStrFn
		this.table = {}
	}
	set(key, value) {
		if (key != null && value != null) {
			const tableKey = this.toStrFn(key)
			this.table[tableKey] = new ValuePair(key, value)
			return true
		}
		return false
	}
	remove(key) {
		if (this.hasKey(key)) {
			delete this.table[this.toStrFn(key)]
			return true
		}
		return false
	}
	get(key) {
		const ValuePair = this.table[this.toStrFn(key)]
		return ValuePair == null ? undefined : ValuePair.value
	}
	hasKey(key) {
		return this.table[this.toStrFn(key)] != null
	}
	key() {
		return this.keyValues().map((ValuePair) => ValuePair.key)
	}
	keyValues() {
		return Object.values(this.table)
	}
	values() {
		return this.keyValues().map((ValuePair) => ValuePair.value)
	}
	forEach(callbackFn) {
		const ValuePairs = this.keyValues()
		for (let i = 0; i < ValuePairs.length; i++) {
			const result = callbackFn(ValuePairs[i].key, ValuePairs[i].value)
			if (result === false) {
				break
			}
		}
	}
	size() {
		return Object.keys(this.table).length
	}
	isEmpty() {
		return this.size() === 0
	}
	clear() {
		this.table = {}
	}
	toString() {
		if (this.isEmpty()) {
			return ""
		}
		const valuePairs = this.keyValues()
		let objString = `${valuePairs[0].toString()}`
		for (let i = 1; i < valuePairs.length; i++) {
			objString = `${objString}, ${valuePairs[i].toString()}`
		}
		return objString
	}
}
class Queue {
    constructor() {
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }
    enqueue(element) {
        this.items[this.count] = element
        this.count++
    }
    dequeue() {
        if (this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }
    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.lowestCount]
    }
    isEmpty() {
        return this.size() === 0
    }
    size() {
        return this.count - this.lowestCount
    }
    clear() {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }
    toString() {
        if (this.isEmpty()) {
            return ''
        }
        let objString = `${this.items[this.lowestCount]}`
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`
        }
        return objString
    }
}
//

class Graph {
	constructor(isDirected = false) {
		this.isDirected = isDirected
		this.vertices = []
		this.adjList = new Dicionary()
	}
	addVertex(v) {
		if (!this.vertices.includes(v)) {
			this.vertices.push()
			this.adjList.set(v, [])
		}
	}
	addEdge(v, w) {
		if (!this.adjList.get(v)) {
			this.addVertex(v)
		}
		if (!this.adjList.get(w)) {
			this.addVertex(w)
		}
		this.adjList.get(v).push(w)
		if (!this.isDirected) {
			this.adjList.get(w).push(v)
		}
	}
	getVertices() {
		return this.vertices
	}
	getAdjlist() {
		return this.adjList
	}
	toString() {
		let s = ""
		for (let i = 0; i < this.vertices.length; i++) {
			s = +`${this.vertices[i]} ->`
			const neighbors = this.adjList.get(this.vertices[i])
			for (let j = 0; j < this.neighbors.length; j++) {
				s = +`${neighbors[j]} ->`
			}
			s = +"\n"
		}
		return s
	}
}

// Algoritmos de busca
const Colors = {
	WHITE: 0,
	GREY: 1,
	BLACK: 2,
}

const initializeColor = vertices => {
    const color = {}
    for (let i = 0; i < vertices.length; i++) {
        color[vertices[i]] = Colors.WHITE
    }
    return color
}

const breadthFirstSearch = (graph, startVertex, callback) => {
    const vertices = graph.getVertices()
    const adjList = graph.getAdjlist()
    const color = initializeColor(vertices)
	const queue = new Queue()
	queue.enqueue(startVertex)
	while (!queue.isEmpty()) {
		const u = queue.dequeue()
		const neighbors = adjList.get(u)
		color[u] = Colors.GREY
		for (let i = 0; i < neighbors.length; i++) {
			const w = neighbors[i]
			if (color[w] === Colors.WHITE) {
				color[w] = Colors.GREY
				queue.enqueue(w)
			}
		}
		color[u] = Colors.BLACK
		if (callback) {
			callback(u)
		}
	}
}

const graph = new Graph()
const myVertices = ['A', 'B', 'C', 'D', 'E']
for (let i = 0; i < myVertices.length; i++) {	
	graph.addVertex(myVertices[i])	
}
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')

const printVertex = (value) => console.log('Visited vertex: ' + value)
breadthFirstSearch(graph, myVertices[0], printVertex)
 