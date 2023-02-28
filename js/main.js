
addEventListener("scroll",getScroll);
window.onload = getScroll;


function getScroll(){
    
    let sc = window.scrollY+6
    let tl = window.screen.height
    
    let tl2=tl*2
    let tl3=tl*3
    let tl4=tl*4
    let tl5=tl*5
    let tl6=tl*6
    let tl7=tl*7
    let tl8=tl*8
    let sc1= sc
    let sc2= sc
    console.log("tela "+tl3)
    console.log("scroll "+sc)
    document.getElementsByClassName('bnt')[1].onmouseover = function(){
        document.getElementsByClassName('bnt')[1].style.color="blue";
    }
    
    if(sc>=0 && sc2<=tl){
        
        
        document.getElementById('link1').style.color="#E63946";
        document.getElementById('titulo1').style.left=5+"px";
        document.getElementById('titulo1').style.transition=2+'s';
        document.getElementById('page1').style.height=tl+'px';
    }else{
        
        document.getElementById('link1').style.color="#344A68";
        document.getElementById('titulo1').style.transition=2+'s';
        document.getElementById('titulo1').style.left=-500+"px";
        document.getElementById('page1').style.height=tl+'px';
        
    }

    if(sc>=tl && sc<=tl2){
        document.getElementById('link2').style.color="#E63946";
        document.getElementById('titulo2').style.left=5+"px";
        document.getElementById('titulo2').style.transition=2+'s';
        document.getElementById('page2').style.height=tl+'px';
    }else{
        document.getElementById('link2').style.color="#344A68";
        document.getElementById('titulo2').style.transition=2+'s';
        document.getElementById('titulo2').style.left=-500+"px";
        document.getElementById('page2').style.height=tl+'px';
    }

    if(sc>=tl2 && sc<=tl3){
        document.getElementById('link3').style.color="#E63946";
        document.getElementById('titulo3').style.left=5+"px";
        document.getElementById('titulo3').style.transition=2+'s';
        document.getElementById('page3').style.height=tl+'px';
    }else{
        document.getElementById('link3').style.color="#344A68";
        document.getElementById('titulo3').style.transition=2+'s';
        document.getElementById('titulo3').style.left=-500+"px";
        document.getElementById('page3').style.height=tl+'px';
    }

    if(sc1>=tl3 && sc2<=tl4){
        document.getElementById('link4').style.color="#E63946";
        document.getElementById('titulo4').style.left=5+"px";
        document.getElementById('titulo4').style.transition=2+'s';
        document.getElementById('page4').style.height=tl+'px';
    }else{
        document.getElementById('link4').style.color="#344A68";
        document.getElementById('titulo4').style.transition=2+'s';
        document.getElementById('titulo4').style.left=-500+"px";
        document.getElementById('page4').style.height=tl+'px';
    }

    if(sc1>=tl4 && sc2<=tl5){
        document.getElementById('link5').style.color="#E63946";
        document.getElementById('titulo5').style.left=5+"px";
        document.getElementById('titulo5').style.transition=2+'s';
        document.getElementById('page5').style.height=tl+'px';
    }else{
        document.getElementById('link5').style.color="#344A68";
        document.getElementById('titulo5').style.transition=2+'s';
        document.getElementById('titulo5').style.left=-500+"px";
        document.getElementById('page5').style.height=tl+'px';
    }

    if(sc1>=tl5 && sc2<=tl6){
        document.getElementById('link6').style.color="#E63946";
        document.getElementById('titulo6').style.left=5+"px";
        document.getElementById('titulo6').style.transition=2+'s';
        document.getElementById('page6').style.height=tl+'px';
    }else{
        document.getElementById('link6').style.color="#344A68";
        document.getElementById('titulo6').style.transition=2+'s';
        document.getElementById('titulo6').style.left=-500+"px";
        document.getElementById('page6').style.height=tl+'px';
    }
    if(sc1>=tl6 && sc2<=tl7){
        document.getElementById('link7').style.color="#E63946";
        document.getElementById('titulo7').style.left=5+"px";
        document.getElementById('titulo7').style.transition=2+'s';
        document.getElementById('page7').style.height=tl+'px';
    }else{
        document.getElementById('link7').style.color="#344A68";
        document.getElementById('titulo7').style.transition=2+'s';
        document.getElementById('titulo7').style.left=-500+"px";
        document.getElementById('page7').style.height=tl+'px';
    }

    if(sc1>=tl7 && sc2<=tl8){
        document.getElementById('link8').style.color="#E63946";
        document.getElementById('titulo8').style.left=5+"px";
        document.getElementById('titulo8').style.transition=2+'s';
        document.getElementById('page8').style.height=tl+'px';
    }else{
        document.getElementById('link8').style.color="#344A68";
        document.getElementById('titulo8').style.transition=2+'s';
        document.getElementById('titulo8').style.left=-500+"px";
        document.getElementById('page8').style.height=tl+'px';
    }
    
}

