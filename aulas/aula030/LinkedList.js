// LinkedLists são 'variações' das arrays convencionais, onde podemos adicionar elementos sem precisar
// deslocá-los. Porém será necessário iterar por toda a lista afim de achar certos elementos
// Essas listas são formadas por elemento-ponteiro

// Declarando a class LinkedList e seus métodos

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
	size () {
		return this.count
	}
	isEmpty () {
		return this.size() === 0
	}
	getHead () {
		return this.head
	}
	toString () {
		if (this.isEmpty()) {
			return ''
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
