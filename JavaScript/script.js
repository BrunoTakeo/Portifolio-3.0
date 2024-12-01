const button1 = document.querySelector("#FarmaciaInfor");
const buttons2 = document.querySelectorAll(".Trabalho_Infor");
const button3 = document.querySelector("#Enviar");
const modal1 = document.querySelector("dialog");
const modal2 = document.querySelector("#Habilidades div dialog");
const btnCloser = document.querySelector('dialog button');

button1.addEventListener("click", (e)=>{
    e.preventDefault();
    button1.classList.add("animate");
    setTimeout(()=>{
    button1.classList.remove("animate");
    },600);
});
button3.addEventListener("click", (e)=>{
    e.preventDefault();
    button3.classList.add("animate");
    setTimeout(()=>{
    button3.classList.remove("animate");
    },600);
});
buttons2.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        button.classList.add("animate");
        setTimeout(() => {
            button.classList.remove("animate");
        }, 600);
    });
});
button1.onclick = function(){
    modal1.showModal();
}

btnCloser.onclick = function(){
    modal1.close();
}

function Action(id){
    let modal2 = document.getElementById(id);
    let modal3 = document.getElementById(id);

    console.log('ID:', id);

    if(modal2){
        modal2.showModal();
    }else{
        if(modal3){
            modal2.showModal();
        }
    }
}
function Back(id){
    let modal2 = document.getElementById(id);
    let modal3 = document.getElementById(id);
    console.log('ID:',id);

    if(modal2){
        modal2.close();
    }else{
        if(modal3){
            modal2.close();
        }
    }
}
