async function listaProdutos() {
  try {
      const response = await fetch("https://64f668cc9d77540849524a60.mockapi.io/produtos/starwars/produtos");
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Erro ao listar produtos:', error);
      throw new Error('Não foi possível listar os produtos');
  }
}

async function criaProduto(id, imagem, nome, descricao, preco) {
  try {
      const response = await fetch("https://64f668cc9d77540849524a60.mockapi.io/produtos/starwars/produtos", {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify({
              id: id,
              imagem: imagem,
              nome: nome,
              descricao: descricao,
              preco: preco
          })
      });
      if (!response.ok) {
          throw new Error('Não foi possível adicionar o produto');
      }
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Erro ao criar produto:', error);
      throw new Error('Não foi possível criar o produto');
  }
}

async function buscaProduto(valor) {
  try {
      const response = await fetch(`https://64f668cc9d77540849524a60.mockapi.io/produtos/starwars/produtos?nome=${valor}`);
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Erro ao buscar produto:', error);
      throw new Error('Não foi possível buscar o produto');
  }
}

async function buscaProdutoId(valor) {
  try {
      const response = await fetch(`https://64f668cc9d77540849524a60.mockapi.io/produtos/starwars/produtos?id=${valor}`);
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Erro ao buscar produto por ID:', error);
      throw new Error('Não foi possível buscar o produto por ID');
  }
}

export const conectaApi = {
  listaProdutos,
  criaProduto,
  buscaProduto,
  buscaProdutoId
}
