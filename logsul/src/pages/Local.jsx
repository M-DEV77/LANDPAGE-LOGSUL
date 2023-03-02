import styled from "styled-components";
import cor from '../components/Cores';
import mapa1 from '../assets/img/mapa.jpg';
import cuitiba from '../assets/img/ico/seta curitiba.svg';
import floripa from '../assets/img/ico/seta floripa.svg'
export default function Local(){
    const Mapa = styled.div`
    background-color: ${cor.corMar};
    display: flex;
    flex-direction: row;
         height: 80vh;
     img{
        width: 60vw;
        
     }
     .container{
        display: flex;
        flex-direction:column;
        width: 40vw;
        height: 80vh;  
     }
     .localTitle{
        display: flex;
        flex-direction:row;
         align-items: center;
         justify-content: center;
         height: 5vh;
         font-size: 1vw;
         font-weight:bold;
         color: ${cor.azul1};
         text-shadow: ${cor.textoShadow};
     }
     .localContent{

     }
     .ico{
        position: absolute;
      } 
      .seta{
        width: 5vw;
      } 
     .curitiba{
        left: 20vw;
        animation: curitiba 1s infinite;
        @keyframes curitiba {
            0%{top:12vh;};
            50%{top: 12.5vh;};
            100%{top: 12vh;};
        }
        filter: ${cor.filterShadow};
     }
    `
    return(<>
    <title>LOGSUL LOCALIZAÇÃO</title>
    
    <Mapa>
     <img src={cuitiba} alt="" className="curitiba ico seta" />
     <img src={floripa} alt="" className="floripa ico seta" />
     <img src={mapa1} alt="" />
     <div className="container">
        <div className="localTitle">
        LOCALIZAÇÃO
        </div>
        <div className="localContent">

        </div>
     </div>
    </Mapa>
   
    
    </>)
}