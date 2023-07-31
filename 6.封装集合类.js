// 封装集合类
function Set() {
    // 属性
    this.items = {}

    // 方法
    // add方法
    Set.prototype.add = function (value) {
        // 判断集合上是否有该元素
        if (this.has(value)) {
            return false
        }
        // 将元素添加到集合中
        this.items[value] = value
        return true

    }

    // has方法
    Set.prototype.has = function (value) {
        return this.items.hasOwnProperty(value)
    }

    // remove方法
    Set.prototype.remove = function (value) {
        // 判断集合中是否有该元素
        if (!this.has(value)) {
            return false
        }
        delete this.items[value]
        return true
    }

    // clear方法
    Set.prototype.clear = function () {
        this.items = {}
    }

    // size方法
    Set.prototype.size = function () {
        return Object.keys(this.items).length
    }

    // 获取集合所有的值
    Set.prototype.values = function () {
        return Object.keys(this.items)
    }







}


// 使用
let set = new Set()

console.log(set.add('aaa'));
console.log(set.add('bbb'));
console.log(set.add('ccc'));
console.log(set.add('aaa'));

console.log(set.clear());

console.log(set.values());

