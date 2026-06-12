// Variáveis para armazenar os gols
let golsTimeA = 0;
let golsTimeB = 0;

// Função para adicionar gols
function marcarGol(time) {
    if (time === 'a') {
        golsTimeA++;
        document.getElementById('gols-a').innerText = golsTimeA;
    } else if (time === 'b') {
        golsTimeB++;
        document.getElementById('gols-b').innerText = golsTimeB;
    }
}

// Função para zerar o placar
function reiniciarPartida() {
    golsTimeA = 0;
    golsTimeB = 0;
    document.getElementById('gols-a').innerText = golsTimeA;
    document.getElementById('gols-b').innerText = golsTimeB;
}