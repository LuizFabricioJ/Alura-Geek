import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector('[data-formulario]');

async function criaProdutos(evento){
  evento.preventDefault();

  const id = document.querySelector('[data-id]').value;
  const imagem = document.querySelector('[data-imagem]').value;
  const nome = document.querySelector('[data-nome]').value;
  const descricao = document.querySelector('[data-descricao]').value;
  const preco = document.querySelector('[data-preco]').value;
 
  try{
  await conectaApi.criarProdutos(id,imagem,nome,descricao,preco);
  //redirecionar 
  alert('produto adicionado com sucesso!')
  window.location.href = "/index.html";
 } catch (e){
  alert(e)
 }
   
}   

formulario.addEventListener('submit', evento => criaProdutos(evento));
//edita