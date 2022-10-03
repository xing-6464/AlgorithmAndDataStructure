import SelectionSort from './Algorithm/SelectionSort/SelectionSort'

function isSorted<T> (arr: T[]): boolean {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i-1]) return false
    } 
    return true
}

function sortTest<T> (sortName: string, arr: T[]): void {
    const start = new Date().getTime()
    switch (sortName) {
        case 'SelectionSort':
            SelectionSort(arr)
            break
        default:
            break
    }
    const end = new Date().getTime()

    const time = (end - start) / 1000
    if (!isSorted(arr)) throw Error(`${sortName} failed`)
    console.log(`${sortName}, n = ${arr.length}, ${time} s`)
}

export {
    isSorted,
    sortTest
}
