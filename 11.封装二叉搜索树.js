/**
 * 原理：函数执行栈
 * 
 * 递归思想：
 *  1、确定递归函数的参数和返回值
 *  2、确定递归终止条件（递归出口），无递归出口则会导致栈溢出
 *  3、确定单层递归的逻辑
 * 
 * 
 * 
 */




// 封装二叉搜索树
function BinarySerachTree() {
    // 节点类
    function Node(key) {
        this.key = key
        this.left = null
        this.right = null
    }


    // 属性
    this.root = null

    // 方法
    // insert(key) 插入新的节点
    BinarySerachTree.prototype.insert = function (key) {
        // 新建节点
        let node = new Node(key)
        // 判断是否有根节点
        if (this.root == null) {
            this.root = node
            return true
        } else {
            // 有根节点
            // let current = this.root
            // while (current) {
            //     if (current.key < node.key) {
            //         current = current.right
            //     } else {
            //         current = current.left
            //     }
            // }
            // // 找到节点
            // current = node
            // return true
            this.insertNode(this.root, node)
        }
    }
    // insertNode
    BinarySerachTree.prototype.insertNode = function (node, newNode) {
        if (node.key > newNode.key) {
            if (node.left == null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right == null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    // search(key) 查找节点
    BinarySerachTree.prototype.search = function (key) {
        if (this.root == null) return false
        let current = this.root
        while (current) {
            if (current.key == key) {
                return true
            } else {
                if (current.key < key) {
                    current = current.right
                } else {
                    current = current.left
                }
            }
        }
        return false
    }

    // reValue(key,value) 修改操作，暂不考虑


    // preOrderTraverse 先序遍历
    BinarySerachTree.prototype.preOrderTraverse = function () {
        if (this.root == null) return null
        this.preOrderTraverseNode(this.root)
    }
    BinarySerachTree.prototype.preOrderTraverseNode = function (node) {
        if (node != null) {
            // 处理这个节点
            console.log(node.key);
            // 处理其左节点
            this.preOrderTraverseNode(node.left)
            // 处理其右节点
            this.preOrderTraverseNode(node.right)

        }
    }

    // inOrderTraverse 中序遍历
    BinarySerachTree.prototype.inOrderTraverse = function () {
        if (this.root == null) return null
        this.inOrderTraverseNode(this.root)
    }
    BinarySerachTree.prototype.inOrderTraverseNode = function (node) {
        if (node != null) {
            // 处理其左节点
            this.inOrderTraverseNode(node.left)
            // 处理这个节点
            console.log(node.key);
            // 处理其右节点
            this.inOrderTraverseNode(node.right)
        }
    }

    // postOrderTraverse 后序遍历
    BinarySerachTree.prototype.postOrderTraverse = function () {
        if (this.root == null) return null
        this.postOrderTraverseNode(this.root)
    }
    BinarySerachTree.prototype.postOrderTraverseNode = function (node) {
        if (node != null) {
            // 处理其左节点
            this.postOrderTraverseNode(node.left)
            // 处理其右节点
            this.postOrderTraverseNode(node.right)
            // 处理这个节点
            console.log(node.key);
        }
    }

    // min 树中的最小值
    BinarySerachTree.prototype.min = function () {
        if (this.root == null) return null
        let current = this.root
        while (current.left != null) {
            current = current.left
        }
        return current.key
    }

    // max 树中的最大值
    BinarySerachTree.prototype.max = function () {
        if (this.root == null) return null
        let current = this.root
        while (current.right != null) {
            current = current.right
        }
        return current.key
    }

    // remove(key) 移除某个节点
    BinarySerachTree.prototype.remove = function (key) {
        if (this.root == null) return false
        let current = this.root
        let parent = null
        let isLeftChild = true
        // 查找节点
        while (current.key != key) {
            parent = current
            if (current.key > key) {
                isLeftChild = true
                current = current.left
            } else {
                isLeftChild = false
                current = current.right
            }
            if (current == null) return false
        }
        // 跳出循环后，current即为想删除的节点
        // parent为想删除节点的父节点

        // 删除的节点是叶子节点
        if (current.left == null && current.right == null) {
            if (current == this.root) {
                this.root = null
            } else if (isLeftChild) {
                parent.left = null
            } else {
                parent.right = null
            }
        }
        // 删除的节点有一个子节点
        else if (current.right == null) {
            if (current == this.root) {
                this.root = current.left
            } else if (isLeftChild) {
                parent.left = current.left
            } else {
                parent.right = current.left
            }
        } else if (current.left == null) {
            if (current == this.root) {
                this.root = current.right
            } else if (isLeftChild) {
                parent.left = current.right
            } else {
                parent.right = current.right
            }
        }
        // 删除的节点有两个子节点
        // current节点（要删除的节点），找最接近current节点的值节点，也就是：
        // current节点左子树的最大值（前驱）；右子树的最小值（后继）
        else {
            let successorNode = this.getSuccessor(current)
            // 判断是否为根节点
            if (current == this.root) {
                this.root = successorNode
            } else if (isLeftChild) {
                parent.left = successorNode
            } else {
                parent.right = successorNode
            }
            successorNode.left = current.left
        }
        return true
    }
    // 寻找后继节点
    BinarySerachTree.prototype.getSuccessor = function (delNode) {
        let current = delNode.right
        let successorNode = delNode
        let successorParent = delNode
        while (current) {
            successorParent = successorNode
            successorNode = current
            current = current.left
        }
        // 如果后继节点不是删除节点的右节点
        if (successorNode != delNode.right) {
            successorParent.left = successorNode.right
            successorNode.right = delNode.right
        }
        return successorNode
    }

}

// 测试
let binaryST = new BinarySerachTree()
binaryST.insert(9)
binaryST.insert(6)
binaryST.insert(13)
binaryST.insert(5)
binaryST.insert(8)
binaryST.insert(10)
binaryST.insert(17)
binaryST.insert(15)
binaryST.insert(20)
binaryST.insert(16)

binaryST.inOrderTraverse()
console.log('-------------');
// console.log('最小值--', binaryST.min());
// console.log('-------------');
// console.log('最大值--', binaryST.max());
// console.log('-------------');
// console.log('搜索节点--10', binaryST.search(10));
// console.log('搜索节点--23', binaryST.search(23));
// console.log('搜索节点--5', binaryST.search(5));
// console.log('搜索节点--9', binaryST.search(9));
console.log(binaryST.remove(13));
console.log('-------------');
binaryST.inOrderTraverse()
