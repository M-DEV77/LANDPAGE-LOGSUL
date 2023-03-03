import { Outlet } from "react-router-dom"
import NavBar from "./components/Navbar"
import styled from "styled-components";
import Footer from './components/Footer';

export default function App(){
  const Container = styled.div`
  display:flex;
  flex-direction: column;
  width: 100vw;
  height: 80vh;
  `
  return (
    <>
     <NavBar />
     <Container>
     <Outlet/>
     </Container>
     <Footer/>
     </>
  )
}


