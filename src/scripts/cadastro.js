// import { UserController } from "../controllers/UserController.js";

// const formCadastrar = document.getElementById("form_cadastrar_usuario");
// formCadastrar.addEventListener("submit", coletaDados);

// async function coletaDados(event) {
//   event.preventDefault();

//   const formDados = new FormData(event.target);
//   const novoUsuario = Object.fromEntries(formDados);
//   formCadastrar.reset();

//   console.log(novoUsuario);
//   const statusCadastro = await UserController.cadastrarUsuario(novoUsuario);




//   if (statusCadastro.enabled) {
//     location.href = "../../login.html";
//   }
// }
const urlInsertUser ="http://localhost:6789/usuario/insert";
function validar() {
    let nome = frmUsuario.nome.value;
    let login = frmUsuario.login.value;
    let email = frmUsuario.email.value;
    let senha = frmUsuario.senha.value;
    jsonObject =
    {
        "email":"",
        "login":"",
        "nome":"",
        "senha":""     
    }
    jsonObject.email=email;
    jsonObject.login=login;
    jsonObject.nome=nome;
    jsonObject.senha=senha;
    var str=JSON.stringify(jsonObject);
    fazPost(urlInsertUser,str);
    window.location.href = "../../main.html";
    // document.forms["frmUsuario"].submit();
}
function fazPost(url,body) {
    let request = new XMLHttpRequest();
    request.open("POST",url,true);
    request.send(body);
}
