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

    }

    // reValue(key,value) 修改操作，暂不考虑

    // inOrderTraverse 中序遍历
    BinarySerachTree.prototype.inOrderTraverse = function () {

    }

    // preOrderTraverse 先序遍历
    BinarySerachTree.prototype.preOrderTraverse = function () {

    }

    // postOrderTraverse 后序遍历
    BinarySerachTree.prototype.postOrderTraverse = function () {

    }

    // min 树中的最小值
    BinarySerachTree.prototype.min = function () {

    }

    // max 树中的最大值
    BinarySerachTree.prototype.max = function () {

    }

    // remove(key) 移除某个节点
    BinarySerachTree.prototype.remove = function (key) {

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