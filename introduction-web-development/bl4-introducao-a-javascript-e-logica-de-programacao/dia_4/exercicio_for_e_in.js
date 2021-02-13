let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

 let info2 = {
     personagem: "Tio Patinhas",
     origem: "Christmas on Bear Mountain, dell's Four Color Comics #178",
     nota: "o ultimo MacPatinhas",
     recorrente: "sim",
 };

  console.log(`Bem vinda ${info.personagem}`);

  info.recorrente = `não`;

  for (let properties in info) {
      if (
          info[properties] === info.recorrente &&
          info[properties] === "sim" &&
          info2[ properties] ==="sim"
      ){
          console.log("ambos recorrentes")
      } else {
          console.log(info[properties] + " e " + info2[properties])}}