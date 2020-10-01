const sounds = document.querySelectorAll('audio');
const soundEffects = [...sounds];
const soundButtons = document.querySelectorAll('button');

soundButtons.forEach((soundButton, index) => {
    soundButton.addEventListener('click', () => {
        soundStop();
        soundEffects[index].play();
    })

})

function soundStop() {
    soundEffects.forEach((sound) => {
        sound.pause();
        sound.currentTime = 0;
    })
}