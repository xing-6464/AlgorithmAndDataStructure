function SelectionSort<T> (arr: T[], fun?: (arr: T[]) => void): void {
    if (fun) {
        fun(arr)
    }
    for (let i = 0; i < arr.length; i++) {

        let minIndex = i
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j
        }

        swap(arr, minIndex, i)
    }
}

function swap<T> (arr: T[], i: number, j: number): void {
    let t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
}

export default SelectionSort
