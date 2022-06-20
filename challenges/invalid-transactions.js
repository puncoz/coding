"use strict"

const invalidTransactions = transactions => {
    const invalid = []
    const nameCitiesMap = new Map()


    for(let transaction of transactions) {
        const [name, time, amount, city] = transaction.split(',')
        if(Number(amount) > 1000) {
            invalid.push(transaction)
        }

        nameCitiesMap.set(name, city)
    }

    return invalid
}

const trans = ["alice,20,800,mtv", "alice,50,100,beijing"];
// const trans = ["alice,20,800,mtv", "alice,50,1200,mtv"];
// const trans = ["alice,20,800,mtv", "bob,50,1200,mtv"];

console.log(invalidTransactions(trans))
