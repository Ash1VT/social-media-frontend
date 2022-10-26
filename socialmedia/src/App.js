import logo from './logo.svg';
import './App.css';

function App() {

  const handleClick = () => {alert("клик")}

  return (
    <div className="container">
      <button onClick={handleClick}>Click me</button>

    </div>
  );
}

export default App;
