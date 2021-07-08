import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className='App-header'>
      
      <h1 className= 'title'>Hello, {props.name}</h1>
      
      </header>
    </div>
  );
}

export default App;
