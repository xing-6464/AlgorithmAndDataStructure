import generateOrderedArray from "./ArrayGenerator"
import { sortTest, isSorted } from './SortingHelper'

function main (): void {
    const dataSize = [10000]
    for (let n of dataSize) {
        const arr = generateOrderedArray(n)
        sortTest('SelectionSort', arr)
    }

}

main()
