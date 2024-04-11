
alert("어서와!")
const content = "Welcome!";
const text = document.querySelector(".title h1");
let i=0;


function typing(){
    if (i <content.length){
        let txt = content.charAt(i);
        text.innerHTML += txt;
        i++;
    }
}
setInterval(typing,200)

