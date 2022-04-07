import '../App.css';
import Card  from './Card';
import Data from './Data';
import { useState } from 'react';


function TaskProps() {
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
        <h1>Haaaayy</h1>  
       <Card name={name} />

       <button onClick={sapaFredy}>Sapa Fredy</button>&nbsp;
       <button onClick={pulangFredy}>Suruh pulang</button> 

      </header>
    </div>
  );
}

export default TaskProps;
