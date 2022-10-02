class LinearSearch {
    static search (data: number[], target: number): number {
        for (let i = 0; i < data.length; i++) {
            if (target === data[i]) return i
        }

        return -1
    }
}