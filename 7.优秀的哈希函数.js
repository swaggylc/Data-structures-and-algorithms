// 设计哈希函数
/**
 * 1、将字符串转换为较大的数字：hashcode
 * 1、将大的hashcode压缩在符合数组范围之内
 */
function hashFn(str, size) {
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

// 使用
console.log(hashFn('abc', 7));
console.log(hashFn('sdf', 7));
console.log(hashFn('egrt', 7));
console.log(hashFn('dydf', 7));
console.log(hashFn('gyh', 7));