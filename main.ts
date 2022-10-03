import LinearSearch from "./Algorithm/LinearSearch/LinearSearch"
import ArrayGenerator from "./ArrayGenerator"
import Student from "./Algorithm/LinearSearch/Student"
import SelectionSort from "./Algorithm/SelectionSort/SelectionSort"

function main (): void {
    // const dataSize = [1000000, 10000000]
    // for (let n of dataSize) {
    //     const data = ArrayGenerator.generateOrderedArray(n)

    //     const start = new Date().getTime()
    //     for (let i = 0; i < 100; i++) {
    //         const res = LinearSearch(data, n)
    //     }
    //     const end = new Date().getTime()

    //     const time = (end - start) / 1000
    //     console.log(`n = ${n}, 100 runs ${time} s`)
    // }   
    // const arr = [1, 4, 2, 3, 6, 5]
    // SelectionSort.sort(arr)
    // console.log(arr)

    const students = [new Student('xing'), new Student('light'), new Student('xinglight')]

    const student = new Student('xing')

    const res = LinearSearch(students, student, () => {
        for (let i = 0; i < students.length; i++) {
            if (students[i].name === student.name) return i
        }
        return -1
    })
    console.log(res)

}

main()
