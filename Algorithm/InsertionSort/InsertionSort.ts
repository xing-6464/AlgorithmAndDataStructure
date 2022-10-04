function InsertionSort<T> (arr: T[], bool = true, fun?: (arr: T[]) => void) {
    if (fun) {
        return fun(arr)
    }

    for (let i = 1; i < arr.length; i++) {
        let j = i
        let index = arr[j]
        for (; j > 0 && arr[j-1] > index; j--) {
            arr[j] = arr[j-1]
        }
        arr[j] = index
    }

}

function swap<T> (arr: T[], i: number, j: number) {
    let t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
}

export default InsertionSort
