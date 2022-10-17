//Conjuntos a serem usado
const setA = new Set()
setA.add(1)
setA.add(2)
setA.add(3)

const setB = new Set()
setB.add(2)
setB.add(3)
setB.add(4)
//-----------------
const uniun = (set1, set2) => {
    const uniunSets = new Set()
    set1.forEach(value => uniunSets.add(value))
    set2.forEach(value => uniunSets.add(value))
    return uniunSets
}

const intersection = (set1, set2) => {
    const intersectionSet = new Set()
    set1.forEach(value => {
        if (set2.has(value)) {
            intersectionSet.add(value)
        }
    })
    return intersectionSet
}
const difference = (set1, set2) => {
    const differenceSet = new Set()
    set1.forEach(value => {
        if (!set2.has(value)) { 
            differenceSet.add(value)
        }
    })
    return differenceSet
}

//ou

console.log(new Set([...setA, ...setB])) //uniun
console.log(new Set([...setA].filter(x => setB.has(x)))) //intersection
console.log(new Set([...setA].filter(x => !setB.has(x)))) //difference