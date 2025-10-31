const mario = document.querySelector('.mario')
const jump =() => {
    mario.classList.add('jump')
    setTimeout(()=> {
        mario.classList.remove('jump');
    }, 500);
};

document.addEventListener('keydown',jump)

const loop = setInterval(()=>{
    const pipePosition= pipe.offsetLeft
    const marioPosition=+getComputedStyle(mario).bottom
    console.log(marioPosition)

    if(pipePosition<=120){
        pipe.style.animation='none'
        pipe.style.left= `${pipePosition}px`
    }
},10)