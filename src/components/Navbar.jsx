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
   img{
    height:3vh;
    margin-left: 2vw;
   }
   .menu{
    margin-left: 2vw;
    display: flex;
    flex-direction: row;
    align-items: center;
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
    </ContainerNav>
            )
}
