function verificaFibonacci(numero) {
    let a = 0, b = 1;
    while (a < numero) {
        const temp = a;
        a = b;
        b = temp + b;
    }
    if (a === numero) {
        return `${numero} pertence à sequência de Fibonacci.`;
    } else {
        return `${numero} não pertence à sequência de Fibonacci.`;
    }
}

// Testando com o número 13
console.log(verificaFibonacci(13));

const lâmpadas = [false, false, false]; // Inicialmente, todas as lâmpadas estão apagadas

function descobreInterruptores() {
    // Ligue o primeiro interruptor (0)
    lâmpadas[0] = !lâmpadas[0];
    
    // Espere alguns minutos
    
    // Desligue o primeiro interruptor (0) e ligue o segundo interruptor (1)
    lâmpadas[0] = !lâmpadas[0];
    lâmpadas[1] = !lâmpadas[1];
    
    // Entre na sala das lâmpadas e verifique o estado de cada uma
    for (let i = 0; i < lâmpadas.length; i++) {
        if (lâmpadas[i]) {
            console.log(`A lâmpada ${i+1} está acesa e está conectada ao interruptor ${i+1}.`);
        } else {
            console.log(`A lâmpada ${i+1} está apagada e está conectada a outro interruptor.`);
        }
    }
}

// Chamada da função para descobrir os interruptores
descobreInterruptores();

function inverteString(string) {
    let stringInvertida = '';
    for (let i = string.length - 1; i >= 0; i--) {
        stringInvertida += string[i];
    }
    return stringInvertida;
}

// Testando com a string "javascript"
console.log(inverteString("javascript"));
