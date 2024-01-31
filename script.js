const html = document.querySelector('html');
const focusButton = document.querySelector('.app__card-button--foco');
const shortBreakButton = document.querySelector('.app__card-button--curto');
const longBreakButton = document.querySelector('.app__card-button--longo');
const bannerImage = document.querySelector('.app__image');
const bannerTitle = document.querySelector('.app__title');
const buttons = document.querySelectorAll('.app__card-button');
const backgroundSoundCheckbox = document.querySelector('#alternar-musica');
const backgroundSound = new Audio('./sons/luna-rise-part-one.mp3');
backgroundSound.loop = true;

backgroundSoundCheckbox.addEventListener('change', function() {
  if (backgroundSound.paused) {
    backgroundSound.play();
  }
  else {
    backgroundSound.pause();
  }
});

focusButton.addEventListener('click', () => {
  alterContext('foco');
  focusButton.classList.add('active');
});

shortBreakButton.addEventListener('click', () => {
  alterContext('descanso-curto');
  shortBreakButton.classList.add('active');
});

longBreakButton.addEventListener('click', function() {
  alterContext('descanso-longo');
  longBreakButton.classList.add('active');
});

function alterContext(context) {
  buttons.forEach(function (context) {
    context.classList.remove('active')
  });

  html.setAttribute('data-contexto', context)
  bannerImage.setAttribute('src', `./imagens/${context}.png`)
  switch (context) {
    case 'foco':
      bannerTitle.innerHTML = `
        Otimize sua produtividade,<br>
        <strong class="app__title-strong">mergulhe no que importa.</strong>
      `
      break;
    case 'descanso-curto':
      bannerTitle.innerHTML = `
        Que tal dar uma respirada?<br>
        <strong class="app__title-strong">Faça uma pausa curta!</strong>
      `
      break;
    case 'descanso-longo':
      bannerTitle.innerHTML = `
        Hora de voltar à superfície.<br>
        <strong class="app__title-strong">Faça uma pausa longa.</strong>
      `
      break;
    default:
      break;
  }
}