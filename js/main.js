let hamburger=document.getElementById('hamburger');
let navbar=document.getElementById('navbar');


let hb1=document.getElementById('hb1');
let hb2=document.getElementById('hb2');
let hb3=document.getElementById('hb3');


hamburger.addEventListener("click",()=>{
    if(navbar.style.display==="block"){
        navbar.style.display="none";
        hb2.style.display="block";
        hb1.style.transform="rotate(0deg)";
        hb3.style.transform="rotate(0deg)";
    }
    else{
        navbar.style.display="block";
        hb2.style.display="none";
        // hb1.style.transform="translateY(5px)";
        hb1.style.transform="rotate(-45deg) translateX(-3px) translateY(3.5px)";
        hb3.style.transform="rotate(45deg) translateX(-3px) translateY(-3.5px)";
    }
});

function display(){
    hamburger.click();
};

let submitted=false;

// function submit(){
//     alert("form submitted");
//     console.log("submit");
// }