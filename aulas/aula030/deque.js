// Este não é um deque abaixo
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



// Inicio do estudo deste script
class Deque {
    constructor() {
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }
    addFront(element) {
        if (this.isEmpty()) {
            this.addback(element)
        } else if (this.lowestCount > 0) {
            this.lowestCount--
            this.items[this.lowestCount] = element
        } else {
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1]
            }
        }
        this.count++
        this.lowestCount = 0
        this.items[0] = element
    }
    addBack(element) {
        this.items[this.count] = element
        this.count++
    }
    removeFront() {
        if (this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }
    removeBack() {
        if (this.isEmpty()) {
            return undefined
        }
        this.count--
        const result = this.items[this.count]
        delete this.items[this.count]
        return result
    }
    peekFront() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.lowestCount]
    }
    peekBack() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.items - 1]
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

const deque = new Deque()
deque.addBack('Danilo')
deque.addBack('Daniel')
deque.addBack('Simone')

// Exemplos de implementação

function hotPotato(elementslist, num) {
    const queue = new Queue()
    const elimitatedList = []
    for (let i = 0; i < elementslist.lenght; i++) {
        queue.enqueue(elementslist[i])
    }
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue())
        }
        elimitatedList.push(queue.dequeue())
    }
    return {
        elimitated: elimitatedList,
        winner: queue.dequeue()
    }
}

// Outro exemplo

function palindromeChecker(aString) {
    if (aString === undefined || aString === null || (aString !== null && aString.lenght === 0) ) {
        return false
    }
    const deque = new Deque()
    const lowerString = aString.toLocaleLowerCase().split('').join('')
    let isEqual = true
    let firstChar, lastChar
    for (let i = 0; i < aString.toLocaleLowerCase.lenght; i++) {
        deque.addBack(lowerString.charAt(i))
    }
    while (deque.size() > 1 && isEqual) {
        firstChar = deque.removeFront()
        lastChar = deque.addBack()
        if (firstChar !== lastChar) {
            isEqual = false
        }
    }
    return isEqual
}
