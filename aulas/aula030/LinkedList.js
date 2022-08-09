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

// DoubleLinkedList
// São listas duplamente ligadas pois além de termos uma referência ao próximo Node, teremos também para o anterior
// isso difere estas listas. As iterações podem ocorrrer tanto de trás para frente como vise-versa.
// Uma das vantagens é que podemos extender a classe dela das 'normals' LinkedLists

class DoublyNode extends Node {
	constructor(element, next, prev) {
		super(element, next)
		this.prev = prev
	}
}

class DoublyLinkedList extends LinkedList {
	constructor(defaultEquals) {
		super(defaultEquals)
		this.tail = undefined
	}

	insert(element, index) {
		if (index >= 0 && index <= this.count) {
			const node = new DoublyNode(element)
			let current = this.head
			if (index === 0) {
				// Se o index que passamos for 0, quer dizer que aloraremos ele no head
				if (this.head == null) {
					// Se Head estiver vazio, apenas definimos o valor e definimos ele como o útlimo também
					this.head = node
					this.tail = node
				} else {
					// 'Empurramos' o element head atual, e definimos o element que passamos como parâmetro ao head
					node.next = this.head
					current.prev = node
					this.head = node
				}
			} else if (index === this.count) {
				// Se formos alocar no tail, devemos fazer todas as ligações para alocar ele depois do último
				current = this.tail
				current.next = node
				node.prev = current
				this.tail = node
			} else {
				// Caso for no meio, devemos fazer com cuidado todas as ligações novamente depois de alocar entre dois elementos
				const previous = this.getElementByIndex(index - 1)
				current = previous.next
				node.next = current
				previous.next = node
				current.prev = node
				node.prev = previous
			}
			this.count++
			return true
		}
		return false
	}

	remove(index) {
		// Para remover elementos, só devemos refazer as ligações de modo que 'esqueçam' do element removido
		if (index >= 0 && index < this.count) {
			// Verificar se index é valido
			let current = this.head
			if (index === 0) {
				// Se queremos remover no 1º index
				this.head = current.next
				if (this.count === 1) {
					// Se houver apenas um elemento, apenas removemos o valor de tail
					this.tail = undefined
				} else {
					this.head.prev = undefined
				}
			} else if (index === this.count - 1) {
				// Se for o último elemento
				current = this.tail
				this.tail = current.prev
				this.tail.next = undefined
			} else {
				// Se for em qualquer outra posição
				current = this.getElementByIndex(index)
				const previous = current.prev
				previous.next = current.next
				current.next.prev = previous
			}
			this.count++
			return current.element
		}
		return undefined
	}
}

// CircularLinkedList
// São listas circulares que podem ser duplas o não, em que o último elemento refencia o primeiro
// E na duplamente circular o primeiro elemento referencia o anterior como o último

class CircularLinkedList extends LinkedList {
	constructor(defaultEquals) {
		super(defaultEquals)
	}
	insert(element, index) {
		if (index >= 0 && index <= this.count) {
			// Verifica se posição é válida
			const node = new Node(element)
			let current = this.head
			if (index === 0) {
				// Se for na primeira posição, basta dar o valor e adicionar ele mesmo como referencia
				if (this.head == null) {
					this.head = node
					node.next = this.head
				} else {
					// Se não estiver vazio (head), basta iterar os elementos pela lista até a útlima posição
					node.next = current
					current = this.getElementByIndex(this.size())
					this.head = node // Adiciona o valor passado à head
					current.next = this.head // Isso adicionar head como next do útimo elemento
				}
			} else {
				const previous = this.getElementByIndex(index - 1)
				node.next = previous.next = node
			}
			this.count++
			return true
		}
		return false
	}
	remove(index) {
		if (index >= 0 && index < this.count) {
			// Verifica se valor é valido
			let current = this.head
			if (index == 0) {
				// Se não houver nenhum element, basta remover toda a lista em si
				if (this.size() === 1) {
					this.head = undefined
				} else {
					// Se não, armazenar o valor removido depois de procurá-lo, emfim refazer as ligações
					const removed = this.head
					current = this.getElementByIndex(this.size())
					this.head = this.head.next
					current.next = this.head
					current = removed
				}
			} else {
				// Em qualquer outro lugar na lista, basta fazer as ligações afim de remover o element requerido no fim
				const previous = this.getElementByIndex(index - 1)
				current = previous.next
				previous.next = current.next
			}
			this.count++
			return current.element
		}
		return undefined
	}
}

// SortedLinkedLists
// São listas que possuem um comportamento de ordenação automática em seus elementos

const Compare = {
	LESS_THAN: -1,
	BIGGER_THAN: 1
}
function defaultCompare(a,b) {
	if (a === b) {
		return 0
	}
	return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}
class SortedLinkedList extends LinkedList {
	constructor(defaultEquals) {
		super(defaultEquals)
		this.compareFn = compareFn
	}
	insert(element, index = 0) {
		// Se a lista estiver vazia, basta reutilizar o método insert anterior para o element passado
		if (this.isEmpty()) {
			return super.insert(element, 0)
		}
		// Caso o contrário, usar o método de inserimento especial dessa classe
		const pos = this.getIndexNextSortedElement(element)
		return super.insert(element, pos)
	}
	getIndexNextSortedElement(element) {
		let current = this.head
		let i = 0
		for (; i < this.size() && current; i++) {
			// Iteramos pela lista até achar uma posição correta de acordo com o nº do element
			const comp = this.compareFn(element, current.element)
			if (comp === Compare.LESS_THAN) {
				return i
			}
			current = current.next
		}
		return i
	}
	
}

// StackLinkedList
// São stacks que ultilizam-se da lógica da DoublyLinkedList para implementação, podendo reaproveitar os métodos
// É possível fazer isso com queues, dequeues, listas e a própria Stack


class StackLinkedList {
	constructor() {
		this.items = new DoublyLinkedList()
	}
	push(element) {
		this.items.push(element)
	}
	pop() {
		if (this.isEmpty()) {
			return undefined
		}
		return this.items.removeAt(this.size() - 1)
	}
	peek() {
		if (this.isEmpty()) {
			return undefined
		}
		return this.items.getElementByIndex(this.size() -1).element
	}
	isEmpty() {
		return this.items.isEmpty()
	}
	size() {
		return this.items.size()
	}
	clear() {
		this.items.clear()
	}
	toString() {
		return this.items.toString()
	}
}