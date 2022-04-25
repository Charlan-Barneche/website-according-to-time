
//
let date = new Date
let horas = date.getHours()
let min = date.getMinutes()
let hrmin = horas + ':' + min;

//DOM (COISAS DO HTML)
let hours = window.document.getElementById('hours');
let img = window.document.getElementById('foto');
let bg = window.document.querySelector('body');
let saudacao = window.document.getElementById ('saudacao');


if (hrmin <= '05:00'){
    img.src = 'dia.jpg'
    saudacao.innerHTML = (`<strong>Agora são ${hrmin} hrs da madrugada.</strong>`);
    hours.innerHTML = ('<strong>Boa Madrugada!</strong>');
    bg.style.backgroundColor = 'rgb(41, 41, 41)'

} else if (hrmin <= '11:59'){
    img.src = 'dia.jpg'
    saudacao.innerHTML = (`<strong>Agora são ${hrmin} hrs da manhã.</strong>`);
    hours.innerHTML = ('<strong>Bom dia!</strong>');
    bg.style.backgroundColor = 'rgb(78, 154, 226)';

} else if (hrmin <= '17:59'){
    img.src = 'tarde.jpg'
    saudacao.innerHTML = (`<strong>Agora são ${hrmin} hrs da tarde.</strong>`);
    hours.innerHTML = ('<strong>Boa tarde!</strong>');
    bg.style.backgroundColor = 'rgb(240, 184, 0)';

} else {
    img.src = 'noite.jpg'
    saudacao.innerHTML = (`<strong>Agora são ${hrmin} hrs da noite.</strong>`);
    hours.innerHTML = ('<strong>Boa noite!</strong>');
    bg.style.backgroundColor = 'rgb(41, 41, 41)'
}


