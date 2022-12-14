class ArrayGenerator {
    
    private constructor () {}

    static generateOrderedArray (n: number): number[] {
        const arr = new Array(n)
    
        for (let i = 0; i < n; i++) {
            arr[i] = i
        }
    
        return arr
    }
    
    static generateRandomArray (n: number): number[] {
        const arr = new Array(n)
    
        for (let i = 0; i < n; i++) {
            arr[i] = Math.floor(Math.random() * 1000)
        }
    
        return arr
    }
}


export default ArrayGenerator
