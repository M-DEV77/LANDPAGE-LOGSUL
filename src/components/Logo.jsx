import styled from "styled-components"
import logo from "../assets/img/logo.svg";
import cor from "./Cores";


export default function Logo(props){
    const ContLogo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    left: 5vw;
    @media only screen and (max-width: 500px) and (min-width: 0px){ 
        height:10vw; 
        
    }
    
      .nomeEmpresa{
        font-size:1.3vw;
        font-family: Arial black;
        position: relative;
        color: ${cor.vermelho1};
        text-shadow: ${cor.textoShadow};
        left: 1vw;
        @media only screen and (max-width: 500px) and (min-width: 0px){ 
          font-size:4vw;
       
       }
      }
      img{
      height:2vw; 

      filter: ${cor.filterShadow1};
          
          @media only screen and (max-width: 500px) and (min-width: 0px){ 
            height:10vw; 
           
          
          }
      }
    
    
    `
    return(<>
    <ContLogo>
        <img src={logo} alt="" />
        <div className="nomeEmpresa">
            {props.nomeEmpresa}
        </div> 
        
    </ContLogo>

    </>)
}