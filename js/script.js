// criar um objeto com as perguntaas, mostralas e captar as respostas
const printPontos = document.getElementById("pontos");
const printVida = document.getElementById("vida");
const pergs = document.getElementById("pergs");
const alter1 = document.getElementById("alt1");
const alter2 = document.getElementById("alt2");
const alter3 = document.getElementById("alt3");
const button = document.querySelectorAll(".btnGeneral");
const modalResult = document.getElementById("modalResult");
const aviso = document.getElementById("aviso");

var click;
var respUser;
var i;
var vida = 3;
var desc;
var alt = [];
var resp;
var acertos;

function perguntas() {
  var num1 = Math.random() * status_perg.max1 | 1;
  var num2 = Math.random() * status_perg.max2 | 1;
  var operat = Math.random() * status_perg.operacao | 0;
  var chooseResp = (Math.random() * 3) | 1;

  console.log(operat);

  if (operat == 0) {
    desc = `Qual a soma correta para ${num1} + ${num2}: `;
    resp = num1 + num2;
  } else if (operat == 1) {
    desc = `Qual a soma correta para ${num1} - ${num2}: `;
    resp = num1 - num2;
  } else if (operat == 2 && num1 < 50 && num2 < 50) {
    desc = `Qual a soma correta para ${num1} * ${num2}: `;
    resp = num1 * num2;
  } else if (operat == 3 && num1 > num2 && num2 < 20) {
    desc = `Qual a soma correta para ${num1} / ${num2}: `;
    resp = Math.ceil(num1 / num2);
  } else {
    var aleat = (Math.random() * 2) | 1;
    switch (aleat) {
      case 1:
        desc = `Qual a soma correta para ${num1} + ${num2}: `;
        resp = num1 + num2;
        break;
      case 2:
        desc = `Qual a soma correta para ${num1} - ${num2}: `;
        resp = num1 - num2;
        break;
      default:
        window.location.reload();
        break;
    }
  }

  switch (chooseResp) {
    case 1:
      alt = [
        resp,
        (Math.random() * resp) | (resp + num2),
        (Math.random() * resp) | (resp - num1),
      ];
      break;
    case 2:
      alt = [
        (Math.random() * resp) | (resp + num2),
        (Math.random() * resp) | (resp - num1),
        resp,
      ];
      break;
    case 3:
      alt = [
        (Math.random() * resp) | (resp - num1),
        resp,
        (Math.random() * resp) | (resp + num2),
      ];
      break;
  }

  pergs.innerText = desc;
  alter1.innerText = alt[0];
  alter2.innerText = alt[1];
  alter3.innerText = alt[2];

  alter1.setAttribute("value", alt[0]);
  alter2.setAttribute("value", alt[1]);
  alter3.setAttribute("value", alt[2]);

  printVida.innerText = `Vida: ${vida}`;
  printPontos.innerText = `Pontos: ${pontos}`;
}

perguntas();

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    respUser = button[i].getAttribute("value");
    envio(respUser);
  });
}

function envio(resposta) {
  if (resposta == resp) {
    pontos += 10;
    if (pontos == 100) {
      window.alert(
        "Você ganhou 100 pontos, parabéns!!! Agora iremos para a proxima fase."
      );
      window.location.href = "index.html";
    } else {
      window.alert("Você acertou!");
    }
  } else {
    vida--;
    if (vida != 0) {
      window.alert("Que pena! Você errou!");
    } else {
      window.alert("Que pena! Suas vidas acabaram!");
      window.location.reload(false);
    }
  }

  perguntas();
}
