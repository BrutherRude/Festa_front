class AlimentoController {
  static BASE_URL = "https://festa-api-22.herokuapp.com";

  static async listarProdutos() {
    const produtos = await fetch(`${this.BASE_URL}/alimento`)
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => window.alert(err));

    return produtos;
  }

  static async listarUnicoProduto(productId) {
    const produtoUnico = await fetch(`${this.BASE_URL}/alimento/${productId}`)
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => window.alert(err));
    return produtoUnico;
  }
}

export { AlimentoController };
