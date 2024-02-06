const html = document.querySelector('html');
const focusButton = document.querySelector('.app__card-button--foco');
const shortBreakButton = document.querySelector('.app__card-button--curto');
const longBreakButton = document.querySelector('.app__card-button--longo');
const bannerImage = document.querySelector('.app__image');
const bannerTitle = document.querySelector('.app__title');
const buttons = document.querySelectorAll('.app__card-button');
const startPauseButton = document.querySelector('#start-pause');
const startPauseText = document.querySelector('#start-pause span');
const startPauseImage = document.querySelector('.app__card-primary-butto-icon');

let elapsedTimeInSeconds = 5;
let intervalId = null;

const backgroundSoundCheckbox = document.querySelector('#alternar-musica');
const backgroundSound = new Audio('./sons/luna-rise-part-one.mp3');
const playSound = new Audio('./sons/play.wav');
const pauseSound = new Audio('./sons/pause.mp3');
const finishedSound = new Audio('./sons/beep.mp3');

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

const countdown = () => {
  if (elapsedTimeInSeconds <= 0) {
    finishedSound.play();
    startPauseText.textContent = 'Começar';
    startPauseImage.setAttribute('src', `imagens/play_arrow.png`)
    reset();
    return;
  }
  elapsedTimeInSeconds -= 1;
  console.log(`Temporizador: ${elapsedTimeInSeconds}`);
}

startPauseButton.addEventListener('click', startAndPause)

function startAndPause() {
  if (intervalId) {
    pauseSound.play();
    startPauseText.textContent = 'Retomar';
    startPauseImage.setAttribute('src', `imagens/play_arrow.png`)
    reset();
    return;
  }
  playSound.play();
  startPauseText.textContent = 'Pausar';
  startPauseImage.setAttribute('src', `imagens/pause.png`)
  intervalId = setInterval(countdown, 1000);
}

function reset() {
  clearInterval(intervalId);
  intervalId = null;
}