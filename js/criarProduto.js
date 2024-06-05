import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarProduto(evento) {
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const valor = document.querySelector("[data-valor]").value;
    const imagem = document.querySelector("[data-imagem]").value;

try {
    await conectaApi.criaProduto(nome, valor, imagem, id);
    alert('Produto cadastrado com sucesso!');
  
    } catch (error) {
        console.error("Erro ao criar produto:", error); 
    }

    window.location.reload(true);
}

formulario.addEventListener("submit", evento => criarProduto(evento));

const nome = document.getElementById('nome');
const valor = document.getElementById('valor');
const imagem = document.getElementById('imagem');

function limparFormulario () {
    nome.value = '';
    valor.value = '';
    imagem.value = '';  
}

const limparButton = document.getElementById('limpar');
limparButton.addEventListener('click', limparFormulario);
