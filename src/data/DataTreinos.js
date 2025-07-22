const DataTreinos = {
  segunda: {
    Peito: [
      { nome: "Supino reto com barra — 4x10-12", imagem: require("../assets/SupinoBarraReta.gif") },
      { nome: "Supino inclinado com halteres — 4x10-12", imagem: require("../assets/supino_reto.gif") },
      { nome: "Crucifixo com halteres — 3x12-15", imagem: require("../assets/crucifixo.gif") },
      { nome: "Crossover no cabo — 3x12-15", imagem: require("../assets/crossover.gif") }
    ],
    Tríceps: [
      { nome: "Tríceps na polia (pushdown) — 4x12-15", imagem: require("../assets/triceps_polia.gif") }
    ]
  },
  terca: {
    Quadríceps: [
      { nome: "Agachamento livre — 4x10-12", imagem: require("../assets/agachamento.webp") },
      { nome: "Leg press — 4x10-12", imagem: require("../assets/leg_press.gif") },
      { nome: "Cadeira extensora — 3x12-15", imagem: require("../assets/cadeira_extensora.webp") }
    ],
    Posterior: [
      { nome: "Stiff com barra ou halteres — 4x10-12", imagem: require("../assets/stiff.gif") },
      { nome: "Mesa flexora — 3x12-15", imagem: require("../assets/mesa_flexora.gif") }
    ],
    Panturrilha: [
      { nome: "Elevação de panturrilha em pé — 4x15-20", imagem: require("../assets/panturrilha.gif") }
    ],
    Glúteos: [
      { nome: "Glúteo no cabo (kickback) ou hip thrust — 4x12-15", imagem: require("../assets/gluteo.gif") }
    ]
  },

  quarta: {
    Costas: [
      { nome: "Puxador frente — 4x10-12", imagem: require("../assets/puxada_fixa.gif") },
      { nome: "Remada curvada com barra ou halteres — 4x10-12", imagem: require("../assets/remada_curvada.gif") },
      { nome: "Remada baixa na máquina ou cabo — 3x12-15", imagem: require("../assets/remada_baixa.gif") },
      { nome: "Pullover no cabo ou halteres — 3x12-15", imagem: require("../assets/pullover.gif") }
    ],
    Bíceps: [
      { nome: "Rosca direta com barra — 4x10-12", imagem: require("../assets/rosca_direta.gif") }
    ],
    Trapézio: [
      { nome: "Encolhimento de ombros com halteres — 4x12-15", imagem: require("../assets/encolhimento.gif") }
    ]
  },

  quinta: {
    Descanso: [
      { nome: "Dia de descanso", imagem: require("../assets/descansinho.webp") }
    ]
  },

  sexta: {
    Peito: [
      { nome: "Supino reto com barra ou halteres — 4x10-12", imagem: require("../assets/supino_reto.gif") }
    ],
    Ombro: [
      { nome: "Desenvolvimento com halteres ou barra — 4x10-12", imagem: require("../assets/desenvolvimento.gif") },
      { nome: "Elevação lateral — 4x12-15", imagem: require("../assets/elevacao_lateral.gif") },
      { nome: "Elevação frontal — 3x12-15", imagem: require("../assets/elevacao_frontal.gif") },
      { nome: "Elevação posterior no peck-deck ou com halteres — 3x12-15", imagem: require("../assets/elevacao_posterior.gif") }
    ],
    Trapézio: [
      { nome: "Encolhimento de ombros — 4x12-15", imagem: require("../assets/encolhimentoB.gif")}
    ]
  },

  sabado: {
    Bíceps: [
      { nome: "Rosca direta com barra — 4x10-12", imagem: require("../assets/rosca_direta.gif") },
      { nome: "Rosca martelo — 4x12-15", imagem: require("../assets/rosca_martelo.gif") },
      { nome: "Rosca Scott — 3x12-15", imagem: require("../assets/Rosca_Scott.gif") }
    ],
    Tríceps: [
      { nome: "Tríceps na polia (pushdown) — 4x12-15", imagem: require("../assets/triceps_polia.gif") },
      { nome: "Tríceps coice na polia — 4x10-12", imagem: require("../assets/coice_polia.gif") },
      { nome: "Tríceps unilateral na polia — 3x12-15", imagem: require("../assets/unilateral.gif") }

    ]
  },

  domingo: {
    Descanso: [
      { nome: "Dia de descanso", imagem: require("../assets/descansinho.webp") }
    ]
  }
};

export default DataTreinos;
