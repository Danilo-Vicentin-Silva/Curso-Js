// Estrutura para fins ditáticos
class LinkedList {
	constructor(equalsFn, defaultEquals) {
		this.count = 0
		this.head = null
		this.equalsFn = equalsFn
	}
	defaultEquals(a, b) {
		// Verifica se dois elementos são idênticos
		return a === b
	}
	getElementByIndex(index) {
		if (index >= 0 && index <= this.count) {
			let current = this.head
			for (let i = 0; i < index && current != null; i++) {
				current = current.next
			}
			return current
		}
		return undefined
	}
	push(element) {
		// Insere element ao final da lista
		const node = new Node(element)
		let current
		if (this.head == null) {
			// Se a lista estiver vazia
			this.head = node // No caso de head estar vazio, é só atribuir o valor de node passado
		} else {
			// Se a lista já tiver elementos
			current = this.head
			while (current.next != null) {
				// Basta percorrer a lista até next do elemento current ser == null
				current = current.next
			}
			current.next = node // Adicionar novo elemento a final com seu next == undefined
		}
		this.count++
	}
	remove(element) {
		const index = this.indexOfElement(element)
		return this.removeAt(index)
	}
	insertInIndex(element, index) {
		if (index >= 0 && index <= this.count) {
			const node = new Node(element)
			if (index === 0) {
				// Insere na 1º posição
				const current = this.head
				node.next = current
				this.head = node
			} else {
				const previous = this.getElementByIndex(index - 1)
				const current = previous.next
				node.next = current
				previous.next = node
			}
			this.count++
			return true // Indica que ligação foi válida
		}
		return false // Indica que ligação não é válida, não vai adicionar o valor
	}
	removeAt(index) {
		if (index >= 0 && index < this.count) {
			let current = this.head
			if (index === 0) {
				this.head = current.next
			} else {
				const previous = this.getElementByIndex(index - 1)
				current = previous.next
				previous.next = current.next
			}
			this.count++
			return current.element
		}
		return undefined
	}
	indexOfElement(element) {
		let current = this.head
		for (let i = 0; i < this.count && current != null; i++) {
			if (this.defaultEquals(element, current.element)) {
				return i
			}
			current = current.next
		}
		return -1
	}
	size() {
		return this.count
	}
	isEmpty() {
		return this.size() === 0
	}
	getHead() {
		return this.head
	}
	toString() {
		if (this.isEmpty()) {
			return ""
		}
		let objString = `${this.head.element}`
		let current = this.head.next
		for (let i = 1; i < this.size() && current != null; i++) {
			objString = `${objString},${current.element}`
			current = current.next
		}
		return objString
	}
}

class Node {
	// Classe auxiliar para representacao de elementos
	constructor(element) {
		this.element = element
		this.next = undefined
	}
}
//------------------------------------------------------------

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

class HashTable {
	constructor(toStrFn = defaultToString) {
		this.toStrFn = toStrFn
		this.table = {}
	}
	LoseLoseHashCode(key) {
		if (typeof key === "number") {
			return key
		}
		const tableKey = this.toStrFn(key)
		let hash = 0
		for (let i = 0; i < tableKey.length; i++) {
			hash += tableKey.charCodeAt(i)
		}
		return hash % 37
	}
	hashCode(key) {
		return this.LoseLoseHashCode(key)
	}
	put(key, value) {
		if ((key != null, value != null)) {
			const position = this.hashCode(key)
			this.table[position] = new ValuePair(key, value)
			return true
		}
		return false
	}
	get(key) {
		const valuePair = this.table[this.hashCode(key)]
		return valuePair == null ? undefined : valuePair.value
	}
	remove(key) {
		const hash = this.hashCode(key)
		const valuePair = this.table[hash]
		if (valuePair != null) {
			delete this.table[hash]
			return true
		}
		return false
	}
}

// Resolução para o problema de mesmos elementos armazenados pelo mesmo nº hash:
// 1º Solução (melhor)
class HashTableSepareteChaining {
	constructor(toStrFn = defaultToString) {
		this.toStrFn = toStrFn
		this.table = {}
	}
	LoseLoseHashCode(key) {
		if (typeof key === "number") {
			return key
		}
		const tableKey = this.toStrFn(key)
		let hash = 0
		for (let i = 0; i < tableKey.length; i++) {
			hash += tableKey.charCodeAt(i)
		}
		return hash % 37
	}
	hashCode(key) {
		return this.LoseLoseHashCode(key)
	}
	put(key, value) {
		if (key != null && value != null) {
			const position = this.hashCode(key)
			if (this.table[position] == null) {
				this.table[position] = new LinkedList()
			}
			this.table[position].push(new ValuePair(key, value))
			return true
		}
		return false
	}
	get(key) {
		const position = this.hashCode(key)
		const linkedList = this.table[position]
		if (linkedList != null && !linkedList.isEmpty()) {
			let current = linkedList.getHead()
			while (current != null) {
				if (current.element.key === key) {
					return current.element.value
				}
				current = current.next
			}
		}
		return undefined
	}
	remove(key) {
		const position = this.hashCode(key)
		const linkedList = this.table[position]
		if (linkedList != null && !linkedList.isEmpty()) {
			let current = linkedList.getHead()
			while (current != null) {
				if (current.element.key === key) {
					linkedList.remove(current.element)
					if (linkedList.isEmpty()) {
						delete this.table[position]
					}
					return true
				}
				current = current.next
			}
		}
		return false
	}
}
//2º solução(mediana)
class HashTableLinearPosition {
	constructor(toStrFn = defaultToString) {
		this.toStrFn = toStrFn
		this.table = {}
	}
	LoseLoseHashCode(key) {
		if (typeof key === "number") {
			return key
		}
		const tableKey = this.toStrFn(key)
		let hash = 0
		for (let i = 0; i < tableKey.length; i++) {
			hash += tableKey.charCodeAt(i)
		}
		return hash % 37
	}
	hashCode(key) {
		return this.LoseLoseHashCode(key)
	}
	put(key, value) {
		if (key != null && value != null) {
			const position = this.hashCode(key) 
			if (this.table[position] == null) {
				this.table[position] = new ValuePair(key, value)
			} else {
				let index = position + 1
				while (this.table[index] != null) {
					index++
				}
				this.table[index] = new ValuePair(key, value) 
			}
			return true
		}
		return false
	}
	get(key) {
		const position = this.hashCode(key)
		if (this.table[position] != null) {
			if (this.table[position].key === key) {
				return this.table[position].value
			}
			let index = position + 1
			while (this.table[index] != null && this.table[index].key !== key) {
				index++
			}
			if (this.table[index] != null && this.table[index].key === key) {
				return this.table[position].value
			}
		}
		return undefined
	}
	remove(key) {
		const position = this.hashCode(key)
		if (this.table[position] != null) {
			if (this.table[position].key === key) {
				delete this.table[position]
				this.verifyRemoveSideEffect(key, position)
				return true
			}
			let index = position + 1
			while (this.table[index] != null && this.table[index].key !== key) {
				index++
			}
			if (this.table[index] != null && this.table[index].key === key) {
				delete this.table[index]
				this.verifyRemoveSideEffect(key, index)
				return true
			}
		}
		return false
	}
	verifyRemoveSideEffect(key, removedPosition) {
		const hash = this.hashCode(key)
		let index = removedPosition + 1
		while (this.table[index] != null) {
			const posHash = this.hashCode(this.table[index].key)
			if (posHash <= hash || posHash <= removedPosition) {
				this.table[removedPosition] = this.table[index]
				delete this.table[index]
				removedPosition = index
			}
			index++
		}
	}
}

//Estrutura de Hash melhor
//Para ocupar o lugar  de Lose-Lose Hash code
/*djb2HashCode(key) { //<= mais recomendado pela comunidade
	const tableKey = this.toStrFn(key) 
	let hash = 5381
	for (let i = 0; i < tableKey.length; i++) {
		hash = (hash * 33) + tableKey.charCodeAt(i)
	}
	return hash % 1013
}
*/

//CLass Map nativa
const mapNativo = new Map()
mapNativo.set('Programador', 'Danilo')
mapNativo.set('Administradora', 'Simone')

//Class Weak Map Nativa (fraca tipagem de valores)
const weakMap = new WeakMap()
const obj1 = { name: 'Danilo' }
weakMap.set(obj1, 'Programador')