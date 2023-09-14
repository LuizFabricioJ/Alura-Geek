import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector('[data-lista]');

function mostraProduto(id, imagem, nome, descricao, preco) {
  const produto = document.createElement('li');
  produto.className = 'produto__item';
  produto.innerHTML = `
      <section class="lista__bonecos">
          <div class="bonecos">
              <img class="bonecos__imagens" src="${imagem}" alt="Caixa do Boba Fett"/>
              <h2 class="titulo__boneco">${nome}</h2>
              <p class="descricao">${descricao}</p>
              <p class="preco__boneco" id="preco">${preco}</p>
              <button class="btn-delete">Deletar</button>
          </div>
      </section>
  `;
  return produto;
}

async function listaProdutos() {
  try {
    const listaApi = await conectaApi.listaProdutos();
    listaApi.forEach(elemento => lista.appendChild(mostraProduto(elemento.id, elemento.imagem, elemento.nome, elemento.descricao, elemento.preco)));
  } catch (error) {
    lista.innerHTML = `<h2>Não foi possível carregar os produtos</h2>`;
    console.error('Erro ao listar produtos:', error);
  }
}

listaProdutos();

lista.addEventListener('click', async function (evento) {
  let elementoClicado = evento.target;
  if (elementoClicado.classList.contains('btn-delete')) {
    let btn = elementoClicado;
    let produto = btn.parentElement;
    let id = produto.querySelector('#preco').textContent;
    id = parseInt(id);
    produto.remove();
    await deletarProduto(id);
  }
});

async function deletarProduto(id) {
  try {
    const conexao = await fetch(`https://64f668cc9d77540849524a60.mockapi.io/produtos/starwars/produtos/${id}`, {
      method: 'DELETE'
    });
    if (!conexao.ok) {
      throw new Error('Não foi possível deletar o produto');
    }
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
  } catch (error) {
    console.error('Erro ao deletar produto:', error);
    throw new Error('Não foi possível deletar o produto');
  }
}

