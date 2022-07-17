import Model from "../models/LocalModel.js";

const logout = document.getElementById("logout--");
logout.addEventListener("click", () => {
  localStorage.clear();
  location.href = "../../login.html";
});

if (!localStorage.getItem("@CURRENT_USER")) {
  localStorage.clear();
  location.href = "../../login.html";
}

const urlGetAlimento = "https://expresso-fiesta.herokuapp.com/alimento/list";

function data() {
  const resultado = fetch(urlGetAlimento)
    .then((res) => res.json())
    .then((res) => {
      res.map((el) => {
        el.quantidade = 1;
        el.secao = "Alimento";
      });
      return res;
    });
  return resultado;
}

async function createCards() {
  const array = await data();
  array.forEach((elem) => {
    const tabelas = document.getElementById("tabelas");
    tabelas.append(Model.CriaCard(elem));
  });
}

createCards();

const cartLocal = document.getElementById("cart-local");
cartLocal.innerHTML = "";

Model.arrayLocais.forEach((el) => {
  cartLocal.append(Model.modelCarrinhoCard(el));
});
Model.atualizarQuantidadeTotal();

const finalizarPedido = document.getElementById("finalizar-pedido");
finalizarPedido.addEventListener("click", (e) =>
  montaPedido(e, Model.arrayLocais)
);

function montaPedido(event, data) {
  event.preventDefault();

  let total = data.reduce((a, b) => {
    return a + b.quantidade * b.valor;
  }, 0);
  let quantidadeTotalProdutos = data.reduce((a, b) => {
    return a + b.quantidade;
  }, 0);
  let userId = JSON.parse(localStorage.getItem("@CURRENT_USER")).id;
  let arrLocal = data.filter((el) => el.secao == "Local");

  let arrAtracao = data
    .filter((el) => el.secao == "Atracao")
    .map((el) => {
      delete el.quantidade;
      delete el.secao;
      return el;
    });

  let arrAlimento = data
    .filter((el) => el.secao == "Alimento")
    .map((el) => {
      delete el.secao;
      return el;
    });

  let pedido = {};
  // console.log(arrLocal, arrAtracao, arrAlimento);
  // console.log(total,quantidadeTotalProdutos)
}
