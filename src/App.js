import logo from './logo.svg';
import './App.css';

function App() {
  const noyoks = [
    {name: 'Jasim', age:30},
    {name: 'Dipjol', age:35},
    {name: 'Bapparaj', age:38}
  ]



  return (
    <div className="App">
      <header className="App-header">
      {noyoks.map(noyok=><Nayok nayok={noyoks}></Nayok>)}
      
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function Nayok(props) {
  console.log(props.nayok);
  const {name, age} = props.nayok;

  return(
    <div>
      <h1>Ami khol nayok {name}</h1>
      <h3>I have done 5 movies {age} in years</h3>
    </div>
  )
}

export default App;
