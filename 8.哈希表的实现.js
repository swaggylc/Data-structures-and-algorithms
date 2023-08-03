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
    // 删除方法
    HashTable.prototype.remove = function (key) {
        // 根据key获取对应的索引
        let index = this.hashFn(key, this.limit)
        // 根据索引值取出bucket
        let bucket = this.storage[index]
        // 判断bucket是否为空
        if (bucket == null) {
            return false
        }
        // 遍历bucket，检查是否有相同的key
        for (let i = 0; i < bucket.length; i++) {
            let arr = bucket[i]
            if (arr[0] === key) {
                bucket.splice(i, 1)
                this.count -= 1
                return arr[1]
            }
        }
        return null
    }
    // 判断哈希表是否为空
    HashTable.prototype.isEmpty = function () {
        return this.count == 0
    }
    // 获取哈希表元素个数
    HashTable.prototype.size = function () {
        return this.count
    }

}

// 测试
let hashtable = new HashTable()
// 插入数据
hashtable.put('张三', {
    name: '张三',
    age: 18,
    address: '北京'
})
hashtable.put('李四', {
    name: '李四',
    age: 28,
    address: '上海'
})
hashtable.put('王五', {
    name: '王五',
    age: 45,
    address: '天津'
})

// 获取数据
console.log(hashtable.get('张三'));
console.log(hashtable.get('李四'));
console.log(hashtable.get('王五'));
console.log('aaa', hashtable.get('aaa'));


// 修改方法
hashtable.put('王五', {
    name: '王五',
    age: 45,
    address: 'jiangxi'
})

console.log(hashtable.get('张三'));
console.log(hashtable.get('李四'));
console.log(hashtable.get('王五'));

// 删除方法
hashtable.remove('张三')

console.log('张三',hashtable.get('张三'));
console.log(hashtable.get('李四'));
console.log(hashtable.get('王五'));