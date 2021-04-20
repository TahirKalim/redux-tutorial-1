import logo from './logo.svg';
import './App.css';
import User from './User'
function App() {
  return (
    <div className="App">
      {/* <h1>app component</h1> */}
      <User data={{name:'Tahir Kalim', age: 26}}/>
    </div>
  );
}

export default App;
