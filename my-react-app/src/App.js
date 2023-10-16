
import './App.css';
import Animal from './Components/Animal';
import animals from './data/animals';


function App() {
  return (
    <div className="App">
     <h1>Animal List</h1>
      <div className="animal-container">
        {animals.map((animal, index) => (
          <Animal
            key={index}
            name={animal.name}
            description={animal.description}
            image={animal.image}
            isMammal={animal.isMammal}
          />
        ))}
      </div>
    </div>
  );
}


export default App;
