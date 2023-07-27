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

        this.length++
    }






}