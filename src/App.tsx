import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App;
