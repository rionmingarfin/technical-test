const obj = [
    { id: 1, customer_id: 21, transcation_date: '07/30/2019' },
    { id: 2, customer_id: 15, transcation_date: '21/07/2019' },
    { id: 3, customer_id: 16, transcation_date: '21/07/2019' },
    { id: 4, customer_id: 20, transcation_date: '21/07/2019' },
    { id: 5, customer_id: 15, transcation_date: '21/07/2019' },
    { id: 6, customer_id: 20, transcation_date: '21/07/2019' },
    { id: 7, customer_id: 15, transcation_date: '21/07/2019' },
    { id: 8, customer_id: 20, transcation_date: '21/07/2019' },
];


function countTransaction(obj) {
    let transactionCount = {}
    obj.forEach(element => {
        transactionCount[element.customer_id] = (transactionCount[element.customer_id] || 0) + 1
    });
    return transactionCount
}

function sortData(obj) {
    const sortTransaction = Object.entries(obj).sort((a, b) => {
        if (a[1] !== b[1]) {
            return b[1] - a[1]
        } else {
            return a[0].localeCompare(b[0])
        }
    })
    return sortTransaction
}
const sum = countTransaction(obj)
const sort = sortData(sum)

console.log("Customer_ID\tTotal Penjualan");
sort.forEach((element) => {
    console.log(`${element[0]} \t\t ${element[1]}`)
})