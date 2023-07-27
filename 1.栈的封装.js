// 封装栈类
function Stack() {
    // 栈中的属性
    this.items = []
    // 栈中的操作
    // 入栈
    Stack.prototype.push = function (element) {
        this.items.push(element)
    }
    // 出栈
    Stack.prototype.pop = function () {
        return this.items.pop()
    }
    // 查看栈顶元素
    Stack.prototype.lookTop = function () {
        return this.items[this.items.length - 1]
    }
    // 判断栈是否为空
    Stack.prototype.isEmpty = function () {
        return this.items.length == 0
    }
    // 获取栈中元素个数
    Stack.prototype.size = function () {
        return this.items.length
    }
    // toString方法
    Stack.prototype.toString = function () {
        let str = ''
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i]
        }
        return str
    }
}

// 栈的使用
// let stack = new Stack()

// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)

// stack.pop()

// console.log(stack.toString());

// 十进制转二进制（除二取余法）
function DecimalToBinary(num) {
    let s = new Stack()

    while (num > 0) {
        s.push(num % 2)
        num = Math.floor(num / 2)
    }
    let str = ''
    // 依次出栈
    while (!s.isEmpty()) {
        str += s.pop()
    }
    return str

}

console.log(DecimalToBinary(10));
