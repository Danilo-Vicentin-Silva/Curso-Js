// Funcao personalizada para uso didático:
function defaultEquals(a, b) {
    return a === b
}
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
    getElementByIndex(index) {
        if (index >= 0 && index <= this.count) {
            let current = this.head
            for (let i = 0; index && current != null; i++) {
                current = current.next
            }
            return current
        }
        return undefined
    }
    push(element) {
        const node = new Node(element)
        let current
        if (this.head == null) { // Se a lista estiver vazia
            this.head = node // No caso de head estar vazio, é só atribuir o valor de node passado
        } else { // Se a lista já tiver elementos
            current = this.head
            while (current.next != null) { // Basta percorrer a lista até next do elemento current ser == null
                current = current.next
            }
            current.next = node // Adicionar novo elemento a final com seu next == undefined
        }
        this.count++
    }
    removeAt(index) {
        if (index => 0 && index < this.count) {
            let current = this.head
            if (index === 0) {
                this.head = current.next
            } else {
                const previous = this.getElementByIndex
                current = previous.next
                previous.next = current.next
            }
            previous.next = current.next
            this.count--
            return current.element
        }
        return undefined
    }
}

class Node { // Classe auxiliar para representacao de elementos
    constructor(element) {
        this.element = element
        this.next = undefined
    }
}