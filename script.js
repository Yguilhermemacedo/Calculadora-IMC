const nome = document.querySelector('#nome');
const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');
const botao = document.querySelector('#botao');
const divRes = document.querySelector('.res');

botao.addEventListener('click', () => {
    const nomeValor = nome.value;
    const alturaValor = parseFloat(altura.value);
    const pesoValor = parseFloat(peso.value);

    // Verificar se os valores são válidos
    if (!isNaN(alturaValor) && !isNaN(pesoValor) && alturaValor > 0 && pesoValor > 0) {
        // Calcular o IMC corretamente
        const imc = pesoValor / Math.pow(alturaValor, 2);

        divRes.style.display = 'flex';

        // Avaliar a condição do IMC
        if (imc < 18.5) {
            console.log('Cuidado, muito magro!');
            divRes.textContent = `${nomeValor}, seu IMC é: ${imc.toFixed(2)}, está abaixo do peso.`;
        } else if (imc >= 18.5 && imc <= 24.9) {
            console.log('Está no peso ideal.');
            divRes.textContent = `${nomeValor}, seu IMC é: ${imc.toFixed(2)}, está em forma.`;
        } else if (imc > 24.9 && imc <= 29.9) {
            console.log('Sobre peso.');
            divRes.textContent = `${nomeValor}, seu IMC é: ${imc.toFixed(2)}, você está sobrepeso.`;
        } else {
            console.log('Obeso.');
            divRes.textContent = `${nomeValor}, seu IMC é: ${imc.toFixed(2)}, OBESO!`;
        }
    } else {
        // Exibir uma mensagem de erro se os valores não forem válidos
        divRes.textContent = "Por favor, insira valores válidos para altura e peso.";
        alert('Insira valores nos campos!')
    }
});
