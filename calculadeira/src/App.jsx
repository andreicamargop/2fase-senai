import React, { useState } from 'react';
import './Calculadora.css';

function Calculadora() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = (operador) => {
    const num1 = parseFloat(valor1);
    const num2 = parseFloat(valor2);

    if (isNaN(num1) || isNaN(num2)) {
      setResultado('Insira dois números válidos');
      return;
    }

    let res;
    switch (operador) {
      case '+':
        res = num1 + num2;
        break;
      case '-':
        res = num1 - num2;
        break;
      case '*':
        res = num1 * num2;
        break;
      case '/':
        res = num2 !== 0 ? num1 / num2 : 'Erro: divisão por zero';
        break;
      default:
        res = '';
    }

    setResultado(res);
  };

  return (
    <div className="calc-container">
      <h2>Calculadeira</h2>

      <div className="inputs">
        <input
          type="number"
          value={valor1}
          onChange={(e) => setValor1(e.target.value)}
        />
        <input
          type="number"
          value={valor2}
          onChange={(e) => setValor2(e.target.value)}
        />
      </div>

      <div className="buttons-grid">
        <button onClick={() => calcular('+')}>+</button>
        <button onClick={() => calcular('-')}>-</button>
        <button onClick={() => calcular('*')}>*</button>
        <button onClick={() => calcular('/')}>/</button>
      </div>

      <div className="resultado">
        {resultado}
      </div>
    </div>
  );
}

export default Calculadora;
