import styled from "styled-components";
import {Link} from 'react-router-dom';
import Logo from '../components/Logo';
import Cor from "./Cores";
export default function NavBar(){
const ContainerNav = styled.nav`
 display: flex;
 flex-direction:row;
 align-items: center;
 height: 10vh;
 background-color: ${Cor.branca1};
 box-shadow: ${Cor.boxShadow2};
 @media only screen and (max-width: 500px) and (min-width: 0px){ 
       display: flex;
       justify-content:space-between;
       
       }
   .btnCell{
     display: none;

      @media only screen and (max-width: 500px) and (min-width: 0px){ 
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       height: 7vh;
       width: 13vw;
       margin-right: 3vw;
       background-color: ${Cor.branca1};
       border-style:inset;
       border: 0.3px ${Cor.vermelho1} solid;
       border-radius: 3px;
       
      }

   }
   .menu{
    margin-left: 2vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media only screen and (max-width: 500px) and (min-width: 0px){ 
       display: none;
       flex-direction: column;
       
       }
   }
  a{
    font-size: 1vw;
    text-decoration: none;
    padding: 0.5vw;
    color: ${Cor.azul1};
    font-weight: 600;
  }
  a:hover{
    color: ${Cor.vermelho1};
    text-shadow: ${Cor.vermelho1} 0px 0px 18px;
    transition:  0.5s;

  }
  .vert1{
    height: 4px;
    background-color: ${Cor.vermelho1};
    width: 10vw;
  }
  .vt1{
    margin-bottom:1vh;
  }
  .vt2{
    
  }
  .vt3{
    margin-top:1vh;
  }

`

    return(
    <ContainerNav>
        <Logo nomeEmpresa="PROJETO LOGSUL"/>
        <div className="menu">
            <Link id="link1" to="/"    >PERSPECTIVAS</Link>
            <Link id="link2" to="/0012">POR QUE ITAJAÍ</Link>
            <Link id="link3" to="/0013">LOCALIZAÇÃO</Link>
            <Link id="link4" to="/0014">ACESSO</Link>
            <Link id="link5" to="/0015">IMPLANTAÇÃO</Link>
            <Link id="link6" to="/0016">INFORMAÇÕES</Link>
            <Link id="link7" to="/0017">CARACTERÍSTICAS</Link>
            <Link id="link8" to="/0018">CONTATO</Link>
        </div> 
        <button className="btnCell">
        <div className="vert1 vt1"></div>
        <div className="vert1  vt2"></div>
        <div className="vert1  vt3"></div>
        </button> 
    </ContainerNav>
            )
}
