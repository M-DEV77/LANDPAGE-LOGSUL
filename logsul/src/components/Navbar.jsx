import styled from "styled-components";
import {Link} from 'react-router-dom';
import logo from '/logo.svg';
export default function NavBar(){
const ContainerNav = styled.nav`
 display: flex;
 flex-direction:row;
 align-items: center;
 height: 10vh;
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


  }

`

    return(
    <ContainerNav>
        <img src={logo} alt="Premoaço" />
        <div className="menu">
            <Link to="/"    >PERSPECTIVAS</Link>
            <Link to="/0012">POR QUE ITAJAÍ</Link>
            <Link to="/0013">LOCALIZAÇÃO</Link>
            <Link to="/0014">ACESSO</Link>
            <Link to="/0015">IMPLANTAÇÃO</Link>
            <Link to="/0016">INFORMAÇÕES</Link>
            <Link to="/0017">CARACTERÍSTICAS</Link>
            <Link to="/0018">CONTATO</Link>
        </div>  
    </ContainerNav>
            )
}
