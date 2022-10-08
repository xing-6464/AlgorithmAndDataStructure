class List<T> {
    private data: T[]
    private size: number

    constructor (capacity: number = 10) {
        this.data = new Array(capacity)
        this.size = 0
    } 

    // 获取数组元素个数
    getSize (): number {
        return this.size
    }

    // 获取数组容量
    getCapacity (): number {
        return this.data.length
    }

    // 判断数组是否为空
    isEmpty (): boolean {
        return this.size === 0
    }

    // 获取一个元素
    get (index: number): T {
        if (index < 0 || index >= this.size) throw new Error('参数不正确,当前参数大于数组长度')
        return this.data[index]
    }

    // 修改一个元素
    set (key: number, value: T) {
        if (key < 0 || key >= this.size) throw new Error('参数不正确,当前参数大于数组长度')
        this.data[key] = value
    }

    // 向数组最后面添加一个元素
    addLast (value: T) {
        this.add(this.size, value)
    }

    // 向数组最前面插入一个元素
    addFirst (value: T) {
        this.add(0, value)
    }

    // 向数组添加元素
    add (key: number, value: T) {
        if (this.size === this.data.length) throw new Error('Add failed Array is full')
        if (key < 0 || this.size < key) throw new Error('Add failed Require key >= 0 and key <= size.')

        for (let i = this.size - 1; i >= key; i--) {
            this.data[i + 1] = this.data[i]
        }

        this.data[key] = value
        this.size++
    }

}

export default List
