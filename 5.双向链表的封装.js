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


}


// 使用
let doubleLL = new DoubleLinkedList()

doubleLL.append(1)
doubleLL.append(10)
doubleLL.append(110)
doubleLL.append(119)

console.log(doubleLL.backwordString());
console.log(doubleLL.forwordString());

console.log(doubleLL.toString());