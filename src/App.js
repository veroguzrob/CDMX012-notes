import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Paths from './components/Paths';

function App() {
  return (
    <BrowserRouter>
      <Paths></Paths>
    </BrowserRouter>
  );
}

export default App;
