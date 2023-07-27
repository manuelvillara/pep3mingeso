import logo from './logo.svg';
import './App.css';

//import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import Home from './resources/home/home'; // Importa el componente Home
import NavBar from './resources/navbar/navbar'; // Importa el componente NavBar
import PruebaFacilComponent from './resources/pruebafacil/pruebafacil';
import PruebaIntermediaComponent from './resources/pruebaintermedia/pruebaintermedia';
import PruebaAvanzadaComponent from './resources/pruebaavanzada/pruebaavanzada';
import ResultadosComponent from './resources/resultados/resultados';
import Nuevoprograma from './resources/nuevoprograma/nuevoprograma';
// Otras importaciones de componentes, si las tienes
// ...

const NavBarOnlyInTests = () => {
  // Obtener la ubicación actual usando useLocation
  const location = useLocation();

  // Determinar si estamos en una de las rutas específicas
  const showNavBar = ['/Basico', '/Intermedio', '/Avanzado'].includes(location.pathname);

  // Renderizar el NavBar solo en las rutas específicas
  return showNavBar ? <NavBar /> : null;
};

function App() {
  return (
    <Router>
      <NavBarOnlyInTests />
      <div className="App">
        <Routes> {/* Usa el componente Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/Basico" element={<PruebaFacilComponent />} /> 
          <Route path="/Intermedio" element={<PruebaIntermediaComponent />} /> 
          <Route path="/Avanzado" element={<PruebaAvanzadaComponent />} />
          <Route path="/Resultados" element={<ResultadosComponent />} />
          <Route path="/NuevoPrograma" element={<Nuevoprograma />} />
          {/* Otras rutas para tus otros componentes */}
          {/* ... */}
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
