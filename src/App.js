import './App.css';
import Inicio from './components/Inicio'
import Personaje from './components/Personaje'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* indicamos las rutas que queremos mostrar */}
          <Route path='/' element={<Inicio></Inicio>}></Route>
          {/* indicamos el personaje que queremos mostrar en especifico */}
          <Route path='/personaje/:id' element={<Personaje></Personaje>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
