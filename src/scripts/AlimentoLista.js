const urlGetAlimento ="http://localhost:6789/alimento/list";
let array = [];

function data() {
    const resultado = fetch(urlGetAlimento).then(resposta => resposta.json()
    ).then(corpo => corpo)
    return resultado;
}
armazenaDados();
async function armazenaDados() {
    array = await data();
    console.log(array[1]);
  for (let i = 0; i < array.length; i++) {
    document.getElementById("tabelas").innerHTML += `
    <div class="col-12 col-md-6 col-lg-4">
    <div class="card">
        <img class="card-img-top" src="${array[i].urlImg}" alt="Card image cap">
        <div class="card-body">
            <h4 class="card-title"><a href="product.html" title="View Product">${array[i].nome}</</a></h4>
            <p class="card-text"></p>
            <div class="row">
                <div class="col">
                    <p class="btn btn-danger btn-block">${array[i].valor} R$</ $</p>
                </div>
                <div class="col">
                    <a href="#" class="btn btn-success btn-block">Adicionar ao pedido</a>
                </div>
            </div>
        </div>
    </div>
</div>`
    
  }  
}





