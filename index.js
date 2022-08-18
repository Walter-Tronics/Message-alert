var tl = gsap.timeline({repeat: 3, repeatDelay: 1});
tl.from("#float", {duration: 1.5, scale: .5, ease: "elastic"});

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