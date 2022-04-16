import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';


function App() {
  return (
  <div className="App">

      <PersonCard lastName={"Gomez"} firstName={"Ana"} age={28}  hair={"dark brown"} />
      
      <PersonCard lastName={"Harper"} firstName={"Ben"} age={22} hair={"black"} />
      
      <PersonCard lastName={"Blake"} firstName={"George"} age={22} hair={"black"} />

      </div>
      );
      }

export default App;

