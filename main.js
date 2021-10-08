window.addEventListener ('keydown', (e) => {
    console.log(e);
    const audio = document.querySelector (`audio[data-key="${e.keyCode}"]`); 
    console.log(audio);

    const key = document.querySelector (`.key[data-key="${e.keyCode}"]`); 
    console.log(key);
if(!audio) return;
audio.currentTime = 0;
audio.play()
key.classList.add('playing')
});