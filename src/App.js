import Pallet from './Pallet';
import colorPallet from './seedPallet';
import './App.css';
import seedPallet from './seedPallet';

function App() {
  return (
    <div className="App">
      <Pallet {...seedPallet[1]} />
    </div>
  );
}

export default App;
