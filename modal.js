 

//criamos uma constante chamada 'pizzas', que é uma lista (array) com objetos representando cada pizza
const pizzas = [
     {
        id: 1, //Segunda pizza - outro ID único
        nome: "Mussarela", //Nome da pizza
        descricao: "Queimo mussarela derretido com orégano",//Descrição dos ingredientes
        precoP: 25,
        precoM: 35,
        precoG: 45
    },
       {
        id: 2, //identificador unico da pizza (pode ser usasdo para busca ou contrele da pizza)
        nome: "Calabreza", //Nome da pizza
        descricao: "calabresa fatiada, cebola, azeitona.",//Descrição dos ingredientes
        precoP: 25, //Preço da pizza tamanho pequeno
        precoM: 35, //Preço da pizza tamanho medio
        precoG: 45  //Preço da pizza tamanho grande

    },
    {
        id: 3, // Identificador unico da terceira pizza
        nome: "Americana", //Nome da Pizza
        descricao: "Calabresa, bacon, tomate, mussarela.", //Descrição dos ingredientes
        precoP: 25, //Preço da pizza tamanho pequeno
        precoM: 35, //Preço da pizza tamanho medio
        precoG: 45  //Preço da pizza tamanho grande
    },
    {
        id: 4, //Identificador unico da quarta pizza
        nome: "Portuguesa", //Nome da pizza
        descricao: "molho de tomate, mussarela, ovo cozido, cebola, presunto, azeitona, oregano", //descrição dos ingredietnte
        precoP: 25, //Preço da pizza tamanho pequeno
        precoM: 35, //Preço da pizza tamanho medio
        precoG: 45  //Preço da pizza tamanho grande
    },
    {
        id: 5, //Identificador unico da quarta pizza
        nome: "4-Queijos", //Nome da pizza
        descricao: "Mussarela, gorgonzola, parmezao, catupiry, molho de tomate, oregano", //descrição dos ingredietnte
        precoP: 25, //Preço da pizza tamanho pequeno
        precoM: 35, //Preço da pizza tamanho medio
        precoG: 45  //Preço da pizza tamanho grande
    },
     {
        id: 6, //Identificador unico da quarta pizza
        nome: "Escarola", //Nome da pizza
        descricao: "Mussarela, alho, cebola, Escarola, molho de tomate, oregano", //descrição dos ingredietnte
        precoP: 25, //Preço da pizza tamanho pequeno
        precoM: 35, //Preço da pizza tamanho medio
        precoG: 45  //Preço da pizza tamanho grande
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
  precoP.textContent = pizza.precoP;
  precoM.textContent = pizza.precoM;
  precoG.textContent = pizza.precoG;
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
