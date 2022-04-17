import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';


const peopleArr = [
  {
    firstName: "Ana", 
    lastName: "Gomez",
    age: 28, 
    hair: "brown",
  },
  {
    firstName: "Ben", 
    lastName: "Harper",
    age: 22, 
    hair: "blonde",
  },
  {
    firstName: "George", 
    lastName: "Blake",
    age: 44, 
    hair: "black",
  }
];

function App() {
  return (
  <div className="App">
    {peopleArr.map((personObj, index) => (
      <PersonCard key={index} firstName={personObj.firstName} lastName={personObj.lastName} age={personObj.age} hair={personObj.hair} />
    ))}
  </div>
  );
    }

export default App;

