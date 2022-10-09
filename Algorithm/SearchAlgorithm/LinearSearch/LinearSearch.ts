function LinearSearch<T> (data: T[], target: T, fun?: () => number): number {

    if (fun) {
        return fun()
    }
    for (let i = 0; i < data.length; i++) {
        if (data[i] === target) return i
    }
    
    return -1
}

export default LinearSearch
