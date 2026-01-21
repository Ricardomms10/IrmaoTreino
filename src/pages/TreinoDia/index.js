import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DataTreinos from "../../data/DataTreinos";
import "./treinonoDia.scss";

export default function TreinoDia() {
    const { dia } = useParams();
    const navigate = useNavigate();
    const treino = DataTreinos[dia];
    const [selectedExercicio, setSelectedExercicio] = useState(null);

    if (!treino) {
        return <h2>Treino não encontrado para "{dia}"</h2>;
    }

    return (
        <main className="treino-container">

            <h1>Treino de {dia.charAt(0).toUpperCase() + dia.slice(1)}</h1>

            {Object.keys(treino).map((grupo, idx) => (
                <section key={idx} className="grupo-muscular">
                    <h2>{grupo}</h2>
                    <ul>
                        {treino[grupo].map((ex, i) => (
                            <li
                                key={i}
                                onClick={() => setSelectedExercicio(ex)}
                                className="exercicio-item"
                            >
                                {ex.nome}
                            </li>
                        ))}
                    </ul>
                </section>
            ))}

            {selectedExercicio && (
                <div className="modal-overlay" onClick={() => setSelectedExercicio(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        {selectedExercicio.image && (
                            <img src={selectedExercicio.image} alt={selectedExercicio.nome} />
                        )}
                        <h3>{selectedExercicio.nome}</h3>
                        <button onClick={() => setSelectedExercicio(null)}>Fechar</button>
                    </div>
                </div>
            )}

            <button className="voltar-btn" onClick={() => navigate("/")}>
                ← Voltar
            </button>

        </main>
    );
}
