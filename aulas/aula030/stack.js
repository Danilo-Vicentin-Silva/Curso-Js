/*

class Stack {
    constructor() {
        this._count = 0
        this._items = {}
    }
    push(element) {
        this.items[this.count] = element
        this.count++
    }
    size() {
        return this.count
    }
    isEmpty() {
        return this.count === 0
    }
    pop() {
        if (this.isEmpty()) {
            return undefined
        }
        this.count--
        const result = this.items[this.count]
        delete this.items[this.count]
        return result
    }
    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.items - 1]
    }
    clear() {
        this.items = {}
        this.count = 0
    } // Ou while(!this.isEmpty()) {this.pop} // Para remover um por um, assim respeitando o LIFO
    toString() {
        if (this.isEmpty()) {
            return ''
        }
        let objString = `${this.items[0]}`
        for (let i = 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`
        }
        return objString
    }
}

*/

const items = new WeakMap()
class Stack {
    constructor() {
        items.set(this, [])
    }
    push(element) {
        const s = items.get(this)
        s.push(element)
    }
    pop() {
        const s = items.get(this)
        const r = s.pop()
        return r
    }
}

