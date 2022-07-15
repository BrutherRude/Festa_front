const urlInsertUser ="https://expresso-fiesta.herokuapp.com/usuario/insert";
const formCadastrar = document.getElementById("form_cadastrar_usuario");
formCadastrar.addEventListener("submit", validar);
async function validar(event) {
    event.preventDefault();
    const formDados = new FormData(event.target);
    const novoUsuario = JSON.stringify(Object.fromEntries(formDados));      
    fazPost(urlInsertUser,novoUsuario);
    window.location = "/login.html";
}
function fazPost(url,body) {
    let request = new XMLHttpRequest();
    request.open("POST",url,true);
    request.send(body);
}
