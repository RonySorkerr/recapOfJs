const products = [
    {id : 1, name : 'lenovo', price: 250000},
    {id : 2, name : 'apple', price: 250000},
    {id : 3, name : 'hp', price: 200000},

]
const names = products.map(product => product.name)
console.log(names)

const prices = products.map(proPrice => proPrice.price)
console.log(prices)

const expensive = products.filter(p=> p.price > 210000)
console.log(expensive)