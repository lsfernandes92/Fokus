const html = document.querySelector('html');
const focusButton = document.querySelector('.app__card-button--foco');
const shortBreakButton = document.querySelector('.app__card-button--curto');
const longBreakButton = document.querySelector('.app__card-button--longo');
const imageBanner = document.querySelector('.app__image');

focusButton.addEventListener('click', () => {
  html.setAttribute('data-contexto', 'foco')
  imageBanner.setAttribute('src', './imagens/foco.png')

});

shortBreakButton.addEventListener('click', () => {
  html.setAttribute('data-contexto', 'descanso-curto')
  imageBanner.setAttribute('src', './imagens/descanso-curto.png')
});

longBreakButton.addEventListener('click', function() {
  html.setAttribute('data-contexto', 'descanso-longo')
  imageBanner.setAttribute('src', './imagens/descanso-longo.png')
});