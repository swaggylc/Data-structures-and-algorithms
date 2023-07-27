// 封装队列类
function Queue() {
    // 属性
    this.items = []
    // 方法
    // enqueue:向队列尾部插入一个或多个元素
    Queue.prototype.enqueue = function (...args) {
        for (let i = 0; i < args.length; i++) {
            this.items.push(args[i])
        }
    }
    // delqueue:移除队列头部的第一个元素，并将其返回
    Queue.prototype.delqueue = function () {
        return this.items.shift()
    }
    // front:返回队列中第一个元素，队列不受影响
    Queue.prototype.front = function () {
        return this.items[0]
    }
    // isEmpty:队列为空则返回ture，否则返回false
    Queue.prototype.isEmpty = function () {
        return this.items.length == 0
    }
    // size:返回队列元素的个数
    Queue.prototype.size = function () {
        return this.items.length
    }
    // toString:将队列中的内容转换为字符串形式
    Queue.prototype.toString = function () {
        let str = ''
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i]
        }
        return str
    }

}

// 使用队列
// let queue = new Queue()

// queue.enqueue(1, 2, 3)
// console.log(queue.delqueue());
// console.log(queue.front());
// console.log(queue.isEmpty());
// console.log(queue.size());
// console.log(queue.toString());


// 击鼓传花问题
function passFlower(nameList, num) {
    // 创建一个队列，并将数组加入
    let queue = new Queue()
    queue.enqueue(...nameList)
    // 开始数数，不是num时，加入到队列末尾
    // 是num时，把它从队列删除
    while (queue.size() > 1) {
        for (let i = 0; i < num - 1; i++) {
            queue.enqueue(queue.delqueue())
        }
        queue.delqueue()
    }
    return queue.front()    //若返回下标则用indexOf在nameList中查找即可
}

console.log(passFlower(['小红', '小米', '小明', '小刚', '小刘'], 6));

