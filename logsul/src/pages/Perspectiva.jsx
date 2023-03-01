import styled from 'styled-components';
import Slider from '../components/Slider';


export default function Perspectiva(){
    const contPersp = styled.div`
    
    `
    return(
    <>
    <title>LOGSUL PERSPECTIVAS</title>
     <Slider 
      nome=" PERSPECTIVAS"
      quant={10}
      urls="./src/assets/img/foto"
     />     
    </>
    )
}