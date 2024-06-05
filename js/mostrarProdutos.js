import { conectaApi } from "./conectaApi.js";
import { excluirProduto } from "./excluirProdutos.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(nome, valor, imagem, id) {
    const produto = document.createElement("li")
    produto.className = "cards__item"
    produto.innerHTML = `<div class="card">
    <img class="card__imagem" src="${imagem}">
    <p class="img__nome">${nome}</p>
    <div class="valor__e__icone"><p class="valor">R$ ${valor}</p>
    <button id="${id}" data-excluir><img class="icone__excluir" src="./assets/icone-excluir.png" alt="Botão excluir"> <a></a></button></div>`

    return produto;
}

async function listaProdutos() {
    try {
    const listaApi = await conectaApi.listaProdutos();
    if (listaApi.length > 0) {
    listaApi.forEach(elemento => {lista.appendChild(constroiCard(elemento.nome, elemento.valor, elemento.imagem, elemento.id));});

    const botaoExcluir = document.querySelectorAll("[data-excluir]");
    botaoExcluir.forEach(botao => {
        botao.addEventListener("click", () => excluirProduto(botao.id));
    });
} else {
    products.innerHTML = `<h2 class="mensagem__titulo">Nenhum produto foi adicionado!</h2>`;
}

    } catch {
        lista.innerHTML = `<h2 class= "mensagem__titulo">Neste momento nenhum produto foi adicionado!</h2>`
        console.error("Erro ao listar produtos", error)
    }
}    
  
listaProdutos();