import './App.css';
import Calender from './Components/Calender';
import Cart from './Components/Cart';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cart/>
      <Calender/>
    </div>
  );
}

export default App;
