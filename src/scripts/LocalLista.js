import localModel from "../models/LocalModel.js";

const urlGetAlimento = "https://expresso-fiesta.herokuapp.com/local/list";

function data() {
  const resultado = fetch(urlGetAlimento)
    .then((res) => res.json())
    .then((res) => res);
  return resultado;
}

async function armazenaDados() {
  const array = await data();
  array.forEach((elem) => {
    const tabelas = document.getElementById("tabelas");
    tabelas.append(localModel.CriaCard(elem));
  });
}

armazenaDados();
