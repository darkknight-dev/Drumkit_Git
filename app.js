window.addEventListener("keydown",playSound);
const keys1 = document.querySelectorAll('.key')
for (let i=0, key; key = keys1[i]; i++) {
  key.addEventListener('click', playSound);
//   console.log(key);
}

// 
function removeTransition(e){

    if(e.propertyName !== 'transform') return; //Skip it if it's not a transform
    //console.log(this); // here this is 'key' element which is what called the removeTransition function
    this.classList.remove('playing');
    }



    const keys = document.querySelectorAll('.key');
    //console.log(keys);
    keys.forEach(key => key.addEventListener('transitionend',removeTransition));  
    
    
    function playSound(e){

        console.log(this);

        if (e.keyCode) {
            // it was a keypress, get the keycode as usual
            code = e.keyCode;
          } else {
            // it was a click.  Read the keycode from the div that was clicked
            code = this.dataset.key;
            // console.log(code);
          }
    
    const audio = document.querySelector(`audio[data-key="${code}"]`);
    const key = document.querySelector(`.key[data-key="${code}"]`);
    console.log(audio);
    
    if(!audio) return; // If there is no key associated with the day key we specified, stop the function from running all together
    audio.currentTime = 0; //Rewind to the start of the play
    audio.play();

    if(!key) return;
    key.classList.add('playing');

    }



