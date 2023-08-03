// 封装哈希表类
function HashTable() {
    // 属性
    this.storage = []
    this.count = 0  //元素个数
    this.limit = 7  //数组长度
    // 方法
    // 哈希函数
    HashTable.prototype.hashFn = function (str, size) {
        // 定义hashcode变量
        let hashcode = 0
        // 根据霍纳法则
        // charCodeAt() 方法返回 0 到 65535 之间的整数，表示给定索引处的 UTF-16 代码单元
        for (let i = 0; i < str.length; i++) {
            hashcode = 37 * hashcode + str.charCodeAt(i)
        }
        let index = hashcode % size
        return index
    }
    // 插入/修改操作
    HashTable.prototype.put = function (key, value) {
        // 根据key获取对应的index
        let index = this.hashFn(key, this.limit)
        // 根据索引值取出bucket
        let bucket = this.storage[index]
        // 判断bucket是否为空
        if (bucket == null) {
            bucket = []
            this.storage[index] = bucket
        }
        // 判断新增还是修改
        for (let i = 0; i < bucket.length; i++) {
            // 修改
            let arr = bucket[i]
            if (arr[0] === key) {
                arr[1] = value
                return
            }
        }
        // 新增
        bucket.push([key, value])
        // count加一
        this.count += 1
    }
    // 获取操作
    HashTable.prototype.get = function (key) {
        // 根据key获取对应的索引
        let index = this.hashFn(key, this.limit)
        // 根据索引值取出bucket
        let bucket = this.storage[index]
        // 判断bucket是否为空
        if (bucket == null) {
            return null
        }
        // 遍历bucket，检查是否有相同的key
        for (let i = 0; i < bucket.length; i++) {
            let arr = bucket[i]
            if (arr[0] === key) {
                return arr
            }
        }
        return null
    }



}