import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarProdutos.js";

async function buscarProduto(evento) {
    evento.preventDefault();
    const dadosDePesquisa = document.querySelector("[data-nome]").value;
    const busca = await conectaApi.buscaProduto(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild(constroiCard(elemento.nome, elemento.valor, elemento.imagem, elemento.id)))

    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo"> Não existem produtos com este termo</h2>`
    }
}
