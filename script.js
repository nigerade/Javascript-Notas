const form = document.getElementById('formMedia');
form.addEventListener('submit', calcularMedia);

function calcularMedia(event) {
    event.preventDefault();

    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);

    if (nota1 > 10 || nota1 < 0 || nota2 > 10 || nota2 < 0) {
        const resultadoElement = document.getElementById('resultado');
        resultadoElement.innerHTML = `Digite um N° entre 0 e 10`;
    }

    else {
        const media = (nota1 + nota2) / 2;
        const conceito = obterConceito(media);

        const resultadoElement = document.getElementById('resultado');
        resultadoElement.innerHTML = `Média: ${media.toFixed(2)}<br>Conceito: ${conceito}`;
    }
}

function obterConceito(media) {
    let conceito;

    switch (true) {
        case (media >= 9.5 && media <= 10):
            conceito = 'Excelente';
            break;
        case (media >= 8.5 && media < 9.5):
            conceito = 'Ótimo';
            break;
        case (media >= 7.5 && media < 8.5):
            conceito = 'Bom';
            break;
        case (media >= 6 && media < 7.5):
            conceito = 'Regular';
            break;
        default:
            conceito = 'Insuficiente';
    }

    return conceito;
}