import { useEffect } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import fotoCard1 from '../assets/img/foto1.jpg'
import fotoCard2 from '../assets/img/foto2.jpg'
import fotoCard3 from '../assets/img/foto3.jpg'
import cor from "../components/Cores"


export default function Porque(){
    const arrCard1 = ["teste1","teste2","teste3","teste4","teste5"]
    const ContPorque = styled.div`
    display: flex;
    justify-content: space-around;

    ` 
    return(<>
    <title>LOGSUL POR QUE ITAJAÍ</title>
    POR QUE ITAJAÍ 
    <ContPorque>
    
    <Card 
    urlCard={fotoCard1}
    numero={1} 
    titulo="Localização Estratégica" 
    listas={[
        '12 km do Porto de Itajaí;',
        '100 km Florianópolis;',
        '27 km do Aeroporto Internacional de Navegantes.'
]}
    largura={25} 
    altura={30}/>

    <Card 
    urlCard={fotoCard2}
    numero={2} 
    titulo="Município" 
    listas={arrCard1}
    largura={25} 
    altura={30}/>

    <Card 
    urlCard={fotoCard3}
    numero={3} 
    titulo="Logística Eficiente" 
    listas={arrCard1}
    largura={25} 
    altura={30}/>
    </ContPorque>
    </>)
}