import React from "react";
import { useNavigate } from "react-router-dom";
import DataDay from "../DataTreino/DataDay";
import "./home.scss";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="container">
      <h1>BORA TREINAR</h1>

      {DataDay.map((item, index) => (
        <div
          key={index}
          className="card-dia"
          style={{ backgroundImage: `url(${item.imagem})` }}
          onClick={() => navigate(`/treino/${item.dia.toLowerCase()}`)}
        >
          <div className="overlay">
            <h2>{item.dia}</h2>
          </div>
        </div>
      ))}
    </main>
  );
}
