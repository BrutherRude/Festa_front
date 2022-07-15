class Usuario {
  constructor({ email, login, nome, senha }) {
    this.id = new Date().valueOf();
    this.email = email;
    this.login = login;
    this.nome = nome;
    this.senha = senha;
  }
}
