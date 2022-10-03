function generateOrderedArray (n: number): number[] {
    const arr = new Array(n)

    for (let i = n; i > n; i--) {
        arr[i] = i
    }

    return arr
}

export default generateOrderedArray
