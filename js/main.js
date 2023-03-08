var posicao = window.screen.height;


//--função que comanda o scroll do mouse
window.addEventListener('scroll',(event) => {
  var posicao2 = window.screen.height;
  var vPosition = window.scrollY;

  //posição pagina 0 perspectivas---------------------
  if(vPosition>posicao2*-01 && vPosition<=posicao2*1){
    console.log(vPosition);
    
 
    document.getElementById('rodape').innerText="| PROJETO: PERSPECTIVAS"
    document.getElementById('perspectivasBtn').innerText="| PROJETO: PERSPECTIVAS"
  }else{
    
  }


  //posição pagina 1 porque itajaí----------------------
  if(vPosition>posicao2*0.9 && vPosition<=posicao2*2){
    console.log(vPosition); 
    document.getElementById('rodape').innerText="| PROJETO: POR QUE ITAJAÍ ?"
  }else{
    
  }

//posição pagina 3 localização----------------------
if(vPosition>posicao2*1.7 && vPosition<=posicao2*3){
  document.getElementById("local").style.opacity=1;
  document.getElementById('rodape').innerText="| PROJETO: LOCALIZAÇÃO"
  //document.getElementById('navBar').style.backgroundColor='#EDF2F6'
  document.getElementById('logsul').animate(
    [
      {transform:"scale(1)"},
      {transform:"scale(1.2)"},
      {transform:"scale(1)"},
     
    ],
    {
      duration: 1400,
      iterations: Infinity,
    }
    
  );
}else{
  document.getElementById("local").style.opacity=0;
  document.getElementById('navBar').style.backgroundColor='transparent'
  
}
 

//posição pagina 4 acesso----------------------
if(vPosition>posicao2*2.7 && vPosition<=posicao2*4){
  document.getElementById("acesso").style.opacity=1;
  document.getElementById('rodape').innerText="| PROJETO: ACESSO"
}else{
  document.getElementById("acesso").style.opacity=0;
  

}
 



});






 window.addEventListener('estilos',null,
    document.getElementById('perspectivas').style.height=posicao+'px',
    document.getElementById('slider').style.height=posicao+'px',
    document.getElementById('btnSl1').style.height=posicao+'px',
    document.getElementById('btnSl2').style.height=posicao+'px',
    document.getElementById('porque').style.height=posicao+'px',
    document.getElementById('local').style.height=posicao+'px',
    document.getElementById('acesso').style.height=posicao+'px',
    document.getElementById('implanta').style.height=posicao+'px',
    document.getElementById('infoTec').style.height=posicao+'px',
    document.getElementById('caracterTec').style.height=posicao+'px',
    document.getElementById('contato').style.height=posicao+'px',
    document.getElementById('slider').style.height=posicao+'px',
    document.getElementById('perspectivas').style.backgroundImage='url("./img/slider/foto1.jpg")'
    
 )

function pageOpen(id,dis){
   var nomelink = document.getElementById(id).innerHTML;
   
   addEventListener(onclick,     
       document.getElementById('pageTitulo').innerHTML='LOGSUL -'+nomelink,
       window.scrollTo(0, posicao*dis),
       
   ) 
     
}


///----------slider-----------------------------
var valor;
var totalFotos = '24'
function global(){
    valor =1
}
global()


function slider(n,total){
  valor=n+valor
  if(valor===24){
    valor=1
  }
  if(valor===0){
    valor=24
  }
  if(posicao>=0){
    document.getElementById('rodape').innerText='| PROJETO: PERSPECTIVAS: '+'FOTOS '+valor+' / '+totalFotos
  }else{
    document.getElementById('rodape').innerText="Premoaço"
  }
  
 console.log(valor)  
 window.addEventListener('slider',null,
  document.getElementById('perspectivas').style.backgroundImage='url("./img/slider/foto'+valor+'.jpg")',
  
  
)


}



