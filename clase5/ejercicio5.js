// Array que contém as pizzas disponíveis, cada uma com nome, preço, base e número identificador.
const pizzas = [
    { nombre: 'Marinara', precio: 9.50, base: 'Tomate', numero: 1 },
    { nombre: 'Marinara con anchoas', precio: 13.50, base: 'Tomate', numero: 2 },
    { nombre: 'Margherita', precio: 12.50, base: 'Tomate', numero: 3 },
    { nombre: 'Burrata', precio: 14.50, base: 'Tomate', numero: 4 },
    { nombre: 'Sobrassada', precio: 13.50, base: 'queso', numero: 5 },
    { nombre: 'Butifarra', precio: 15.50, base: 'queso', numero: 6 },
    { nombre: 'Tomates Assados', precio: 11.50, base: 'queso', numero: 7 },
    { nombre: 'Peperonni', precio: 16.50, base: 'queso', numero: 8 },
];

// Array para armazenar as pizzas que o usuário seleciona.
let pizzasSelecionadas = [];



//funcao para veriricar se alguma pizza selecionada tem queijo 

function verificarAlgunaPizzaConQueso() {
    const tenQueso = pizzasSelecionadas.some(pizzas => pizzas.base === 'queso');
    alert(tenQueso ? 'alguna pizza selecionada ten queso' : 'ninguna pizza selecionada ten queso' );
}

//funcao para verificar todas as pizzas acima de 10 euros usando every
function verificarValorAcimade10() {
    const todasAcimaDe10 = pizzasSelecionadas.every(pizzas => pizzas.precio > 10);
    alert(todasAcimaDe10 ? 'Todas las pizzas selecionadas estan acima de 10 euros' : 'Nem todas as pizzas selecionadas custam mais de 10 euros')
}

//funcao para verificar se uma pizza foi selecionada
function verificarPizzaIncluida(nomePizza) {
    const nomesDasPizzasSelecionada = pizzasSelecionadas.map(pizzas => pizzas.nombre);
    const estaIncluida = nomesDasPizzasSelecionada.includes(nomePizza);
    alert(estaIncluida ? 'A pizza Margherita esta incluida' : 'A pizza Margherita no esta incluida')


}


// Adicionar botões de exemplo no HTML para chamar essas funções
document.getElementById('button-verificarQueso').onclick = verificarAlgunaPizzaConQueso;
document.getElementById('button-verificarTodasAcimaDe10').onclick = verificarValorAcimade10;
document.getElementById('button-verificarMargherita').onclick = () => verificarPizzaIncluida('Margherita')


// Função para adicionar uma pizza selecionada ao array de pizzasSelecionadas
function anadirPizza(numeroPizza) {
    // Encontra a pizza no array 'pizzas' que corresponde ao número fornecido.
    const pizzasSelecionada = pizzas.find(pizza => pizza.numero === numeroPizza);
    
    // Se a pizza for encontrada, adiciona ao array de pizzasSelecionadas
    if (pizzasSelecionada) {
        pizzasSelecionadas.push(pizzasSelecionada);
        exibirPizzasSelecionadas(); // Chama a função para exibir as pizzas selecionadas.
    }
}

// Função para exibir as pizzas selecionadas na tela
function exibirPizzasSelecionadas() {
    // Obtém o elemento HTML onde as pizzas selecionadas serão exibidas.
    const pizzasContainer = document.getElementById('pizzasSelecionadas');
    
    // Limpa o conteúdo anterior do container para evitar duplicações.
    pizzasContainer.innerHTML = '';

    // Itera sobre cada pizza selecionada e adiciona ao HTML.
    pizzasSelecionadas.forEach((pizzas, index) => {
        pizzasContainer.innerHTML += `
            <p>
            ${pizzas.nombre} | €${pizzas.precio.toFixed(2)} | ${pizzas.base} | Número: ${pizzas.numero}
             <button onclick="removerPizza(${index})">Remover</button>
             </p>
        `;
    });
}




function removerPizza(index) {
    pizzasSelecionadas.splice(index, 1); // Remove a pizza do array
    exibirPizzasSelecionadas(); // Atualiza a exibição das pizzas selecionadas
}

// Função para preparar as pizzas e calcular o total
function preparar() {
    // Obtém o elemento HTML onde o total será exibido.
    const totalDiv = document.getElementById('total');

    // Calcula o total somando os preços de todas as pizzas selecionadas.
    const total = pizzasSelecionadas.reduce((acc, pizzas) => acc + pizzas.precio, 0);
    
    // Atualiza o conteúdo do elemento total com o valor total formatado.
    totalDiv.innerHTML = `Total: € ${total.toFixed(2)}`;
}

// Adiciona event listeners para cada botão de pizza
document.getElementById('button-Marinara').onclick = () => anadirPizza(1); // Adiciona a pizza Marinara
document.getElementById('button-MarinaraConAchoas').onclick = () => anadirPizza(2); // Adiciona a pizza Marinara com anchoas
document.getElementById('button-Margherita').onclick = () => anadirPizza(3); // Adiciona a pizza Margherita
document.getElementById('button-Burrata').onclick = () => anadirPizza(4); // Adiciona a pizza Burrata
document.getElementById('button-Sobrassada').onclick = () => anadirPizza(5); // Adiciona a pizza Sobrassada

// Adiciona um event listener para o botão de preparar
document.getElementById('button-preparar').onclick = preparar; // Chama a função preparar ao clicar no botão
