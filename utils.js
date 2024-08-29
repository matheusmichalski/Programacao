
function perguntarComCondicao(pergunta, condicao) {
    let valor = NaN
    let validadoCondicao = false;
    while (isNaN(valor) || valor <= 0 || !validadoCondicao) {
        valor = Number(prompt(pergunta))
        validadoCondicao = condicao ? eval(`${valor} ${condicao}`) : true;
    }
    return valor
}

function formatarBrl(valor) {
    const formatar = valor.toFixed(2).replace('.', ',');
    return formatar
}

function perguntarHorario(pergunta) {
    let hora = NaN, minuto = NaN, segundo = NaN;
    while (isNaN(hora) && isNaN(minuto) && isNaN(segundo)) {
        [hora, minuto, segundo] = prompt(pergunta).split(':')

        hora = Number(hora)
        minuto = Number(minuto)
        segundo = Number(segundo)
    }
    return { hora, minuto, segundo }
}


// function toAsk(parameter) {
//     let response, number
//     do {
//         if (response != undefined) alert('Informe um valor válido.')

//         response = prompt(parameter).replace(',', '.')
//         number = response.trim() ? Number(response) : -1
//     } while (isNaN(number) || number < 0)

//     return number
// }

function mostrarSemEstilo(texto) {
    document.write(texto)
}

function display(texto) {
    const content = document.createElement('div')

    content.innerHTML = `
        <style>
            .button {
                padding: 10px 30px;
                background-color: #e7e7e7;
                color: black;
                cursor: pointer;
                width: 100%;
            }
            .button:hover {
                background-color: #c4c4c4;
            }
            .center {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 85vh;
            }
        </style>
        <div class="center">
            <div>
                <h1>${texto}</h1>
                <button class="button" onclick="location.reload()">Refazer</button>
            <div>
        </div>
    `
    document.firstChild.appendChild(content)
}

function somar(num1, num2) {
    return num1 + num2
}

function subtrair(num1, num2) {
    return num1 - num2
}

function multiplicar(num1, num2) {
    return num1 * num2
}

function dividir(num1, num2) {
    return num1 / num2
}

function restoDivisao(num1, num2) {
    return num1 % num2
}

function calcularAumento(valor, porcentagem) {
    return valor * ((porcentagem / 100) + 1)
}

function converterParaCelsius(valorFahrenheit) {
    return (valorFahrenheit - 32) * 5 / 9
}

function converterParaFahrenheit(valorCelsius) {
    return (valorCelsius * 9 / 5) + 32
}

function calcularAluguelCarro(diasAlugados, kmRodados) {
    return (diasAlugados * 60) + (kmRodados * 0.15)
}


// const newRound = (value, decimals) => Math.ceil(value * 10 ** decimals) / 10 ** decimals

// const test = 1.42333123213

// console.log(newRound(test, 2))
// console.log(newRound(test, 4))


function teste(qtVar, dataType, ...{ nameVar, text }) {
    console.log(text)
    let parameter = []
    let myObject = {}
    for (let i = 0; i < qtVar; i++) {
        if (dataType.toLowerCase() === 'number') {
            parameter = {nameVar, text};
            console.log(parameter);
            const getNumber = () => {
                let response, number;
                do {
                    if (response != undefined) alert('Informe um valor válido.')
                    response = prompt(parameter).replace(',', '.')
                    number = response.trim() ? Number(response) : -1
                } while (isNaN(number) || number < 0)
                myObject[nameVar] = number
            }
            console.log(getNumber(parameter))
        }
    }
    console.log(myArray)
};

// function teste(qtVar, dataType, ...text) {
//     console.log(text);
//     let parameter;

//     for (let i = 0; i < qtVar; i++) {
//         if (dataType.toLowerCase() === 'number') {
//             parameter = text[i];

//             // if (parameter === undefined) {
//             //     console.error('Não há parâmetros suficientes.');
//             //     return;
//             // }

//             console.log(parameter);

//             // Definição da função para obter número válido
//             const getNumber = (parameter) => {
//                 let response, number;
//                 console.log(parameter);
//                 do {
//                     if (response !== undefined) alert('Informe um valor válido.');
//                     response = prompt(parameter).replace(',', '.');
//                     number = response.trim() ? Number(response) : -1;
//                 } while (isNaN(number) || number < 0);
//                 console.log(number);
//                 return number;
//             };

//             // Chama a função para obter o número
//             getNumber(parameter);
//         }
//     }
// }



// while (isNaN(createVar) || createVar == "") {
//     alert("Informe um número!");
//     createVar = Number(prompt(text[i]));
// }
