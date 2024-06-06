async function listaProdutos() {
    const conexao = await fetch("https://json-server-gamma-seven.vercel.app/produtos");
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

// CRIAR NOS PRODUTOS

async function criaProduto(nome, valor, imagem, id) {
    const conexao = await fetch("https://json-server-gamma-seven.vercel.app/produtos",  {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            valor: valor,
            imagem: imagem,
            id: id
        }) 
    });
    if(!conexao.ok) {
        throw new Error ("Não foi possível cadastrar o produto");
    } 
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function buscaProduto(termoDeBusca) {
    const conexao = await fetch(`https://json-server-gamma-seven.vercel.app/?q=${termoDeBusca}`)
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

async function excluirProduto(excluirId) {
    try {
        const conexao = await fetch (`https://json-server-gamma-seven.vercel.app/${excluirId}`, {
            method: "DELETE",
        });
        const data = await conexao.json();
        console.log(data);
    } catch (error) {
        console.error("Falha ao excluir o produto", error);
        throw error;
    }
}

export const conectaApi = {
    listaProdutos,
    criaProduto,
    buscaProduto,
    excluirProduto
} 
