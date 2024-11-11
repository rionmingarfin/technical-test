const obj = [
    { id: 1, customer_id: 21, transcation_date: '07/30/2019', name: "budi" },
    { id: 2, customer_id: 15, transcation_date: '24/07/2019', name: "handuk" },
    { id: 3, customer_id: 16, transcation_date: '27/07/2019', name: "surat" },
    { id: 4, customer_id: 20, transcation_date: '25/07/2019', name: "bapak" },
    { id: 5, customer_id: 15, transcation_date: '26/07/2019', name: "adek" },
    { id: 6, customer_id: 20, transcation_date: '28/07/2019', name: "anjas" },
    { id: 7, customer_id: 15, transcation_date: '30/07/2019', name: "ajis" },
    { id: 8, customer_id: 20, transcation_date: '29/07/2019', name: "rion" },
];
const search = "budi"
// const value = obj.filter((val) => val.name.includes(search))
// console.log(value)

const filter = obj.sort((a, b) => {
    const dateA = new Date(a.transcation_date.split("/").reverse().join("/"))
    const dateB = new Date(b.transcation_date.split("/").reverse().join("/"))
    console.log(dateA)
    return dateA - dateB
})
// console.log(filter)