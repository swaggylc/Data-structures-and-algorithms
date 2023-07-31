// 封装集合类
function Set() {
    // 属性
    this.items = {}

    // 方法
    // add方法
    Set.prototype.add = function (value) {
        // 判断集合上是否有该元素
        if (this.items.has(value)) {
            return false
        }
        // 将元素添加到集合中
        this.items[value] = value
        return true

    }

    // has方法
    Set.prototype.has = function (value) {
        return this.items.hsaOwnProperty(value)
    }

    // remove方法
    Set.prototype.remove = function (value) {
        // 判断集合中是否有该元素
        if (!this.items.has(value)) {
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