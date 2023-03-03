import styled from "styled-components";
import cor from '../components/Cores';
import mapa1 from '../assets/img/mapa.jpg';
import cuitiba from '../assets/img/ico/seta curitiba.svg';
import floripa from '../assets/img/ico/seta floripa.svg';
import porto from '../assets/img/ico/porto alegre.svg';
import airPlane from '../assets/img/ico/aviao.svg';
import logsul from '../assets/img/ico/logsul.svg';
import { BsFillSignpost2Fill } from "react-icons/bs";
import { FaPeopleCarry,FaRegMap } from "react-icons/fa";
import { 
   GiFishingBoat,
   GiCommercialAirplane,
   GiBarrier, 
} from "react-icons/gi";

export default function Local(props){
    const Mapa = styled.div`
    background-color: ${cor.corMar};
    display: flex;
    flex-direction: row;
    height: 80vh;
    @media only screen and (max-width: 1000px) and (min-width: 0px){ 
    flex-direction: column;       
      
          
   }
     img{
        width: 60vw;
        @media only screen and (max-width: 1000px) and (min-width: 0px){ 
        flex-direction: column;       
        width: 100vw;
          
        }
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
      margin-top: 15vh;
      display: flex;
      flex-direction:column;
     }
     .localBox4{
      display: flex;
      flex-direction:row;
      align-items: center;
     
     }
     .localIco{
      font-size: 3vw;
      color: ${cor.vermelho1};
      filter: ${cor.filterShadow1};
      
     }
     .localText{
      margin-left: 2vw;
      font-size: 1.3vw;
      color: ${cor.azul1};
     }
     .ico{
        position: absolute;
      } 
      .seta{
        width: 7vw;
      }
      .logsul{
        width: 10vw;
        left: 1vw;
        top:55vh;
        animation: log 4s infinite;
        @keyframes log {
            0%{top:54vh;};
            50%{top:55vh;};
            100%{top:54vh;};
        }
        filter: ${cor.filterShadow};
     } 
     .curitiba{
        left: 20vw;
        animation: curitiba 3s infinite;
        @keyframes curitiba {
            0%{top:12vh;};
            50%{top: 12.5vh;};
            100%{top: 12vh;};
        }
        filter: ${cor.filterShadow};
     }
     .floripa{
        left: 30vw;
        
        animation: floripa 2s infinite;
        @keyframes floripa {
            0%{top:72vh;};
            50%{top: 70vh;};
            100%{top: 72vh;};
        }
        filter: ${cor.filterShadow};
     }

     .porto{
        left: 3vw;
        
        animation: porto 1s infinite;
        @keyframes porto {
            0%{top:73vh;};
            50%{top: 74vh;};
            100%{top: 73vh;};
        }
  
        filter: ${cor.filterShadow};
     }
     .airPlane{
        left: 36vw;
        top: 27vh;
        animation: airplane 4s ;
        @keyframes airplane{
            0%{
               top:80vh;
               left: -20vw;
            };
            
            100%{
               top: 27vh;
               left: 36vw;
            };
        }
        filter: ${cor.filterShadow};
     }
     .mapText{
      position: absolute;
      
      font-weight: bold;
      font-family: Arial black;
      text-shadow: ${cor.textoShadow};
     }
     .itajai{
      left: 45vw;
      top: 40vh;
      font-size: 2vw;
      color: ${cor.azul1};
     }
     
     .sc-486{
      left: 10vw;
      top: 70vh;
      font-size: 1vw;
      transform: rotate(-18deg);
      color: ${cor.azul1};
     }
     .br-101{
      left: 20vw;
      top: 40vh;
      font-size: 1vw;
      transform: rotate(67deg);
      color: ${cor.vermelho1};
     }
   
    `
    return(<>
    <title>LOGSUL LOCALIZAÇÃO</title>
    
    <Mapa>
      <div className="itajai mapText">ITAJAÍ</div>
      <div className="sc-486 mapText">SC-486</div>
      <div className="br-101 mapText">BR-101</div>
      <img src={logsul} alt="" className="logsul ico" />
      <img src={porto} alt="" className="porto ico seta" />
      <img src={airPlane} alt="" className="airPlane ico seta" />
     <img src={cuitiba} alt="" className="curitiba ico seta" />
     <img src={floripa} alt="" className="floripa ico seta" />
     <img src={mapa1} alt="" />
     <div className="container">
        <div className="localTitle">
        LOCALIZAÇÃO
        </div>
        <div className="localContent">
          <div className="localBox4">
             <BsFillSignpost2Fill className="localIco" /><div className="localText">06 km – BR 101 (Rod. Governador Mario Covas)</div>
          </div>
          <div className="localBox4">
             <GiFishingBoat className="localIco" /><div className="localText">12 km – Porto de Itajaí</div>
          </div>
          <div className="localBox4">
             <GiCommercialAirplane className="localIco" /><div className="localText">27 km – Aeroporto Internacional de Navegantes</div>
          </div>
          <div className="localBox4">
             <GiBarrier className="localIco" /><div className="localText">Distribuição para o Porto de Itajaí sem pedágio</div>
          </div>
          <div className="localBox4">
             <FaPeopleCarry className="localIco" /><div className="localText">Mão de obra abundante</div>
          </div>
          <div className="localBox4">
             <FaRegMap className="localIco" /><div className="localText">Região portuária e industrial consolidada</div>
          </div>
        </div>
     </div>
    </Mapa>
   
    
    </>)
}