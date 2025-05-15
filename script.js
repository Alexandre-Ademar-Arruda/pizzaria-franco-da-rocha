document.addEventListener("DOMContentLoaded", function() {
    alert("Bem-vindo à Pizzaria Saboroso!");
});

function fazerPedido(pizza) {
  const numero = "5511995424085";
  const mensagem = encodeURIComponent(`Olá! Quero pedir uma *${pizza}*, por favor.`);
  const url = `https://wa.me/${numero}?text=${mensagem}`;
  window.open(url, "_blank");
}
