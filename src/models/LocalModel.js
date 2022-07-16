export default class localModel {
  static CriaCard(elem) {
    const card = document.createElement("div");
    card.classList.add("col-12", "col-md-6", "col-lg-4", "cardCont");

    const cardSub = document.createElement("div");
    cardSub.classList.add("card", "cardSubCont");
    card.append(cardSub);

    const image = document.createElement("img");
    image.classList.add("card-img-top", "img-cart");
    image.src = elem.urlImg;
    cardSub.append(image);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardSub.append(cardBody);

    const h4Nome = document.createElement("h4");
    h4Nome.classList.add("card-title", "h4Cart");
    h4Nome.innerText = elem.nome;
    cardBody.append(h4Nome);

    const parag = document.createElement("p");
    parag.classList.add("card-text");
    parag.innerText = elem.endereco;
    cardBody.append(parag);

    const h4Valor = document.createElement("h4");
    h4Valor.classList.add("card-title");
    h4Valor.innerText = `Diária: R$ ${elem.valor}`;
    cardBody.append(h4Valor);

    const button = document.createElement("button");
    button.classList.add("btn", "btn-success", "btn-block");
    button.innerText = "Adicionar ao pedido";
    cardBody.append(button);

    return card;
  }
}
