// Seleciona os elementos do HTML que vamos usar
const botao = document.getElementById('botao-clique');
const displayContador = document.getElementById('contador');

// Cria a variável que vai guardar o número de cliques
let cliques = 0;

// Adiciona um evento de escuta para o clique no botão
botao.addEventListener('click', () => {
    // Incrementa o valor em 1
    cliques++;
    
    // Atualiza o texto que aparece na tela
    displayContador.textContent = cliques;
});