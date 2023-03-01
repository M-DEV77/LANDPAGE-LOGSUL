import styled from "styled-components";
import cor from "./Cores";
export default function Footer(){
    const FooterSt = styled.footer`
    height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: ${cor.branca1};
    background-color:${cor.azul2};
    box-shadow:${cor.boxShadow3};
    ` 
    return(
<FooterSt>
Por: Marcelo Olimpio
</FooterSt>

    )
}