import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Topbar from './components/topbar';
import Sidebar from './components/Sidebar';
import NuevoUsuario from '../src/Pages/Usuarios/NuevoUsuario';
import TodosLosUsuarios from '../src/Pages/Usuarios/TodosLosUsuarios';
import ListaDeProductos from './Pages/Almacen/ListaDeProductos';
import Notificaciones from './Pages/Notificaciones/Notificaciones';
import PerfilDeEmpleado from './Pages/RH/PerfilDeEmpleado';
import './App.css';
function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="w-100">
          <Topbar />
          <Routes>
            <Route path="/NuevoUsuario" element={<NuevoUsuario />} />
            <Route path="/TodosLosUsuarios" element={<TodosLosUsuarios />} />
            <Route path="/ListaDeProductos" element={<ListaDeProductos />} />
            <Route path="/Notificaciones" element={<Notificaciones />} />
            <Route path="/PerfilDeEmpleado" element={<PerfilDeEmpleado />} />
            {/* <Route path="*" element={<p>Página no encontrada</p>} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;