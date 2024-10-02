function perguntarComCondicao(pergunta, condicao) {
  let valor = NaN;
  let validadoCondicao = false;
  while (isNaN(valor) || valor <= 0 || !validadoCondicao) {
    valor = Number(prompt(pergunta));
    validadoCondicao = condicao ? eval(`${valor} ${condicao}`) : true;
  }
  return valor;
}

function formatarBrl(valor) {
  const formatar = valor.toFixed(2).replace(".", ",");
  return formatar;
}

function perguntarHorario(pergunta) {
  let hora = NaN,
    minuto = NaN,
    segundo = NaN;
  while (isNaN(hora) && isNaN(minuto) && isNaN(segundo)) {
    [hora, minuto, segundo] = prompt(pergunta).split(":");

    hora = Number(hora);
    minuto = Number(minuto);
    segundo = Number(segundo);
  }
  return { hora, minuto, segundo };
}

function toAsk(parameter) {
  let response, number;
  do {
    if (response != undefined) alert("Informe um valor válido.");

    response = prompt(parameter).replace(",", ".");
    number = response.trim() ? Number(response) : -1;
  } while (isNaN(number) || number < 0);

  return number;
}

function reqNumber(parameter) {
  let response, number;
  do {
    if (response != undefined) alert("Informe um valor válido.");

    response = prompt(parameter).replace(",", ".");
    number = response.trim() ? Number(response) : -1;
  } while (isNaN(number));

  return number;
}

function reqString(parameter) {
  let string;
  do {
    if (typeof string !== "undefined") alert("Informe um texto válido");
    string = prompt(parameter);
  } while (!string || /\s/.test(string) || string === "");

  return string;
}

function mostrarSemEstilo(texto) {
  document.write(texto);
}

function display(texto) {
  const content = document.createElement("div");

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
    `;
  document.firstChild.appendChild(content);
}

function somar(num1, num2) {
  return num1 + num2;
}

function subtrair(num1, num2) {
  return num1 - num2;
}

function multiplicar(num1, num2) {
  return num1 * num2;
}

function dividir(num1, num2) {
  return num1 / num2;
}

function restoDivisao(num1, num2) {
  return num1 % num2;
}

function calcularAumento(valor, porcentagem) {
  return valor * (porcentagem / 100 + 1);
}

function converterParaCelsius(valorFahrenheit) {
  return ((valorFahrenheit - 32) * 5) / 9;
}

function converterParaFahrenheit(valorCelsius) {
  return (valorCelsius * 9) / 5 + 32;
}

function calcularAluguelCarro(diasAlugados, kmRodados) {
  return diasAlugados * 60 + kmRodados * 0.15;
}

// const newRound = (value, decimals) => Math.ceil(value * 10 ** decimals) / 10 ** decimals

// const test = 1.42333123213

// console.log(newRound(test, 2))
// console.log(newRound(test, 4))

// function createVar(qtVar, dataType, ...text) {
//     // console.log(text)
//     let myObject = {}
//     for (let i = 0; i < qtVar; i++) {
//         if (dataType.toLowerCase() === 'number') {
//             parameter = text
//             // console.log(parameter);
//             const getNumber = () => {
//                 let response, number;
//                 do {
//                     if (response != undefined) alert('Informe um valor válido.')
//                     response = prompt(parameter).replace(',', '.')
//                     number = response.trim() ? Number(response) : -1
//                 } while (isNaN(number) || number < 0)
//                 myObject[nameVar] = number
//             }
//             console.log(getNumber(parameter))
//         }

// const getNumber = () => {
//     let response, number;
//     do {
//         if (response !== undefined) alert('Informe um valor válido.');
//         response = prompt(message).replace(',', '.');
//         number = response.trim() ? Number(response) : -1;
//     } while (isNaN(number) || number < 0);               const getString = () => {
//         let string;
//         do {
//             if (response !== undefined) alert('Informe um texto válido');
//             string = prompt(message);
//         } while (!isNaN(string || /\s/.test(response) || response === ''));
//         myObject[nameVar] = string
//     }
//     myObject[nameVar] = number
// };
// const getString = () => {
//     let string;
//     do {
//         if (response !== undefined) alert('Informe um texto válido');
//         string = prompt(message);
//     } while (!isNaN(string || /\s/.test(response) || response === ''));
//     myObject[nameVar] = string
// }

//     console.log(myObject)
// };

// colocar dataType em array e gerando propriedades de múltiplos tipos de dados.
// function createVar(dataColectionReq, dataTypeReq, ...text) {
//     let myObject = {};
//     const joinDataType = [
//         [['prop', 'propriety'], ['s', 'string', 'n'], ['number', 'n'], ['stringnumber', 'stringandnumber']],
//         ['object:s', 'object:string', 'object:n', 'object:number', 'object:sn', 'object:stringnumber', 'object:stringAndNumber'],
//         ['array:s', 'array:string', 'array:n', 'array:number', 'array:sn', 'array:stringnumber', 'array:stringAndNumber'],
//     ];

//     // const allData = (isNaN(dataColectionReq) && isNaN(dataTypeReq))
//     // ?  `${dataColectionReq}:${dataTypeReq}` : alert('Informe um valor válido');

//     const allData = (isNaN(dataColectionReq) && isNaN(dataTypeReq)) ? `${dataColectionReq}:${dataTypeReq}` : alert('Informe um valor válido');
//     const [dataColection, dataType] = allData.toLowerCase().split(':');

//     // const computedDataType = dataType.toLowerCase().split(':');

//     // Processa cada texto para extrair nome e mensagem
//     text.forEach((pairText) => {
//         // Divide o par de texto em nome e mensagem com base no delimitador
//         const [nameVar, message] = pairText.split(':');
//         if (!nameVar || !message) return; // Se não for um par válido, ignora

//         // If is a prop of object, create a var and atribute the function and create a object of this var.
//         if (joinDataType[0][0].includes(dataColection)) {
//             if (joinDataType[0][2].includes(dataType)) {
//                 const getNumber = () => {
//                     let response, number;
//                     do {
//                         if (response !== undefined) alert('Informe um valor válido.');
//                         response = prompt(message).replace(',', '.');
//                         number = response.trim() ? Number(response) : -1;
//                     } while (isNaN(number) || number < 0);
//                     myObject[nameVar] = number
//                 };
//                 getNumber();
//             }
//             if (joinDataType[0][1].includes(dataType)) {
//                 const getString = () => {
//                     let string;
//                     do {
//                    display
//                 getString()
//             }
//         }
//     });
//     return myObject
// };

// const valor2 = validatedPrompt('Informe um valor inteiro(2)', { type: 'text', size: 10 });
display;
const validations = {
  number: (valor) => isNaN(valor) || valor < 0,
  string: (valor) => !valor || /\s/.test(valor) || valor === "",
};

function validatedPrompt(message, options) {
  let value;
  do {
    if (typeof valdisplayue !== undefined) alert("Informe um valor válido.");
    valor = prompt(message);
  } while (validations[options.type](value, options));
}

function createVar(dataColectionReq, dataTypeReq, ...text) {
  let myObject = {};
  const myArray = [];
  const joinDataType = [
    ["s", "string", "n"],
    ["number", "n"],
    ["stringnumber", "stringandnumber"],
    ["prop", "property"],
    ["object", "o"],
    ["array", "a", "arr"],
  ];

  // Verifica se dataColectionReq e dataTypeReq são strings válidas
  // if (typeof dataColectionReq !== 'string' || typeof dataTypeReq !== 'string') {
  //     alert('Informe um valor válido');
  //     return;
  // }

  const allData = `${dataColectionReq}:${dataTypeReq}`.toLowerCase();
  const [dataColection, dataType] = allData.split(":");

  // Processa cada texto para extrair nome e mensagem
  text.forEach((pairText) => {
    // Divide o par de texto em nome e mensagem com base no delimitador
    const [nameVar, message] = pairText.split(":");
    if (!nameVar || !message) return; // Se não for um par válido, ignora

    // Se for uma propriedade de objeto, cria a variável e atribui o valor apropriado
    if (joinDataType[1].includes(dataType)) {
      // Para números
      const getNumber = () => {
        let response, number;
        do {
          if (typeof response !== "undefined")
            alert("Informe um valor válido.");
          response = prompt(message).replace(",", ".");
          number = response.trim() ? Number(response) : -1;
        } while (isNaN(number) || number < 0);

        if (joinDataType[5].includes(dataColection)) {
          return myArray.push(string);
        } else if (joinDataType[3].includes(dataType)) {
          return (myObject[nameVar] = string);
        }
        // if (joinDataType[3].includes(dataColection)) { myObject[nameVar] = number } else if (joinDataType[5].includes(dataColection)) { myArray.push(number) };
      };
      return getNumber();
    }
    if (joinDataType[0].includes(dataType)) {
      // Para strings
      const getString = () => {
        let response, string;
        do {
          if (typeof string !== "undefined") alert("Informe um texto válido");
          string = prompt(message);
        } while (!string || /\s/.test(string) || string === "");

        if (joinDataType[5].includes(dataColection)) {
          return myArray.push(string);
        } else if (joinDataType[3].includes(dataType)) {
          return (myObject[nameVar] = string);
        }
      };
      return getString();
    }
  });
}

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
