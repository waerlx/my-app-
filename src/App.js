
import './App.css';
import Navbar from './components/NavBar';
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/AppRouter';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
