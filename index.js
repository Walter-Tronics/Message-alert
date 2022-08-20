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


//function to display the alert box
function displayCont(){
    //display the alert box
    alertBox.style.display = "block";
    //display animation for the alert box
    gsap.from
    ("#alert", 
    //animation properties
    //duration
    {duration: 1, 
    //scale size of box from 0 to 1
    scale: 0,
    //delay for the animation
    delay: 1, 
    //aimation visibility
    opacity: .5, 
    //animation style
    ease: "bounce"});

    //remove the click event from the button
    cont.removeEventListener("click", displayCont);
    //hide the alert writing
    document.querySelector("#messageAlert").style.display = "none";
}
//add the click event to the message icon
cont.addEventListener('click', displayCont);

//add click event to the hide button
hideBtn.addEventListener('click', ()=>{
    //hide the alert box
    alertBox.style.display = "none";
    //change the color of the attention icon to grey
    float.style.background = "grey";
    //add a timeout to the animation
    setTimeout(()=>{
        //animation to return the attention icon size to 0
        gsap.to
        ("#float", 
        //animation properties
        //duration
        {duration: 1.5, 
        //scale size of box from 1 to 0
        scale: 0, 
        //animation style
        ease: "power2"});
    //set the timeout to carry out the animation to 2 seconds
    },
    2000);
    
});

}