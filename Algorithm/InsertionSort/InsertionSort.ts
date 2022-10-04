function InsertionSort<T> (arr: T[], fun?: (arr: T[]) => void) {
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

export default InsertionSort
