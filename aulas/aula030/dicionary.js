function defaultToString(item) {
    if (item === null) {
        return 'null'
    } else if (item === undefined) {
        return 'undefined'
    } else if (typeof item === 'string' || item instanceof String) {
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
        return this.keyValues().map(ValuePair => ValuePair.key)
    }
    keyValues() {
        return Object.values(this.table)
    }
    values() {
        return this.keyValues().map(ValuePair => ValuePair.value)
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
            return ''
        }
        const valuePairs = this.keyValues()
        let objString = `${valuePairs[0].toString()}`
        for (let i = 1; i < valuePairs.length; i++) {
            objString = `${objString}, ${valuePairs[i].toString()}`
        }
        return objString
    }
}