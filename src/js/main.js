
//Change the date here
const fechaContador = new Date('jun 1, 2021 18:00:00').getTime(); //remaining time to july arrival



//function to get remaining time
function newTime(params){
    const ahora = new Date().getTime();
    gap = fechaContador - ahora;

    const segundos = 1000;
    const minutos = segundos * 60;
    const horas = minutos * 60;
    const dias = horas * 24;

    const d = Math.floor(gap / (dias));
    const h = Math.floor((gap % (dias)) / (horas));
    const m = Math.floor((gap % (horas)) / (minutos));
    const s = Math.floor((gap % (minutos)) / (segundos));

    getElement('days').innerText = d;
    getElement('hours').innerText = h;
    getElement('minutes').innerText = m;
    getElement('seconds').innerText = s;
}

//this update the temporizer every second
setInterval(function(){
    newTime();
},1000)


function getElement(id){
    return document.getElementById(id);
}

