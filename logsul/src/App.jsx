import { Outlet } from "react-router-dom"
import NavBar from "./components/Navbar"
import styled from "styled-components";
export default function App(){
  const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: aqua;
  height: 80vh;
  `
  return (
    <>
     <NavBar />
     <Container>
     <Outlet/>
     </Container>
     <footer>
      footer
     </footer>
     </>
  )
}


