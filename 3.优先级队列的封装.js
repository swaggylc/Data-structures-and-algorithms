// 封装优先级队列
function PriorityQueue() {
    // 封装队列的元素类
    function QueueElement(element, priority) {
        this.element = element
        this.priority = priority
    }
    // 属性
    this.items = []
    // 方法
    // 插入一个元素
    PriorityQueue.prototype.enqueue = function (element, priority) {
        // 创建队列元素
        let queueElement = new QueueElement(element, priority)
        // 判断队列中是否有元素，若没有则直接插入
        if (this.items.length == 0) {
            this.items.push(queueElement)
        } else {
            // 有元素则比较，再将其插入
            let added = false
            for (let i = 0; i < this.items.length; i++) {
                if (queueElement.priority < this.items[i].priority) {
                    // 符合判断则插入元素
                    this.items.splice(i, 0, queueElement)
                    added = true
                    break
                }
            }
            // 所有元素比较完，但依然不符合条件
            if (!added) {
                this.items.push(queueElement)
            }
        }
    }

    // delqueue:移除队列头部的第一个元素，并将其返回
    PriorityQueue.prototype.delqueue = function () {
        return this.items.shift()
    }
    // front:返回队列中第一个元素，队列不受影响
    PriorityQueue.prototype.front = function () {
        return this.items[0]
    }
    // isEmpty:队列为空则返回ture，否则返回false
    PriorityQueue.prototype.isEmpty = function () {
        return this.items.length == 0
    }
    // size:返回队列元素的个数
    PriorityQueue.prototype.size = function () {
        return this.items.length
    }
    // toString:将队列中的内容转换为字符串形式
    PriorityQueue.prototype.toString = function () {
        let str = ''
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i].element
        }
        return str
    }
}

// 使用
let pq = new PriorityQueue()

pq.enqueue('aaa', 20)
pq.enqueue('fff', 15)
pq.enqueue('ggg', 201)
pq.enqueue('www', 105)
pq.enqueue('xxx', 8)
pq.enqueue('qqq', 333)

console.log(pq.size());