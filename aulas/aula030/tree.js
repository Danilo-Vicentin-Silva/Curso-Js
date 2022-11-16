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

//Outra árvore, esta, mais balanceada
const BalanceFactor = {
	UNBALANCED_RIGHT: 1,
	SLIGHTLY_UNBALANCED_RIGHT: 2,
	BALANCED: 3,
	SLIGHTLY_UNBALANCED_LEFT: 4,
	UNBALANCED_LEFT: 5,
}

class AVLTree extends BinarySearchTree {
	constructor(compareFn = defaultCompare) {
		super(compareFn)
		this.compareFn = compareFn
		this.root = null
	}
	getNodeHeight(node) {
		if (node === null) {
			return -1
		}
		return (
			Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) +
			1
		)
	}
	getBalanceFactor(node) {
		const heightDifference =
			this.getNodeHeight(node.left) - this.getNodeHeight(node.right)
		switch (heightDifference) {
			case -2:
				return BalanceFactor.UNBALANCED_RIGHT
			case -1:
				return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
			case 1:
				return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
			case 2:
				return BalanceFactor.UNBALANCED_LEFT
			default:
				return BalanceFactor.BALANCED
		}
	}
	rotationLL(node) {
		const tmp = node.left
		node.left = tmp.right
		tmp.right = node
		return tmp
	}
	rotationRR(node) {
		const tmp = node.right
		node.right = tmp.left
		tmp.left = node
		return tmp
	}
	rotationLR(node) {
		node.left = this.rotationRR(node.left)
		return this.rotationLL(node)
	}
	rotationRL(node) {
		node.right = this.rotationLL(node.right)
		return this.rotationRR(node)
	}
	insert(key) {
		this.root = this.insertNode(this.root, key)
	}
	insertNode(node, key) {
		if (node == null) {
			return new Node(key)
		} else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
			node.left = this.insertNode(node.left, key)
		} else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
			node.right = this.insertNode(node.right, key)
		} else {
			return node
		}
		const BalanceFactor = this.getBalanceFactor(node)
		if (BalanceFactor === BalanceFactor.UNBALANCED_LEFT) {
			if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
				node = this.rotationLL(node)
			} else {
				return this.rotationLR(node)
			}
		}
		if (BalanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
			if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
				node = this.rotationRR(node)
			} else {
				return this.rotationRL(node)
			}
		}
		return node
	}
	removeNode(node, key) {
		node = super.removeNode(node, key)
		if (node == null) {
			return node
		}
		const BalanceFactor = this.getBalanceFactor(node)
		if (BalanceFactor === BalanceFactor.UNBALANCED_LEFT) {
			const BalanceFactorLeft = this.getBalanceFactor(node.left)
			if (
				BalanceFactorLeft === BalanceFactor.BALANCED ||
				BalanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
			) {
				return this.rotationLL(node)
			}
			if (BalanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
				return this.rotationLR(node.left)
			}
		}
		if (BalanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
			const BalanceFactorRight = this.getBalanceFactor(node.right)
			if (
				BalanceFactorRight === BalanceFactor.BALANCED ||
				BalanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
			) {
				return this.rotationRR(node)
			}
			if (BalanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
				return this.rotationRL(node.right)
			}
		}
		return node
	}
}
/* Árvore Rubro-Negra (implementação avançado/Typescript)
class RedBlackTree extends BinarySearchTree {
	constructor(compareFn) {
		super(compareFn)
		this.compareFn = compareFn
		this.root = null
	}
	insert(key: T) {
		if (this.root == null) {
			this.root = new RedBlackTree(key)
			this.root.color = Colors.BLACK
		} else {
			const newNode = this.insertNode(this.root, key)
			this.fixTreeProperties(newNode)
		}
	}
	insertNode(node, key) {
		if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
			if (node.left == null) {
				node.left = new RedBlackNode(key)
				node.left.parent = node
				return node.left
			} else {
				return this.insertNode(node.left, key)
			}
		} else if (node.right == null) {
			node.right = new RedBlackNode(key)
			node.right.parent = node
			return node.right
		}
		else {
			return this.insertNode(node.right, key)
		}
	}
	fixTreeProperties(node) {
		while (node && node.parent && node.parent.color.isRed() && node.color !== Color.BLACK) {
			let parent = node.parent
			const grandParent = parent.parent
			if (grandParent && grandParent.left === parent) {
				const uncle = grandParent.right
				if (uncle && uncle.color === Color.RED) {
					grandParent.color = Colors.RED
					parent.color = Colors.BLACK
					uncle.color = Color.BLACK
					node = grandParent
				}
				else {
					if (node === parent.right) {
						this.rotationRR(parent)
						node = parent
						parent = node.parent
					}
					this.rotationLL(grandParent)
					parent.color = Colors.BLACK
					grandParent.color = Colors.RED
					node = parent
				}
			}
			else {
				const uncle = grandParent.left
				if (uncle && uncle.color === Colors.RED) {
					grandParent.color = Colors.RED
					parent.color = Color.BLACK
					uncle.color = Colors.BLACK
					node = grandParent
				}
				else {
					if (node === parent.left) {
						this.rotationLL(parent)
						node = parent
						parent = node.parent
					}
					this.rotationRR(grandParent)
					parent.color = Colors.BLACK
					grandParent.color = Colors.RED
					node = parent
				}
			}
		}
		this.root.color = Colors.BLACK
	}
}

class RedBlackNode extends Node {
	constructor(key) {
		super(key)
		this.key = key
		this.color = Colors.RED
		this.parent = null
	}
	isRed() {
		return this.color === Color.RED
	}
}
*/