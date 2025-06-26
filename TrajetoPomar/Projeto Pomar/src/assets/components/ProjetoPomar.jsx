import React, { useState } from "react";
import "./ProjetoPomar.css";

function ProjetoPomar() {
  const [inputMaca, setInputMaca] = useState("");
  const [inputLaranja, setInputLaranja] = useState("");
  const [inputBergamota, setInputBergamota] = useState("");
  const [inputBanana, setInputBanana] = useState("");
  const [inputPera, setInputPera] = useState("");

  const [totalMaca, setTotalMaca] = useState(0);
  const [totalLaranja, setTotalLaranja] = useState(0);
  const [totalBergamota, setTotalBergamota] = useState(0);
  const [totalBanana, setTotalBanana] = useState(0);
  const [totalPera, setTotalPera] = useState(0);

  const total = (
    totalMaca +
    totalLaranja +
    totalBergamota +
    totalPera +
    totalBanana
  ).toFixed(2);

  return (
    <div className="containerPrincipal">
      <h1>Trajeto Pomar v0</h1>

      {/* Maçã */}
      <div>
        <h3>Maçã - R$1,50</h3>
        <input
          type="number"
          value={inputMaca}
          onChange={(e) => setInputMaca(e.target.value)}
        />
        <button onClick={() => setTotalMaca(1.5 * Number(inputMaca))}>
          Comprar
        </button>
      </div>

      {/* Laranja */}
      <div>
        <h3>Laranja - R$2,00</h3>
        <input
          type="number"
          value={inputLaranja}
          onChange={(e) => setInputLaranja(e.target.value)}
        />
        <button onClick={() => setTotalLaranja(2 * Number(inputLaranja))}>
          Comprar
        </button>
      </div>

      {/* Bergamota */}
      <div>
        <h3>Bergamota - R$1,00</h3>
        <input
          type="number"
          value={inputBergamota}
          onChange={(e) => setInputBergamota(e.target.value)}
        />
        <button onClick={() => setTotalBergamota(1 * Number(inputBergamota))}>
          Comprar
        </button>
      </div>

      {/* Banana */}
      <div>
        <h3>Banana - R$1,20</h3>
        <input
          type="number"
          value={inputBanana}
          onChange={(e) => setInputBanana(e.target.value)}
        />
        <button onClick={() => setTotalBanana(1.2 * Number(inputBanana))}>
          Comprar
        </button>
      </div>

      {/* Pera */}
      <div>
        <h3>Pera - R$0,50</h3>
        <input
          type="number"
          value={inputPera}
          onChange={(e) => setInputPera(e.target.value)}
        />
        <button onClick={() => setTotalPera(0.5 * Number(inputPera))}>
          Comprar
        </button>
      </div>

      {/* Resumo da Compra */}
      <div className="resumo">
        {totalMaca > 0 && (
          <div>
            {inputMaca}x Maçã: R$ {totalMaca.toFixed(2)}
          </div>
        )}
        {totalLaranja > 0 && (
          <div>
            {inputLaranja}x Laranja: R$ {totalLaranja.toFixed(2)}
          </div>
        )}
        {totalBergamota > 0 && (
          <div>
            {inputBergamota}x Bergamota: R$ {totalBergamota.toFixed(2)}
          </div>
        )}
        {totalBanana > 0 && (
          <div>
            {inputBanana}x Banana: R$ {totalBanana.toFixed(2)}
          </div>
        )}
        {totalPera > 0 && (
          <div>
            {inputPera}x Pera: R$ {totalPera.toFixed(2)}
          </div>
        )}
      </div>

      {/* Total Geral */}
      <div>
        <h2>Total: R$ {total}</h2>
      </div>
    </div>
  );
}

export default ProjetoPomar;
