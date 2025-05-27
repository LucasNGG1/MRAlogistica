// Seleciona o botão
const botaoTopo = document.querySelector('.to-top');

if (botaoTopo) {
  // Alterna visibilidade ao rolar
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      botaoTopo.classList.add('visible');
    } else {
      botaoTopo.classList.remove('visible');
    }
  });

  // Scroll suave ao clicar
  botaoTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
