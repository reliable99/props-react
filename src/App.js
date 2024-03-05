import Greet from "./Greet";
import { useState } from "react";
// import Test from "./Test";
function App() {
  const [data, setData] = useState("tunde")
  const updateData = () => {
   setData("kunle")
  }
  return (
    <div className="App">
      <Greet name='Adekunle' Heroname='superman'>
          <p>This is a children props</p>
         </Greet> 
      <Greet name='Bdullah' Heroname='Batman'>
        <button>Action</button> 
      </Greet>
      <Greet name='Kola' Heroname='coolman'/>
    <h1>{data}</h1>
    <button onClick={updateData}>Update Data</button>
    </div>
  );
}

export default App;
