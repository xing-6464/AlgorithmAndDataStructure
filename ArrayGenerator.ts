function generateOrderedArray (n: number): number[] {
    const arr = new Array(n)

    let index = 0
    for (let i = n - 1; i >= 0; i--) {
        arr[index] = i
        index++
    }

    return arr
}

export default generateOrderedArray
