import LinearSearch from "./Algorithm/LinearSearch/LinearSearch"
import Student from "./Algorithm/LinearSearch/student"

function main (): void {
    const data = [16, 24, 346, 234, 53, 12, 23]
    
    let res = LinearSearch.search(data, 16)

    console.log(res)
}

main()
