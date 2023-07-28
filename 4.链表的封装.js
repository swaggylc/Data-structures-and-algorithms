// 链表的封装
function LinkedList() {
    // 封装节点类
    function Node(data) {
        this.data = data
        this.next = null
    }

    // 属性
    this.head = null
    this.length = 0

    // 方法
    // 向链表尾部添加一个元素
    LinkedList.prototype.append = function (data) {
        // 创建元素
        let node = new Node(data)
        // 判断链表是否为空
        if (this.length == 0) {
            // 让head指向这个节点
            this.head = node
        } else {
            // 链表不为空,让current指向第一个节点
            let current = this.head
            // 判断current指向的节点的next是否为null
            while (current.next) {
                current = current.next
            }
            // 指向null则将该节点的next指向node
            current.next = node
        }
        this.length += 1
    }
    // toString方法
    LinkedList.prototype.toString = function () {
        let LinkedListString = ''
        let current = this.head
        while (current) {
            LinkedListString += current.data + ' '
            current = current.next
        }
        return LinkedListString
    }
    // insert方法
    LinkedList.prototype.insert = function (data, position) {
        // 判断position是否越界
        if (position < 0 || position > this.length) return false
        // 创建节点
        let node = new Node(data)
        // 如果插入的是第0个位置
        if (position == 0) {
            node.next = this.head
            this.head = node
        } else {
            // 非第0个位置
            let current = this.head
            let previous = null
            let index = 0
            while (index++ < position) {
                previous = current
                current = current.next
            }
            node.next = current
            previous.next = node
        }
        this.length += 1
        return true
    }




}

// 使用
let link = new LinkedList()
link.append(1)
link.append(2)
link.append(3)
link.append(4)
link.append(5)

console.log(link);
console.log(link.toString());