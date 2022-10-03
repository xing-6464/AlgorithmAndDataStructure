function InsertionSort<T> (arr: T[], fun?: (arr: T[]) => void) {
    if (fun) {
        return fun(arr)
    }

    for (let i = 1; i < arr.length; i++) {

        for (let j = i; j > 0 && arr[j-1] > arr[j]; j--) {
            swap(arr, j-1, j)
        }
    }
}

function swap<T> (arr: T[], i: number, j: number) {
    let t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
}

export default InsertionSort
