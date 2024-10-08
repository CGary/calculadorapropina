import React, { useState } from "react";
import { History } from "./history";


const TipCalculator: React.FC = () => {
  const [billAmount, setBillAmount] = useState<number>(0);
  const [tipPercentage, setTipPercentage] = useState<number>(0);
  const [tipAmount, setTipAmount] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [historyState,setHistoryState]=useState<{
    bill: number,
    tipPercentage: number,
    tip: number,
    total: number
  }[]>([])


  const calculateTip = () => {
    const tip = (billAmount * tipPercentage) / 100;
    setTipAmount(tip);
    setTotalAmount(billAmount + tip);
    
    const newHistory = historyState;
    if (historyState.length > 10) newHistory.shift();
    newHistory.push({
      bill: billAmount,
      tipPercentage: tipPercentage,
      tip: tip,
      total: totalAmount 
    })
    setHistoryState(newHistory)
    
  };

  const deleteAllHistory = () => {
    const confirmation=window.confirm("Estas seguro que quieres eliminar el historial?")
    if(confirmation){
      setHistoryState([]) 
      setBillAmount(0)
      setTipPercentage(0)
      setTipAmount(0)
      setTotalAmount(0)
    }
}

  return (
    <div>
      <h1>Calculadora de Propinas</h1>
      <div>
        <label>
          Monto de la factura:
          <input
            type="number"
            value={billAmount}
            onChange={(e) => setBillAmount(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Porcentaje de propina:
          <input
            type="number"
            value={tipPercentage}
            onChange={(e) => setTipPercentage(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <button onClick={calculateTip}>Calcular Propina</button>
      <div>
        <h2>Monto de la Propina: ${tipAmount.toFixed(2)}</h2>
        <h2>Total a Pagar: ${totalAmount.toFixed(2)}</h2>
      </div>
      <div>
        <button onClick={deleteAllHistory}>Borrar todo el historial</button>
      </div>
      <History  historyState={historyState}/>
    </div>
  );
};

export default TipCalculator;
