import React, { useState } from "react";
import "./Body.css";

function Body() {
  const [inputValor, setinputValor] = useState("");
  const [saldo, setSaldo] = useState(0);
  const [inputTransacao, setInputTransacao] = useState("");
  const [movimentacoes, setMovimentacoes] = useState([]);

  function creditar() {
    if (!inputValor || !inputTransacao) return;

    const transacao = {
      id: Date.now(),
      movimentacao: inputTransacao,
      valor: Number(inputValor),
      tipo: "crédito",
    };

    setMovimentacoes([transacao, ...movimentacoes]);
    setSaldo(saldo + Number(inputValor));
    limparCampos();
  }

  function debitar() {
    if (!inputValor || !inputTransacao) return;

    const transacao = {
      id: Date.now(),
      movimentacao: inputTransacao,
      valor: Number(inputValor),
      tipo: "débito",
    };

    setMovimentacoes([transacao, ...movimentacoes]);
    setSaldo(saldo - Number(inputValor));
    limparCampos();
  }

  function limparCampos() {
    setinputValor("");
    setInputTransacao("");
  }

  return (
    <div className="container-body">
      <h1>Controlinho Financeiro</h1>
      <h3>Saldo: R$ {saldo.toFixed(2)}</h3>

      <input
        type="text"
        placeholder="Descrição da transação"
        value={inputTransacao}
        onChange={(e) => setInputTransacao(e.target.value)}
      />
      <br />

      <input
        type="number"
        placeholder="Valor"
        value={inputValor}
        onChange={(e) => setinputValor(e.target.value)}
      />
      <br />

      <div>
        <button onClick={debitar} className="botao-debito">
          Débito
        </button>
        <button onClick={creditar} className="botao-credito">
          Crédito
        </button>
      </div>

      <div className="movimentacoes">
        <h3>Movimentações:</h3>
        {movimentacoes.map((item) => (
          <div
            key={item.id}
            className={item.tipo === "crédito" ? "credito" : "debito"}
          >
            {item.movimentacao} - R$ {item.valor.toFixed(2)} ({item.tipo})
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
