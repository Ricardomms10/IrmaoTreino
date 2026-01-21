import SupinoMaquinaHalteresImage from '../assets/supino_reto.gif';
import SupinoInclinadoMaquinaImage from '../assets/supino-inclinado-com-halteres.gif';
import PeckDeck from '../assets/crucifixo.gif';
import dessenvovimentoOmbro from '../assets/desenvolvimento.gif';
import elevacaoLateralImage from '../assets/elevacao_lateral.gif';
import tricepsPulley from '../assets/triceps_polia.gif';
import tricpesCorda from '../assets/tricepsTesta.gif';
import cardio from '../assets/cardio.gif';
import puxadaFrenteImage from '../assets/puxada_fixa.gif';
import remadaBaixaImage from '../assets/remada_baixa.gif';
import remadaMaquinaImage from '../assets/remada_curvada.gif';
import pullover from '../assets/pullover.gif';
import roscadireta from '../assets/rosca_direta.gif';
import roscaAlternada from '../assets/Rosca_Scott.gif';
import abdominal from '../assets/abdominal.gif';
import legpress from '../assets/leg_press.gif';
import mesaflexora from '../assets/mesa_flexora.gif';
import cadeiraextensora from '../assets/cadeira_extensora.webp';
import agachamento from '../assets/agachamento.webp';
import stiff from '../assets/stiff.gif';
import Panturrilha from '../assets/panturrilha.gif';
import descanso from '../assets/descansinho.webp';
import elevacaoFrontal from '../assets/elevacao_frontal.gif';



const DataTreinos = {
  segunda: {
    Peito: [
      { nome: "Supino reto máquina ou halteres", image: SupinoMaquinaHalteresImage },
      { nome: "Supino Inclinado ",image: SupinoInclinadoMaquinaImage },
      { nome: "Peck deck / Crucifixo máquina", image: PeckDeck }
    ],
    Ombro: [
      { nome: "Desenvolvimento halteres", image: dessenvovimentoOmbro },
      { nome: "Elevação lateral" ,image: elevacaoLateralImage }
    ],
    Tríceps: [
      { nome: "Tríceps pulley" , image: tricepsPulley },
      { nome: "Tríceps testa", image: tricpesCorda }
    ],
    Cardio: [
      { nome: "Caminhada ou bicicleta — 20 a 30 min" , image: cardio }
    ]
  },

  terca: {
    Costas: [
      { nome: "Puxada frente", image: puxadaFrenteImage },
      { nome: "Remada baixa", image: remadaBaixaImage },
      { nome: "Remada máquina" , image: remadaMaquinaImage },
      { nome: "Pullover máquina" , image: pullover }
    ],
    Bíceps: [
      { nome: "Rosca direta" , image: roscadireta },
      { nome: "Rosca alternada" , image: roscaAlternada }
    ],
    Abdômen: [
      { nome: "Abdominal máquina ou no banco" , image: abdominal }
    ],
    Cardio: [
      { nome: "Elíptico ou esteira — 20 a 30 min" , image: cardio }
    ]
  },

  quarta: {
    Pernas: [
      { nome: "Leg press", image: legpress },
      { nome: "Mesa flexora" , image: mesaflexora },
      { nome: "Cadeira extensora" , image: cadeiraextensora },
      { nome: "Agachamento no banco ou Smith" , image: agachamento },
      { nome: "Stiff" , image: stiff }
    ],
    Panturrilha: [
      { nome: "Panturrilha sentado ou no leg press" , image: Panturrilha }
    ],
    Cardio: [
      { nome: "Bicicleta ergométrica — 20 a 30 min" , image: cardio }
    ]
  },

  quinta: {
    Descanso: [
      { nome: "Dia de descanso (opcional alongamento ou caminhada leve)" , image: descanso }
    ]
  },

  sexta: {
    Peito: [
      { nome: "Supino reto " , image: SupinoMaquinaHalteresImage },
      { nome: "Crucifixo " , image: PeckDeck }
    ],
    Ombro: [
      { nome: "Desenvolvimento " , image: dessenvovimentoOmbro },
      { nome: "Elevação lateral" , image: elevacaoLateralImage },
      { nome: "Elevação frontal" , image: elevacaoFrontal }
    ],
    Tríceps: [
      { nome: "Tríceps corda" , image: tricpesCorda }
    ],
    Cardio: [
      { nome: "Cardio — 25 a 35 min" , image: cardio }
    ]
  },

  sabado: {
    Costas: [
      { nome: "Puxada frente", image: puxadaFrenteImage },
      { nome: "Remada baixa", image: remadaBaixaImage },
      { nome: "Remada máquina", image: remadaMaquinaImage }
    ],
    Ombro: [
      { nome: "Elevação lateral", image: elevacaoLateralImage }
    ],
    Tríceps: [
      { nome: "Tríceps pulley" , image: tricepsPulley }
    ],
    Abdômen: [
      { nome: "Abdominal máquina ou prancha" , image: abdominal }
    ],
    Cardio: [
      { nome: "Cardio leve — 20 a 30 min" , image: cardio }
    ]
  },

  domingo: {
    Descanso: [
      { nome: "Descanso total" }
    ]
  }
};

export default DataTreinos;
