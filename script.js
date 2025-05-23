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

  // Corrige onclick do botão fechar no HTML
  window.fechar_modal = fecharModal;
});