// retornar os movimentos de uma peça de xadrez, sendo indiferente o tamanho da letra:
let peca = "REI";

peca = peca.toLowerCase();

//1ª forma, com if:

if (peca === "rei") {
  console.log(
    "Esta peça se movimenta na horizontal, na vertical e nas diagonais, para tras e para frente, apenas uma casa por vez."
  );
} else if (peca === "rainha") {
  console.log(
    "Esta peça se movimenta na horizontal, na vertical e nas diagonais, para tras e para frente, quantas casas o jogador desejar."
  );
} else if (peca === "bispo") {
  console.log(
    "Esta peça se movimenta apenas nas diagonais, para tras e para frente, na respectiva cor de sua casa inicial, brancas ou preta, nunca nas duas."
  );
} else if (peca === "cavalo") {
  console.log(
    'Esta peça se movienta em "L" pulando três casas para frente e uma para o lado, em qualquer direção'
  );
} else if (peca === "torre") {
  console.log(
    "Esta peça se movimenta apenas na horizontal e na vertical, para frente e para trás."
  );
} else if (peca === "peao") {
  console.log(
    'Esta peça se movimenta apenas uma casa por vez para frente e apenas vai para a diagnoal para "tomar" a peça do adversário'
  );
} else {
  console.log("erro");
}

//2ª forma, com switch:
switch (peca) {
  case "peao":
    console.log(
      'Esta peça se movimenta apenas uma casa por vez para frente e apenas vai para a diagnoal para "tomar" a peça do adversário'
    );
    break;
  case "torre":
    console.log(
      "Esta peça se movimenta apenas na horizontal e na vertical, para frente e para trás."
    );
    break;
  case "cavalo":
    console.log(
      'Esta peça se movienta em "L" pulando três casas para frente e uma para o lado, em qualquer direção'
    );
    break;
  case "cavalo":
    console.log(
      'Esta peça se movienta em "L" pulando três casas para frente e uma para o lado, em qualquer direção'
    );
    break;
  case "bispo":
    console.log(
      "Esta peça se movimenta apenas nas diagonais, para tras e para frente, na respectiva cor de sua casa inicial, brancas ou preta, nunca nas duas."
    );
    break;
  case "rainha":
    console.log(
      "Esta peça se movimenta na horizontal, na vertical e nas diagonais, para tras e para frente, quantas casas o jogador desejar."
    );
    break;
  case "rei":
    console.log(
      "Esta peça se movimenta na horizontal, na vertical e nas diagonais, para tras e para frente, apenas uma casa por vez."
    );
    break;
  default:
    console.log("erro");
    break;
}
