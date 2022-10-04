import ArrayGenerator from "./ArrayGenerator"
import { sortTest } from './SortingHelper'

function main (): void {
    const dataSize = [10000, 100000]
    for (let n of dataSize) {
        const arr = ArrayGenerator.generateOrderedArray(n)
        sortTest('InsertionSort', arr)
    }
}

main()
