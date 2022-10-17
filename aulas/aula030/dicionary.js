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
}