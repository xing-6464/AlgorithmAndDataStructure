class LinearSearch {

    private constructor () {}

    static search<T> (data: T[], target: T): number {
        for (let i = 0; i < data.length; i++) {
            if (data[i] === target) return i
        }
        
        return -1
    }
}

export default LinearSearch
