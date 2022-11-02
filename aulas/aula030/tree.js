class Node {
	constructor(key) {
		this.key = key
		this.left = null
		this.right = null
	}
}
const Compare = {
	LESS_THAN: -1,
	BIGGER_THAN: 1,
}
function defaultCompare(a, b) {
	if (a === b) {
		return 0
	}
	return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

class BinarySearchTree {
	constructor(compareFn = defaultCompare) {
		this.compareFn = compareFn
		this.root = null
	}
	insert(key) {
		if (this.root == null) {
			this.root = new Node(key)
		} else {
			this.insertNode(this.root, key)
		}
	}
	insertNode(node, key) {
		if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
			if (node.left == null) {
				node.left = new Node(key)
			} else {
				this.insertNode(node.left, key)
			}
		} else {
			if (node.right == null) {
				node.right = new Node(key)
			} else {
				this.insertNode(node.right, key)
			}
		}
	}
	inOrderTraverse(callback) {
		this.inOrderTraverseNode(this.root, callback)
	}
	inOrderTraverseNode(node, callback) {
		if (node != null) {
			this.inOrderTraverseNode(node.left, callback)
			callback(node.key)
			this.inOrderTraverseNode(node.right, callback)
		}
	}
	preOrderTraverse(callback) {
		this.preOrderTraverseNode(this.root, callback)
	}
	preOrderTraverseNode(node, callback) {
		if (node != null) {
			callback(node.key)
			this.preOrderTraverseNode(node.left, callback)
			this.preOrderTraverseNode(node.right, callback)
		}
	}
	postOrderTraverse(callback) {
		this.postOrderTraverseNode(this.root, callback)
	}
	postOrderTraverseNode(node, callback) {
		if (node != null) {
			this.postOrderTraverseNode(node.left, callback)
			this.postOrderTraverseNode(node.right, callback)
			callback(node.key)
		}
	}
	min() {
		return this.minNode(this.root)
	}
	minNode(node) {
		let current = node
		while (current != null && current.left != null) {
			current = current.left
		}
		return current
	}
	max() {
		return this.maxNode(this.root)
	}
	maxNode(node) {
		let current = node
		while (current != null && current.right != null) {
			current = current.right
		}
		return current
	}
	search(key) {
		return this.searchNode(this.root, key)
	}
	searchNode(node, key) {
		if (node == null) {
			return false
		}
		if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
			return this.searchNode(node.left, key)
		} else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
			return this.searchNode(node.right, key)
		} else {
			return true
		}
	}
	remove(key) {
		this.root = this.removeNode(this.root, key)
	}
	removeNode(node, key) {
		if (node == null) {
			return null
		}
		if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
			node.left = this.removeNode(node.left, key)
			return node
		} else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
			node.right = this.removeNode(node, node.right)
			return node
		} else {
			if (node.left == null && node.right == null) {
				node = null
				return node
			}
			if (node.left == null) {
				node = node.right
				return node
			} else if (node.right == null) {
				node = node.left
				return node
			}
			const aux = this.minNode(node.right)
			node.key = aux.key
			node.right = this.removeNode(node.right, aux.key)
			return node
		}
	}
}

const tree = new BinarySearchTree()
tree.insert(11)
tree.insert(102)
tree.insert(200)
tree.insert(100)
tree.insert(43)
tree.insert(132)
tree.insert(32)
tree.insert(5)
tree.insert(8)
tree.insert(9)
tree.insert(10)

console.log(tree.search(100) ? "Key 100 found." : "Key 100 not found")
console.log(tree.search(7) ? "Key 7 found." : "Key 7 not found")