


const pizzas = [
    {
        nombre: 'Marinara',
        precio: 9.50,
        base: 'Tomate',
        numero: 1,
    },
    {
        nombre: 'Marinara con anchoas',
        precio: 13.50,
        base: 'Tomate',
        numero: 2,
    },
    {
        nombre: 'Margherita',
        precio: 12.50,
        base: 'Tomate',
        numero: 3,
    },
    {
        nombre: 'Burrata',
        precio: 14.50,
        base: 'Tomate',
        numero: 4,
    },
    {
        nombre: 'Sobrassada',
        precio: 13.50,
        base: 'queso',
        numero: 5,
    },
    {
        nombre: 'Butifarra',
        precio: 15.50,
        base: 'queso',
        numero: 6,
    },
    {
        nombre: 'Tomates Assados',
        precio: 11.50,
        base: 'queso',
        numero: 7,
    },
    {
        nombre: 'Peperonni',
        precio: 16.50,
        base: 'queso',
        numero: 8,
    },
]

const pizzasBaseQueso = pizzas.filter((pizzas => pizzas.base === 'queso'))
const arrPizzasBaseQueso = pizzasBaseQueso.map(pizzas => `La pizza ${pizzas.nombre} con  el precio ${pizzas.precio} , lleva base de ${pizzas.base} e su numero es ${pizzas.numero}.`)
console.log(arrPizzasBaseQueso)


 const pizzaConNumPares = pizzas.filter(item => item.numero % 2 === 0)
 console.log(pizzaConNumPares)

 const pizzasSinBaseQueso = pizzas.filter((pizzas) => pizzas.base !== 'queso')
 console.log(pizzasSinBaseQueso)


const arrPizzasSinBaseQueso = pizzasSinBaseQueso.map(pizzas => `La pizza ${pizzas.nombre} con  el precio ${pizzas.precio} , no lleva base de ${pizzas.base} e su numero es ${pizzas.numero}.`)
console.log(arrPizzasSinBaseQueso)