// Pilhas (Stack's)
// Esta sendo do tipo LIFO (Last In, First Out)
// Baseando uma Stack em Array

class Stack {
    constructor() {
        this.items = []
    }
    push(element) {
        return this.items.push(element)
    }
    pop() {
        return this.items.pop()
    }
    peek() {
        return this.items[this.items.length - 1]
    }
    isEmpyt() {
        return this.items.length === 0
    }
    size() {
        return this.items.length
    }
    clear() {
        this.items = []
    }
}

const stack = new Stack()
//console.log(stack.isEmpyt()) // Exibe true

stack.push(5)
stack.push(8)
//console.log(stack.peek()) // Exibe 8, por ser o último que foi colocado
stack.push(11)
// console.log(stack.size()) // Exibe 3, tamanho da Stack até aqui
// console.log(stack.isEmpyt()) // Devolve false, pela pilha não estar vazia
stack.push(15)

stack.pop()
stack.pop()
//console.log(stack.size()) // Exibe 2 porque removemos dois elementos da pilha