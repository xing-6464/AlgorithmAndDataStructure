import List from "./DataStructure/List/List"

function main (): void {
    const list = new List<number>()

    list.addLast(1)
    list.addLast(2)
    console.log(list.get(1))
}

main()
