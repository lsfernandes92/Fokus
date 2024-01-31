const html = document.querySelector('html');
const focusButton = document.querySelector('.app__card-button--foco');
const shortBreakButton = document.querySelector('.app__card-button--curto');
const longBreakButton = document.querySelector('.app__card-button--longo');
const imageBanner = document.querySelector('.app__image');
const title = document.querySelector('.app__title');

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
  switch (context) {
    case 'foco':
      title.innerHTML = `
        Otimize sua produtividade,<br>
        <strong class="app__title-strong">mergulhe no que importa.</strong>
      `
      break;
    case 'descanso-curto':
      title.innerHTML = `
        Que tal dar uma respirada?<br>
        <strong class="app__title-strong">Faça uma pausa curta!</strong>
      `
      break;
    case 'descanso-longo':
      title.innerHTML = `
        Hora de voltar à superfície.<br>
        <strong class="app__title-strong">Faça uma pausa longa.</strong>
      `
      break;
    default:
      break;
  }
}