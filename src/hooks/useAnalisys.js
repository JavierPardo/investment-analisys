import { useState } from "react";

export function useAnalisys() {
  const [operationType, setOperationType] = useState(null);
  const [parameters, setParameters] = useState({
    riskAmount:0, leverage:1,
    asset:'USDT', pair:'ADA',
    stopLoss:0, takeProfit:0,
    entryPrice:0
  });
  const operationTypes = ["SHORT", "LONG"];
  const handleParameterChange=(name, newValue)=>{
setParameters({...parameters,[name]:newValue});
  }
  const stopLossPriceFactor=Number(parameters.riskAmount)*Number(parameters.stopLoss)/100;
  const stopLossPrice=Number(parameters.entryPrice)+(Number(stopLossPriceFactor)*(operationType==="LONG"?-1:1));
  const takeProfitPriceFactor=Number(parameters.riskAmount)*Number(parameters.takeProfit)/100;
  const takeProfitPrice=Number(parameters.entryPrice)+(Number(takeProfitPriceFactor)*(operationType==="LONG"?-1:1));
  const clearancePrice=0;
  return { operationTypes, operationType, onOperationTypeChange:setOperationType,
  parameters, onParameterChanged:handleParameterChange, stopLossPrice, takeProfitPrice };
}
