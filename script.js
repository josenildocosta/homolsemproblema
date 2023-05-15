// Defina a data de início do contador
const dataInicio = new Date("2023-05-15T09:10:21.817Z");

// Função para atualizar o contador de horas
function atualizarContador() {
  const agora = new Date();
  const diff = Math.floor((agora - dataInicio) / 1000); // Diferença em segundos

  const dias = Math.floor(diff / 86400);
  const horas = Math.floor((diff % 86400) / 3600);
  const minutos = Math.floor((diff % 3600) / 60);
  const segundos = diff % 60;

  // Formata a exibição do contador
  const contador = document.getElementById("contador");
  contador.textContent = `${dias.toString().padStart(1, '0')} dia ${horas.toString().padStart(2, '0')}h ${minutos.toString().padStart(2, '0')}min ${segundos.toString().padStart(2, '0')}s`;

  // Atualiza o contador a cada segundo
  setTimeout(atualizarContador, 1000);
}

// Inicia o contador quando a página é carregada
window.addEventListener("load", atualizarContador);
