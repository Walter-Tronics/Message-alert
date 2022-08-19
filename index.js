window.onload=()=>{

//setting a timeline for the animation
var tl = gsap.timeline({repeat: 3, repeatDelay: 1});

//animation for the first circle
tl.from
("#float", 
    //animation properties
    //duration
    {duration: 1.5, 
    //iitiial size of the circle
    scale: .5, 
    //animation style
    ease: "elastic"});

//Selecting elements
let hideBtn = document.querySelector('#hide'),
alertBox = document.querySelector('#alertCont'),
float = document.querySelector('#float'),
cont = document.querySelector('#cont');

function displayCont(){
    alertBox.style.display = "block";
    gsap.from("#alert", {duration: 1, scale: 0, delay: 1, opacity: .5, ease: "bounce"});
    cont.removeEventListener("click", displayCont);
    document.querySelector("#messageAlert").style.display = "none";
}
cont.addEventListener('click', displayCont);

hideBtn.addEventListener('click', ()=>{
    alertBox.style.display = "none";
    float.style.background = "grey";
    setTimeout(()=>{
        gsap.to("#float", {duration: 1.5, scale: 0, ease: "power2"});
    },2000);
});

}