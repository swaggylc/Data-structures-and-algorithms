// 封装双向列表
function DoubleLinkedList() {
    // 属性
    this.head = null
    this.tail = null
    this.length = 0

    // 节点类
    function Node(data) {
        this.previous = null
        this.next = null
        this.data = data
    }

    // 方法
    // append方法
    DoubleLinkedList.prototype.append = function (data) {
        // 新建节点
        let node = new Node(data)
        // 判断链表是否为空
        if (this.length == 0) {
            this.head = node
            this.tail = node
        } else {
            // 链表不为空
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
            node.previous = current
            this.tail = node
        }
        this.length += 1
        return this.length
    }
    // toString方法
    DoubleLinkedList.prototype.toString = function () {
        let current = this.head
        let resString = ''
        while (current) {
            resString += current.data + ' '
            current = current.next
        }
        return resString
    }
    // forwordString方法
    DoubleLinkedList.prototype.forwordString = function () {
        let current = this.tail
        let resString = ''
        while (current) {
            resString += current.data + ' '
            current = current.previous
        }
        return resString
    }
    // backwordString方法
    DoubleLinkedList.prototype.backwordString = function () {
        return this.toString()
    }
    // insert方法
    DoubleLinkedList.prototype.insert = function (data, position) {
        // 新建节点
        let node = new Node(data)
        // 判断是否越界
        if (position < 0 || position > this.length) {
            return false
        }
        let current = this.head
        let index = 0
        // 判断链表是否为空
        if (this.length == 0) {
            this.head = node
            this.tail = node
        } else {
            // 判断插入的位置
            if (position == 0) {
                this.head = node
                node.next = current
                current.previous = node
            } else if (position == this.length) {
                this.tail.next = node
                node.previous = this.tail
                this.tail = node
            } else {
                while (index++ < position) {
                    current = current.next
                }
                current.previous.next = node
                node.previous = current.previous
                current.previous = node
                node.next = current
            }
        }
        this.length += 1
        return true
    }
    // get方法
    DoubleLinkedList.prototype.get = function (position) {
        // 判断是否越界
        if (position < 0 || position >= this.length) return null
        let current = this.head
        let index = 0
        while (index++ < position) {
            current = current.next
        }
        return current.data
    }

    // indexOf方法
    DoubleLinkedList.prototype.indexOf = function (data) {
        let current = this.head
        let index = 0
        while (current) {
            if (current.data === data) {
                return index
            }
            current = current.next
            index += 1
        }
        return -1
    }

    // update方法
    DoubleLinkedList.prototype.update = function (data, position) {
        // 判断是否越界
        if (position < 0 || position >= this.length) return false
        let current = this.head
        let index = 0
        while (index++ < position) {
            current = current.next
        }
        current.data = data
        return true

    }

    // removeAt方法
    DoubleLinkedList.prototype.removeAt = function (position) {
        // 判断越界
        if (position < 0 || position >= this.length) return false
        let current = this.head
        let index = 0
        // 若链表只有一个节点
        if (this.length == 1) {
            this.head = null
            this.tail = null
        } else {
            if (position == 0) {
                // 若删除的位置为0
                this.head = current.next
                this.head.previous = null
            } else if (position == this.length - 1) {
                // 若删除的是最后一个
                current = this.tail
                this.tail = current.previous
                this.tail.next = null
            } else {
                while (index++ < position) {
                    current = current.next
                }
                current.previous.next = current.next
                current.next.previous = current.previous
                current.previous = null
                current.next = null
            }
        }
        this.length -= 1
        return current.data
    }

    // remove方法
    DoubleLinkedList.prototype.remove = function (data) {
        // 使用indexOf方法获取index，再使用removeAt方法移除
        return this.removeAt(this.indexOf(data))
    }


}


// 使用
let doubleLL = new DoubleLinkedList()

doubleLL.append(1)
doubleLL.append(10)
doubleLL.append(110)
doubleLL.append(119)

console.log(doubleLL.toString());


console.log(doubleLL.remove(1));


console.log(doubleLL.toString());