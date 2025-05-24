document.addEventListener('DOMContentLoaded', () => {
  // Dados das pizzas (exemplo, ajuste conforme necessário)
  const pizzas = [
    {
      nome: 'Mussarela',
      descricao: 'Pizza de mussarela com cebola e orégano.',
      precos: { P: 25, M: 35, G: 45 }
    },
    {
      nome: 'Calabresa',
      descricao: 'Pizza de calabresa com cebola, mussarela e orégano.',
      precos: { P: 28, M: 38, G: 48 }
    },
    {
      nome: 'Americana',
      descricao: 'Pizza americana com calabresa, bacon, tomate e mussarela.',
      precos: { P: 30, M: 40, G: 50 }
    },
    {
      nome: 'Portuguesa',
      descricao: 'Pizza portuguesa com molho, mussarela, ovo, cebola, presunto, azeitonas e orégano.',
      precos: { P: 32, M: 42, G: 52 }
    },
    {
      nome: '4 Queijos',
      descricao: 'Pizza com mussarela, gorgonzola, parmesão, catupiry, molho e orégano.',
      precos: { P: 35, M: 45, G: 55 }
    },
    {
      nome: 'Escarola',
      descricao: 'Pizza de escarola com molho, alho, cebola, azeitonas, mussarela e orégano.',
      precos: { P: 33, M: 43, G: 53 }
    }
  ];

  // Seletores do modal
  const modal = document.getElementById('modal-pizza');
  const modalNome = document.getElementById('modal-nome');
  const modalDescricao = document.getElementById('modal-descricao');
  const radioTamanhos = document.getElementsByName('tamanho');
  const precoP = document.getElementById('preco-p');
  const precoM = document.getElementById('preco-m');
  const precoG = document.getElementById('preco-g');
  const btnFechar = document.querySelector('.modal-botes button:last-child');

  // Função para abrir o modal com dados da pizza
  function abrirModal(pizza) {
    modalNome.textContent = pizza.nome;
    modalDescricao.textContent = pizza.descricao;
    precoP.textContent = pizza.precos.P;
    precoM.textContent = pizza.precos.M;
    precoG.textContent = pizza.precos.G;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  // Função para fechar o modal
  function fecharModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  // Adiciona evento nos links das pizzas
  document.querySelectorAll('.section-main > a').forEach((a, idx) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      abrirModal(pizzas[idx]);
    });
  });

  // Botão fechar
  btnFechar.addEventListener('click', fecharModal);

  // Fecha modal ao clicar fora do conteúdo
  modal.addEventListener('click', (e) => {
    if (e.target === modal) fecharModal();
  });

  // Exemplo de função para adicionar ao carrinho
  window.adicionar_ao_carrinho = function() {
    let tamanho = Array.from(radioTamanhos).find(r => r.checked).value;
    let nome = modalNome.textContent;
    alert(`Pizza ${nome} (${tamanho}) adicionada ao carrinho!`);
    fecharModal();
  };



  // Array para armazenar os itens do carrinho
let carrinho = [];

// Botão fechar do modal
btnFechar.addEventListener('click', fecharModal);

// Fecha o modal ao clicar fora do conteúdo
modal.addEventListener('click', (e) => {
  // Se o clique for no fundo do modal (e não no conteúdo), fecha o modal
  if (e.target === modal) fecharModal();
});

// Função para adicionar uma pizza ao carrinho
window.adicionar_ao_carrinho = function() {
  // Pega o tamanho selecionado pelo usuário (P, M ou G)
  let tamanho = Array.from(radioTamanhos).find(r => r.checked).value;
  // Pega o nome da pizza exibido no modal
  let nome = modalNome.textContent;
  // Pega o preço de acordo com o tamanho escolhido
  let preco = 0;
  if (tamanho === 'P') preco = parseFloat(precoP.textContent);
  if (tamanho === 'M') preco = parseFloat(precoM.textContent);
  if (tamanho === 'G') preco = parseFloat(precoG.textContent);

  // Cria um objeto representando o item do carrinho
  let item = {
    nome: nome,      // Nome da pizza
    tamanho: tamanho, // Tamanho escolhido
    preco: preco,     // Preço do tamanho escolhido
    quantidade: 1     // Quantidade (padrão 1, pode ser incrementado depois)
  };

  // Verifica se já existe esse item no carrinho (mesmo nome e tamanho)
  let existente = carrinho.find(p => p.nome === nome && p.tamanho === tamanho);
  if (existente) {
    // Se já existe, só aumenta a quantidade
    existente.quantidade += 1;
  } else {
    // Se não existe, adiciona ao array do carrinho
    carrinho.push(item);
  }

  // Fecha o modal após adicionar ao carrinho
  fecharModal();

  // Atualiza a exibição do carrinho na tela
  mostrarCarrinho();
};

// Função para mostrar o carrinho na tela
function mostrarCarrinho() {
  // Seleciona o elemento onde o carrinho será exibido (crie um <div id="carrinho"></div> no HTML)
  let divCarrinho = document.getElementById('carrinho');
  // Se não existir, não faz nada
  if (!divCarrinho) return;

  // Se o carrinho estiver vazio, mostra mensagem
  if (carrinho.length === 0) {
    divCarrinho.innerHTML = '<p>O carrinho está vazio.</p>';
    return;
  }

  // Monta o HTML da lista de itens do carrinho
  let html = '<ul>';
  let total = 0;
  carrinho.forEach(item => {
    html += `<li>${item.nome} (${item.tamanho}) - R$ ${item.preco.toFixed(2)} x ${item.quantidade}</li>`;
    total += item.preco * item.quantidade;
  });
  html += '</ul>';
  html += `<p><strong>Total: R$ ${total.toFixed(2)}</strong></p>`;

  // Exibe o HTML no elemento do carrinho
  divCarrinho.innerHTML = html;
}

// Função para mostrar o carrinho na tela, agora com visual melhor e botões
function mostrarCarrinho() {
  // Seleciona o elemento onde o carrinho será exibido
  let divCarrinho = document.getElementById('carrinho');
  // Se não existir, não faz nada
  if (!divCarrinho) return;

  // Se o carrinho estiver vazio, mostra mensagem
  if (carrinho.length === 0) {
    divCarrinho.innerHTML = '<p>O carrinho está vazio.</p>';
    return;
  }

  // Começa a montar o HTML do carrinho como uma tabela
  let html = `
    <table border="1" cellpadding="5" style="width:100%;text-align:center;">
      <thead>
        <tr>
          <th>Pizza</th>
          <th>Tamanho</th>
          <th>Preço</th>
          <th>Qtd</th>
          <th>Subtotal</th>
          <th>Remover</th>
        </tr>
      </thead>
      <tbody>
  `;

  let total = 0; // Variável para somar o total

  // Para cada item no carrinho, cria uma linha na tabela
  carrinho.forEach((item, idx) => {
    let subtotal = item.preco * item.quantidade; // Calcula subtotal do item
    total += subtotal; // Soma ao total
    html += `
      <tr>
        <td>${item.nome}</td>
        <td>${item.tamanho}</td>
        <td>R$ ${item.preco.toFixed(2)}</td>
        <td>${item.quantidade}</td>
        <td>R$ ${subtotal.toFixed(2)}</td>
        <td>
          <button onclick="removerItemCarrinho(${idx})">Remover</button>
        </td>
      </tr>
    `;
  });

  html += `
      </tbody>
    </table>
    <p><strong>Total: R$ ${total.toFixed(2)}</strong></p>
    <button onclick="finalizarPedido()">Finalizar Pedido</button>
  `;

  // Exibe o HTML no elemento do carrinho
  divCarrinho.innerHTML = html;
}

// Função para remover um item do carrinho pelo índice
function removerItemCarrinho(idx) {
  // Remove 1 item na posição idx do array carrinho
  carrinho.splice(idx, 1);
  // Atualiza a exibição do carrinho
  mostrarCarrinho();
}

// Função para finalizar o pedido (exemplo: mostrar alerta ou preparar para WhatsApp)
function finalizarPedido() {
  if (carrinho.length === 0) {
    alert('O carrinho está vazio!');
    return;
  }

  // Monta o resumo do pedido
  let mensagem = 'Olá! Gostaria de fazer o seguinte pedido:%0A';
  let total = 0;
  carrinho.forEach(item => {
    mensagem += `- ${item.nome} (${item.tamanho}) x${item.quantidade} - R$ ${item.preco.toFixed(2)} cada%0A`;
    total += item.preco * item.quantidade;
  });
  mensagem += `%0ATotal: R$ ${total.toFixed(2)}`;

  // Abre o WhatsApp com a mensagem pronta (troque o número pelo seu)
  window.open(`https://wa.me/5511995424085?text=${mensagem}`, '_blank');
}

// Torna as funções acessíveis globalmente
window.removerItemCarrinho = removerItemCarrinho;
window.finalizarPedido = finalizarPedido;

// Torna a função fecharModal acessível globalmente (caso use onclick no HTML)
window.fechar_modal = fecharModal;

 
});