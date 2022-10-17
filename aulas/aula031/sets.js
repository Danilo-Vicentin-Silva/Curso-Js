class Set {
    constructor() {
        this.items = {}
    }
    add(element) {
        if (!this.has(element)) {
            this.items[element] = element
            return true
        }
        return false
    }
    delete(element) {
        if (this.has(element)) {
            delete this.items[element]
            return true
        }
        return false
    }
    clear() {
        this.items = {}
    }
    has(element) {
        return Object.prototype.hasOwnProperty.call(this.items, element)
    }
    size() {
        return Object.keys(this.items).length // Não funciova em navegadores antigos
    }
    values() {
        return Object.values(this.items) // Só funciona em navegadores modernos
    }
    unium(otherSet) {
        const uniumSet = new Set()
        this.values().forEach(value => uniumSet.add(value))
        otherSet.values().forEach(value => uniumSet.add(value))
        return uniumSet
    }
    intersection(otherSet) {
        const intersectionSet = new Set()
        const values = this.values()
        const otherValues = otherSet.values()
        let biggerSet = values
        let smallerSet = otherValues
        if (otherValues.length - values.length > 0) {
            biggerSet = otherValues
            smallerSet = values
        }
        smallerSet.forEach(value => {
            if (biggerSet.includes(value)) {
                intersectionSet.add(value)
            }
        })
        return intersectionSet
    }
    diffirence(otherSet) {
        const diffirenceSet = new Set()
        this.values().forEach(value => {
            if (!otherSet.has(value)) {
                diffirenceSet.add(value)
            }
        })
        return diffirenceSet
    }
    isSubSet(otherSet) {
        if (this.size() > otherSet.size()) {
            return false
        }
        let isSubSet = true 
        this.values().every(value => {
            if (!otherSet.has(value)) {
                isSubSet = false
                return false
            }
            return true
        })
        return isSubSet
    }
}

const set1 = new Set()
set1.add(1)
set1.add(2)
set1.add(3)
set1.add(4)

const set2 = new Set()
set2.add(1)
set2.add(4)
set2.add(7)
set2.add(8)
set2.add(3)
set2.add(2)

const set3 = set1.isSubSet(set2)

console.table(set3)+