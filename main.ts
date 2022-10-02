import LinearSearch from "./Algorithm/LinearSearch/LinearSearch"
import ArrayGenerator from "./ArrayGenerator"

function main (): void {
    const dataSize = [1000000, 10000000]
    for (let n of dataSize) {
        const data = ArrayGenerator.generateOrderedArray(n)

        const start = new Date().getTime()
        for (let i = 0; i < 100; i++) {
            const res = LinearSearch.search(data, n)
        }
        const end = new Date().getTime()

        const time = (end - start) / 1000
        console.log(`n = ${n}, 100 runs ${time} s`)
    }   
}

main()
