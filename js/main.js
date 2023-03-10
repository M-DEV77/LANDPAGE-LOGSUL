
window.addEventListener('scroll',(e)=>{
var scr = scrollY
var alt = screen.height;
var total = 8
document.getElementById('titulo').innerText=alt;
document.getElementById('carouselExampleInterval').style.height=alt+'px'
document.getElementById('porque').style.height=alt+'px'
document.getElementById('local').style.height=alt+'px'
document.getElementById('acesso').style.height=alt+'px'//infoTec planta caracter
document.getElementById('planta').style.height=alt+'px'
document.getElementById('infoTec').style.height=alt+'px'
document.getElementById('caracter').style.height=alt+'px'
document.getElementById('contato').style.height=alt+'px'
document.getElementById('barraStatus').style.width=scr/4+'px'//status bar aqui
if(scr>10){
  document.getElementsByClassName('navbar')[0].style.backgroundColor='#F7FCFC';
  document.getElementsByClassName('navbar')[0].style.transition=0.5+'s'
  document.getElementsByClassName('navbar')[0].style.fontWeight=500
}
if(scr<10){
  document.getElementsByClassName('navbar')[0].style.backgroundColor='transparent';
  document.getElementsByClassName('navbar')[0].style.fontWeight='bold'
}
})



