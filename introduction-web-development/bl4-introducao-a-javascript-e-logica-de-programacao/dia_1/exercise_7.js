let nota = -10;

switch (true) {
  case nota >= 90 && nota < 100:
    console.log("sua nota é A");
    break;
  case nota >= 80 && nota < 90:
    console.log("sua nota é B");
    break;
  case nota >= 70 && nota < 80:
    console.log("sua nota é C");
    break;
  case nota >= 60 && nota < 70:
    console.log("sua nota é D");
    break;
  case nota >= 50 && nota < 60:
    console.log("sua nota é E");
    break;
  case nota >= 0 && nota < 50:
    console.log("sua nota é F");
    break;
  case nota > 100 || nota < 0:
    console.log("nota invalida");
    break;
  default:
    console.log("erro");
    break;
}
