




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


const formulario = document.querySelector('#formulario')
const pizza = document.querySelector('#pizza')
const message = document.querySelector('#message')

formulario.onsubmit = e => {
    e.preventDefault()


 const numero = document.forms.formulario.inputNova.value
 filtrarNumero(numero)
}


function filtrarNumero(numero) {
    let htmlNumero = pizzas.reduce((acc, curr) => {
        if (curr.numero == numero ) {
            acc +=`
            <li> 
            ${curr.nombre} | Numero: ${curr.numero}
            </li>
            `
        }

            return acc
        }, '')

        if (htmlNumero){
        pizza.innerHTML = htmlNumero 
        message.innerText = '' 
    } else {
        
        pizza.innerHTML = ''
        message.innerText = 'Nao existe pizza com esse numero '} 
    
    document.forms.formulario.inputNova.value = ''
}
    
    



