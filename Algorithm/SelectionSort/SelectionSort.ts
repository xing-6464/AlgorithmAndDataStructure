class SelectionSort {

    private constructor () {}

    static sort<T> (arr: T[]): void {

        for (let i = 0; i < arr.length; i++) {

            let minIndex = i
            for (let j = i; j < arr.length; j++) {
                if (arr[j] < arr[minIndex]) minIndex = j
            }

            SelectionSort.swap(arr, minIndex, i)
        }
    }

    static swap<T> (arr: T[], i: number, j: number): void {
        let t = arr[i]
        arr[i] = arr[j]
        arr[j] = t
    }
}

export default SelectionSort
