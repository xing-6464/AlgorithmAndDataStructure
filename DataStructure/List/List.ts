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

    // 查找数组中是否有元素e
    contains (e: T): boolean {
        for (let i = 0; i < this.size; i++) {
            if (this.data[i] == e) {
                return true
            }
        }
        return false
    }
    
    // 查找数组中元素e的index,如果不存在元素e，返回-1
    find (e: T): number {
        for (let i = 0; i < this.size; i++) {
            if (this.data[i] === e) {
                return i
            }
        }
        return -1
    }

    // 从数组中删除index位置的元素，返回删除的元素
    remove (index: number): T {
        if (index < 0 || index >= this.size) throw Error('Remove failed Index is illegel')

        let ret = this.data[index]

        for (let i = index + 1; i < this.size; i++) {
            this.data[i - 1] = this.data[i]
        }
        this.size--

        return ret
    }

    // 从数组中删除第一个元素
    removeFirst (): T {
        return this.remove(0)
    }

    // 从数组中删除最后一个元素
    removeLast (): T {
        return this.remove(this.size - 1)
    }

    // 从数组中删除元素e
    removeElement (e: T): void {
        let index = this.find(e)
        if (index !== -1) this.remove(index)
    }

    // 从数组中删除所以e元素
    removeAllElement (e: T): void {
        for (let index = this.find(e); index !== -1; index = this.find(e)) {
            this.remove(index)
        }
    }
}

export default List
