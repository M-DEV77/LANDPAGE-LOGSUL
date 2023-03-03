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
    flex-direction: column;
    justify-content: space-around;
       .row{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
       }
       .boxPorque1{
        font-size: 2vw;
        font-weight: bold;
        padding: 0.5vw;
        background-color: ${cor.vermelho1};
        color: ${cor.branca1};
        text-shadow: ${cor.textoShadow};
       }
    ` 
    return(<>
    <title>LOGSUL POR QUE ITAJAÍ</title>
    <ContPorque>
    <div className="boxPorque1 row">
    POR QUE ITAJAÍ? 
    </div>
    <div className="boxPorque2 row">
    <Card 
    urlCard={fotoCard1}
    numero={1} 
    titulo="Localização Estratégica" 
    listas={[
        '12 km do Porto de Itajaí;',
        '100 km Florianópolis;',
        '27 km do Aeroporto Internacional de Navegantes.'
]}
    largura={32} 
    altura={32}/>

    <Card 
    urlCard={fotoCard2}
    numero={2} 
    titulo="Município" 
    listas={[
        'Alta qualidade de vida;',
        'Importante Município para o Estado;',
        'Estado entre os melhores índices de ID-H do Brasil;',
        'Economia em Crescimento;',
        '6° município mais populoso do Estado;'
    ]}
    largura={32} 
    altura={32}/>

    <Card 
    urlCard={fotoCard3}
    numero={3} 
    titulo="Logística Eficiente" 
    listas={[
        'O Porto de Itajaí é responsável pela maior  parte das exportações da Região Sul do Brasil;',
        '2° Porto no ranking de movimentações de  contêiner, somente atrás do Porto de Santos;',
        'Fácil acesso ao Mercosul;',
        'Cortada pela BR – 101, principal via de  entrada ao Estado de SC;'
    ]}
    largura={32} 
    altura={32}/>
    </div>


    <div className="boxPorque3 row">
    <Card 
    urlCard={fotoCard3}
    numero={3} 
    titulo="Logística Eficiente" 
    listas={[
        'O Porto de Itajaí é responsável pela maior  parte das exportações da Região Sul do Brasil;',
        '2° Porto no ranking de movimentações de  contêiner, somente atrás do Porto de Santos;',
        'Fácil acesso ao Mercosul;',
        'Cortada pela BR – 101, principal via de  entrada ao Estado de SC;'
    ]}
    largura={32} 
    altura={32}/>

    <Card 
    urlCard={fotoCard3}
    numero={3} 
    titulo="Logística Eficiente" 
    listas={[
        'O Porto de Itajaí é responsável pela maior  parte das exportações da Região Sul do Brasil;',
        '2° Porto no ranking de movimentações de  contêiner, somente atrás do Porto de Santos;',
        'Fácil acesso ao Mercosul;',
        'Cortada pela BR – 101, principal via de  entrada ao Estado de SC;'
    ]}
    largura={32} 
    altura={32}/>

    </div>
    </ContPorque>
    </>)
}