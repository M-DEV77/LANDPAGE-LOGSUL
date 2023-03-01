import { useState,useEffect } from 'react';
import styled from 'styled-components';
import Cor from './Cores';

export default function Slider(props){
    const [cont,setCont] = useState(1);
    const qd = props.quant;
    const url = props.urls;
    useEffect(()=>{
       document.getElementById('tela').style.backgroundImage =`url('${url+cont}.jpg')`;
      
       if(cont>=qd){
        setCont(qd)
       }
      
       if(cont<=0){
        setCont(1)
       }
         },[url,cont,qd])


    const SliderCont = styled.div`
        height: 80vh;
        width: 100vw;
        background-size: cover;
        animation: fundo 2s;
            @keyframes fundo {
                0%  {opacity:0.0}
                100%{opacity:1}
            }
            .contentSl{
              display: flex;
              flex-direction: row;
              justify-content: space-between;
            }
            button{
              width: 4vw;
              height:80vh;
              border: none;
              opacity: 0.6;
              cursor: pointer;
            }
          
    `
    
    return(
    
    <SliderCont id='tela'>
            <div className="contentSl">
              <button onClick={()=>{setCont(cont-1)}}>menus</button>
              <h3>{cont}/{qd} {props.nome}</h3>
              <button onClick={()=>{setCont(cont+1)}}>mais</button> 
            </div>   
    </SliderCont>
          
   
    )
} 