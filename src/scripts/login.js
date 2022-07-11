// import { UserController } from "../controllers/UserController.js";

// const formLogin = document.getElementById("form_login_usuario");
// formLogin.addEventListener("submit", coletaDados);

// async function coletaDados(event) {
//   event.preventDefault();

//   const formDados = new FormData(event.target);
//   const novoLogin = Object.fromEntries(formDados);
//   formLogin.reset();

//   const statusLogin = await UserController.logarUsuario(novoLogin);
//   console.log(statusLogin);
//   if (statusLogin.token) {
//     location.href = "/src/Delicious/index.html";
//   }
// }

const urlInsertUser ="https://expresso-fiesta.herokuapp.com/usuario/login";
const formCadastrar = document.getElementById("form_login_usuario");
formCadastrar.addEventListener("submit", validar);
async function validar(event) {
    event.preventDefault();
    const formDados = new FormData(event.target);
    const novoUsuario = JSON.stringify(Object.fromEntries(formDados));      
    fazPost(urlInsertUser,novoUsuario);
    // window.location = "/login.html";
}
function fazPost(url,body) {
    let request = new XMLHttpRequest();
    request.open("POST",url,true);
    request.send(body);
    request.onload = function(event){
      let usuario = new Usuario(JSON.parse(request.response));
      console.log(usuario);
      localStorage.setItem(usuario);
      if (usuario.id != 0) {
        window.location = "/src/Delicious/index.html";
      } else {
        window.alert("Credenciais Invalidas");
      }
      
    }
    
}

