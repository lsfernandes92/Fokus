const html = document.querySelector('html');
const focusButton = document.querySelector('.app__card-button--foco');
const shortBreakButton = document.querySelector('.app__card-button--curto');
const longBreakButton = document.querySelector('.app__card-button--longo');
const imageBanner = document.querySelector('.app__image');

focusButton.addEventListener('click', () => {
  alterContext('foco')
});

shortBreakButton.addEventListener('click', () => {
  alterContext('descanso-curto')
});

longBreakButton.addEventListener('click', function() {
  alterContext('descanso-longo')
});

function alterContext(context) {
  html.setAttribute('data-contexto', context)
  imageBanner.setAttribute('src', `./imagens/${context}.png`)
}