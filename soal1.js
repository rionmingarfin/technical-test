function filterData(arr) {
    const filter = arr.filter((val) => val === 9 || val === 5 || val === 3 || val === 1)
    return filter.sort((a, b) => b - a)
}
const input = [2, 4, 6, 5, 3, 1, 7, 9, 10, 8];
const result = filterData(input)
console.log(result)