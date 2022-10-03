function SelectionSort<T> (arr: T[], bool = true,fun?: (arr: T[]) => void): void {
    if (fun) {
        fun(arr)
    }
    if (bool) {
        for (let i = 0; i < arr.length; i++) {
    
            let minIndex = i
            for (let j = i; j < arr.length; j++) {
                if (arr[j] < arr[minIndex]) minIndex = j
            }
    
            swap(arr, minIndex, i)
        }
    } else {
        for (let i = arr.length - 1; i > 0; i--) {
            
            let maxIndex = i
            for (let j = i; j > 0; j--) {
                if (arr[maxIndex] < arr[j]) maxIndex = j
            }

            swap(arr, maxIndex, i)
        }
    }
}


function swap<T> (arr: T[], i: number, j: number): void {
    let t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
}

export default SelectionSort
