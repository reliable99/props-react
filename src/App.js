import Greet from "./Greet";
import Test from "./Test";
function App() {
  return (
    <div className="App">
      <Greet name='Adekunle' Heroname='superman'>
          <p>This is a children props</p>
         </Greet> 
      <Greet name='Bdullah' Heroname='Batman'>
        <button>Action</button> 
      </Greet>
      <Greet name='Kola' Heroname='coolman'/>
      <Test name='Kolade' state='osun'>
        <p>This a children props</p>
      </Test>
      <Test name=  'adekilekun' state='ondo'/>
      <Test name='ajagbe' state='oyo'/>
      <Test name= 'abebi' state='lagos'/>
    </div>
  );
}

export default App;
