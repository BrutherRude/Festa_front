class AlimentoController {
  static BASE_URL = "https://festa-api-22.herokuapp.com";

  static async listarAlimentos() {
    const url = "";
    const alimentos = await fetch(`${url}`)
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => window.alert(err));

    return alimentos;
  }

  static async listarUnicoAlimento(alimentoId) {
    const alimentoUnico = await fetch(`${this.BASE_URL}/alimento/${alimentoId}`)
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => window.alert(err));
    return alimentoUnico;
  }
}

export { AlimentoController };
