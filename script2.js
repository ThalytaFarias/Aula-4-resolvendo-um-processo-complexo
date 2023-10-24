// Função para obter entrada do usuário
function obterEntrada() {
    const numero1 = prompt("Digite o primeiro número:");
    const numero2 = prompt("Digite o segundo número:");
    return [parseInt(numero1), parseInt(numero2)];
}

// Função para verificar se um número é múltiplo do outro
function verificarMultiplo(numero1, numero2) {
    return (numero1 % numero2 === 0) || (numero2 % numero1 === 0);
}

// Função para mostrar o resultado
function mostrarResultado(resultado) {
    alert(resultado ? "São múltiplos!" : "Não são múltiplos!");
}

// Fluxo principal
const entrada = obterEntrada();
const resultado = verificarMultiplo(entrada[0], entrada[1]);
mostrarResultado(resultado);