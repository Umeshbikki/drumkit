const soundPlayer=(a)=>{
    let audio;
    switch(a){
        case "w":
             audio=new Audio("sounds/crash.mp3")
            audio.play();break
        case "a":
             audio=new Audio("sounds/kick-bass.mp3")
            audio.play();break
        case "s":
            audio=new Audio("sounds/snare.mp3")
            audio.play();break
        case "d":
            audio=new Audio("sounds/tom-1.mp3")
            audio.play();break
         case "j":
            audio=new Audio("sounds/tom-2.mp3")
            audio.play();break
        case "k":
            audio=new Audio("sounds/tom-3.mp3")
            audio.play();break
        case "l":
            audio=new Audio("sounds/tom-4.mp3")
            audio.play();break
    }
}
const animate=(a)=>{
    let ani=document.querySelector(`.${a}`)
    // console.log(ani)
    ani.classList.add("pressed")
    ani.style.color= "white";
  setTimeout(()=>{
    ani.style.color= "#DA0463";
      ani.classList.remove("pressed")
  },1000)
 
}
document.addEventListener("keydown",(e)=>{
      soundPlayer(e.key)
      animate(e.key)
})
let buttons=document.querySelectorAll(".drum")
buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        soundPlayer(btn.innerHTML)
        animate(btn.innerHTML)
       
    })
})
