import { useEffect,useState } from "react";
import styled from "styled-components";
import cor from "./Cores";
import icoCheck from '../assets/img/ico/check.svg';


export default function Card(props){
    const [arr,setArr]=useState()
    const lista=props.listas ;
    if(!props.listas){
       lista=['lista1','lista2','lista3']
     }
    


     
    var url = props.urlCard;
    const ContCad = styled.div`
       margin-top: 2vh;
       display: flex;
       flex-direction: row;
       width: ${props.largura+"vw"};
       height: ${props.altura+"vh"};
       //background-color:${cor.branca3};
       border-radius: 5px;
       box-shadow: ${cor.boxShadow1};
       
       .box1{
        width: 50%;
        height: ${props.altura+"vh"};
       }
       .box2{
        width: 50%;
        height: ${props.altura+"vh"};
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
       
       }
       .tituloBox{
        display: flex;
        flex-direction: row;
        align-items: center;
        color: ${cor.branca1};
        background-color: ${cor.vermelho1};
        border-top-left-radius: 5px;
        height: ${props.altura/3+"vh"};
       }

       .numero{
        padding-left: 0.4vw;
        padding-right:0.6vw;
        font-size: ${props.altura/3+"vh"};
        color: ${cor.branca2};
        text-shadow: ${cor.textoShadow};

       }
       .titulo{
          font-size: ${props.largura/20+"vw"};
          text-shadow: ${cor.textoShadow};
       }
       .lista{
        font-size: ${props.largura/28+"vw"};
        color: ${cor.azul1};
        margin: 0.5vw;

       }
       
       
    
    `
   var nm = props.numero
    if(!props.numero){
        nm=0
    }
    var tl = props.titulo
    if(!props.titulo){
        tl="titulo aqui"
    }
    return(
        <ContCad>
           <div className="box1">
               <div className="col1">
                  <div className="tituloBox">
                     <div className="numero">{nm}</div>
                     <div className="titulo">{tl}</div>
                  </div>
               </div>
               <div className="lista">
                    
                    {lista.map((item)=><li className="item">{item}</li>)}
                   
               </div>
            </div>
            <img src={url} className="box2"/>
              
           
        </ContCad>
    )
}