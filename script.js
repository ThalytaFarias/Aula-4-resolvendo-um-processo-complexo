// Função para obter uma lista de números do usuário
function obterNumeros() {
    const entrada = prompt("Digite uma lista de números separados por vírgula:");
    const numeros = entrada.split(',').map(Number);
    return numeros;
}

// Função para calcular a média de uma lista de números
function calcularMedia(numeros) {
    const soma = numeros.reduce((total, numero) => total + numero, 0);
    return soma / numeros.length;
}

// Função para verificar se cada número é maior ou menor que a média
function compararComMedia(numeros, media) {
    const resultado = numeros.map(numero => {
        if (numero > media) {
            return `${numero} é maior que a média.`;
        } else if (numero < media) {
            return `${numero} é menor que a média.`;
        } else {
            return `${numero} é igual à média.`;
        }
    });
    return resultado;
}

// Fluxo principal
const numeros = obterNumeros();
const media = calcularMedia(numeros);
const resultadoFinal = compararComMedia(numeros, media);

// Mostrar o resultado
console.log("Média:", media);
alert(resultadoFinal.join('\n'));






