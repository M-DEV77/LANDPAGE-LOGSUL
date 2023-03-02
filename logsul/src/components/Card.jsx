import { useEffect,useState } from "react";
import styled from "styled-components";
import cor from "./Cores";



export default function Card(props){
    const [arr,setArr]=useState()
    var lista=props.listas ;
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
       background-color:${cor.branca3};
       border-radius: 5px;
       box-shadow: ${cor.boxShadow1};
       margin: 0.8vw;
       //-----------------------------------------------------------------//
       @media only screen and (max-width: 1500px) and (min-width: 900px){
       display: flex;
       flex-direction: column;
       height: ${props.altura/1.1+"vh"};
       }
       @media only screen and (max-width: 899px) and (min-width: 500px){ 
       display: flex;
       flex-direction: column;
       height: ${props.altura/1.3+"vh"};
       }
       @media only screen and (max-width: 499px) and (min-width: 0px){
       display: flex;
       flex-direction: column;
       height: ${props.altura/1.5+"vh"};
       }
       //-----------------------------------------------------------------//
       .box1{
        width: 60%;
        height: ${props.altura+"vh"};
        //-----------------------------------------------------------------//
       @media only screen and (max-width: 1500px) and (min-width: 0px){
         width: 100%;
       }
       //-----------------------------------------------------------------//
       }
       .box2{
        width: 40%;
        height: ${props.altura+"vh"};
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        //-----------------------------------------------------------------//
       @media only screen and (max-width: 1500px) and (min-width: 0px){
         display:none;
         
       }
       //-----------------------------------------------------------------//
       
       }
       .tituloBox{
        display: flex;
        flex-direction: row;
        align-items: center;
        color: ${cor.branca1};
        background-color: ${cor.vermelho1};
        border-top-left-radius: 5px;
        height: ${props.altura/3+"vh"};
      //-----------------------------------------------------------------//
       @media only screen and (max-width: 1500px) and (min-width: 900px){
         border-top-right-radius: 5px;
         height: ${props.altura/3.4+"vh"};
       }
       @media only screen and (max-width: 899px) and (min-width: 500px){
         border-top-right-radius: 5px;
         height: ${props.altura/3.6+"vh"};
       }
       @media only screen and (max-width: 499px) and (min-width: 0px){
         border-top-right-radius: 5px;
         height: ${props.altura/3.8+"vh"};
       }
       //-----------------------------------------------------------------//
       }

       .numero{
        padding-left: 0.4vw;
        padding-right:0.6vw;
        font-size: 4vw;
        color: ${cor.branca2};
        text-shadow: ${cor.textoShadow};
      //-----------------------------------------------------------------//
       @media only screen and (max-width: 1500px) and (min-width: 900px){
         font-size: 5vw;
       }
       @media only screen and (max-width: 899px) and (min-width: 500px){
       font-size: 5.4vw;
       }
       @media only screen and (max-width: 499px) and (min-width: 0px){
       font-size: 5.8vw;
       }
       //-----------------------------------------------------------------//

       }
       .titulo{
          font-size: 1.3vw;
          text-shadow: ${cor.textoShadow};
      //-----------------------------------------------------------------//
       @media only screen and (max-width: 1500px) and (min-width: 900px){
       font-size: 2vw;
       }
       @media only screen and (max-width: 899px) and (min-width: 500px){
       font-size: 2.4vw;
       }
       @media only screen and (max-width: 499px) and (min-width: 0px){
       font-size: 2.8vw;
       }
       //-----------------------------------------------------------------//
       }
       .lista{
        font-size: 0.6vw;
        color: ${cor.azul1};
        font-weight: bold;
        margin: 0.5vw;
       //-----------------------------------------------------------------//
       @media only screen and (max-width: 1500px) and (min-width: 900px){
       font-size: 0.7vw;
       }
       @media only screen and (max-width: 899px) and (min-width: 500px){
       font-size: 1vw;
       }
       @media only screen and (max-width: 499px) and (min-width: 0px){
       font-size: 1.2vw;
       }
       
       //-----------------------------------------------------------------//
       }
       .item{
         padding-left: 5px;
         padding-bottom: 2px;
         padding-top: 2px;
         border-left: ${cor.vermelho1} solid  5px;
         border-bottom: ${cor.vermelho1} solid  1px;
         margin-bottom: 2px;
         margin-top: 2px;
      //-----------------------------------------------------------------//
       @media only screen and (max-width: 1500px) and (min-width: 0px){
         
       }
       //-----------------------------------------------------------------//
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
                    
                    {lista.map((item)=><div className="item">{item}</div>)}
                   
               </div>
            </div>
            <img src={url} className="box2"/>
              
           
        </ContCad>
    )
}