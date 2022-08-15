const calcular = document.getElementById('btn-calcular');

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        
        const valorIMC = ( peso / (altura * altura) ).toFixed(1);

        let classificação = '';

        if (valorIMC < 18.5) {
            classificação = 'abaixo do peso.';
        } else if (valorIMC < 25) {
            classificação = 'com o peso ideal.';
        } else if (valorIMC < 30) {
            classificação = 'com sobrepeso.';
        } else if (valorIMC < 35) {
            classificação = 'com obesidade grau I';
        } else if (valorIMC < 40) {
            classificação = 'com obesidade grau II';
        } else {
            classificação = 'com obesidade mórbida';
        }

        resultado.innerHTML = `Olá ${nome}, seu IMC é ${valorIMC} e você está ${classificação}`;

    } else {
        resultado.innerHTML = "Preencha todos os campos";
    }
}

calcular.addEventListener('click', imc)