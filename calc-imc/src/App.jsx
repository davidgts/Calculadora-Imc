import './app.css'
import { useState } from 'react';
function App() {
  const [peso,usePeso] = useState(0);
  const [altura,useAltura] = useState(0);
  const [mensagem,useMensagem] = useState('')
  

  function handleIMC() {
    const alt = altura / 100;
    const CALC = peso / (alt * alt);

    if (CALC < 18.6){
      AddMensagem(`Você está abaixo do peso! IMC: ${CALC.toFixed(2)}`)
    }else if(CALC >=18.6 && CALC < 24.9){
      AddMensagem(`Você está no peso ideal! IMC: ${CALC.toFixed(2)}`)
    }else if(CALC >=24.9 && CALC < 34.9){
      AddMensagem(`Você está com sobrepeso! IMC: ${CALC.toFixed(2)}`)
    }else if(CALC >= 34.9){
      AddMensagem(`Você está OBESO! IMC: ${CALC.toFixed(2)}`)
    }    
  }

  function AddMensagem(value) {
    useMensagem(value)
  }

  function AddPeso(value) {
    usePeso(value)
  }

  function AddAltura(value) {
    useAltura(value)
  }

  return (
    <div className="App">
        <h1>Calculadora IMC</h1>
        <span>Vamos calcular seu IMC</span>
        <div className="input-area">
          <input type="text" value={peso} 
          onChange={(e)=>{AddPeso(e.target.value)}}
          placeholder="Informe o peso (Kg) Ex:90"/>
          <input type="text"
          value={altura} 
          onChange={(e)=>{AddAltura(e.target.value)}}          
          placeholder="Informe a altura (Cm) Ex:185"/>
          <button onClick={()=>{handleIMC()}}>Calcular</button>
        </div>
       
        <h2>{mensagem}</h2>
    </div>
  );
}

export default App;
