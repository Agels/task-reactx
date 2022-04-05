import logo from './logo.svg';
import './App.css';
import Card  from './component/Card';
import Data from './component/Data.js';
import { useState } from 'react';


function App() {
const [name, setName] = useState("");

const sapaFredy = () => {
  setName(Data[0].name);
}

const pulangFredy = () =>{
  setName()
}
  return (
    <div className="App">
      <header className="App-header">
        
       <Card name={name} />

       <button onClick={sapaFredy}>Sapa Fredy</button>&nbsp;
       <button onClick={pulangFredy}>Suruh pulang</button> 

      </header>
    </div>
  );
}

export default App;
