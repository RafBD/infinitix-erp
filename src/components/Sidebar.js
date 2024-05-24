import React, { useState} from 'react';
import { NavLink } from "react-router-dom";
// Import Icons
import { FaBoxOpen, FaUserCircle, FaUsersCog } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {ReactComponent as LogoLetras} from './Assets/logo_infi_letras.svg';
import { IoIosArrowBack } from "react-icons/io";
import './sideBar.css';

const Sidebar = ({ toggleSidebar }) => { // Aquí recibimos toggleSidebar como una prop
  const [activeItem, setActiveItem] = useState(-1);
  const [subMenuActive, setSubMenuActive] = useState({
    gestionProductos: false,
    controlInventario: false,
  });

  const handleActive = (index) => {
    setActiveItem(activeItem === index ? -1 : index);
    setSubMenuActive({
      gestionProductos: false,
      controlInventario: false,
    });
  };

  const handleSubMenuActive = (subMenu) => {
    setSubMenuActive({
      ...subMenuActive,
      [subMenu]: !subMenuActive[subMenu],
    });
  };

  const isActive = (index) => {
    return activeItem === index ? "active-item" : "";
  };

  const isSubMenuActive = (subMenu) => {
    return subMenuActive[subMenu] ? "active" : "";
  };

  return (
    <div className="Sidebar">
      <div className="logo-container">
        <div className="logo-div">
          {/* Se inserta logo */}
          <a href="/">
            <LogoLetras className="logo" width={150}/>
          </a>
        </div>
        {/* Arrow para contraer sidebar */}
        <IoIosArrowBack className="arrow-back"/>
      </div>
      <ul>
        {/* USUARIOS */}
        <li className={`parent-li ${isActive(0)}`}>
          <div onClick={() => handleActive(0)}>
            <NavLink to="/usuario" exact className="text-white rounded py-2 w-100 d-inline-block px-3" activeClassName="active">
            <div className='d-flex align-items-center'>
                <FaUsersCog className="me-3" />Usuarios
                {activeItem === 0 ? <MdOutlineKeyboardArrowDown className='ms-auto ms-3' />: <IoIosArrowBack className='ms-auto ms-3' />}
              </div>  
            </NavLink>
          </div>
          <ul style={{ display: activeItem === 0 ? "block" : "none" }}>
            <li>
              <NavLink to="/NuevoUsuario" exact className="text-white rounded w-100 d-inline-block px-3" activeClassName="active">Nuevo Usuario
              </NavLink>
            </li>
            <li>
              <NavLink to="/TodosLosUsuarios" exact className="text-white rounded w-100 d-inline-block px-3" activeClassName="active">
                Todos los usuarios
              </NavLink>
            </li>
          </ul>
        </li>
        <li className={`parent-li ${isActive(1)}`}>
          <div onClick={() => handleActive(1)}>
            <NavLink to="/recursos-humanos" exact className="text-white rounded py-2 w-100 d-inline-block px-3" activeClassName="active">
              <div className='d-flex align-items-center'>
                <FaUsersCog className="me-3" />Recursos Humanos
                {activeItem === 1 ? <MdOutlineKeyboardArrowDown className='ms-auto ms-3' />: <IoIosArrowBack className='ms-auto ms-3' />}
              </div>  
            </NavLink>
          </div>
          <ul style={{ display: activeItem === 1 ? "block" : "none" }}>
            <li>
              <NavLink to="/PerfilDeEmpleado" exact className="text-white rounded w-100 d-inline-block px-3" activeClassName="active">Perfil de Empleado</NavLink>
            </li>
            <li>
              <NavLink to="/recursos-humanos/section2" exact className="text-white rounded w-100 d-inline-block px-3" activeClassName="active">Roles</NavLink>
            </li>
          </ul>
        </li>
        <li className={`parent-li ${isActive(2)}`}>
          <div onClick={() => handleActive(2)}>
            <NavLink to="/almacen" exact className="text-white rounded py-2 w-100 d-inline-block px-3" activeClassName="active">
              <div className='d-flex align-items-center'>
                <FaBoxOpen className="me-3"/>Almácen
                  {activeItem === 2 ? <MdOutlineKeyboardArrowDown className='ms-auto ms-3' />: <IoIosArrowBack className='ms-auto ms-3' />}
              </div>
            </NavLink>
          </div>       
          <ul style={{ display: activeItem === 2 ? "block" : "none" }}>
            <li className={`parent-li ${isSubMenuActive('gestionProductos')}`} onClick={() => handleSubMenuActive('gestionProductos')}>
              <NavLink to="/almacen/section1" exact className="text-white rounded w-100 d-inline-block px-3" activeClassName="active">
                  Gestión de Productos
                  {activeItem === 2 ? <MdOutlineKeyboardArrowDown className='ms-auto ms-3' />: <IoIosArrowBack className='ms-auto ms-3' />}
              </NavLink>
              <ul style={{ display: subMenuActive.gestionProductos ? "block" : "none" }}>
                <li>
                <NavLink to="/ListaDeProductos" exact className="text-white rounded w-100 d-inline-block px-3" activeClassName="active">
                    Productos
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/almacen/CategoriasDeProductos" exact className="text-white rounded w-100 d-inline-block px-3" activeClassName="active">
                    Categorías de Productos
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/almacen/MarcasDeProductos" exact className="text-white rounded w-100 d-inline-block px-3" activeClassName="active">
                    Marcas de Productos
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className={`parent-li ${isSubMenuActive('controlInventario')}`} onClick={() => handleSubMenuActive('controlInventario')}>
              <NavLink to="/almacen/section2" exact className="text-white rounded w-100 d-inline-block px-3" activeClassName="active">Control de Inventario<MdOutlineKeyboardArrowDown className='ms-4'/>
              </NavLink>
              <ul style={{ display: subMenuActive.controlInventario ? "block" : "none" }}>
                <li>
                  <NavLink to="/almacen/EstadoDelInventario" exact className="text-white rounded w-100 d-inline-block px-3" activeClassName="active">
                    Estado del Inventario
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/almacen/MovimientosDeInventario" exact className="text-white rounded w-100 d-inline-block px-3" activeClassName="active">
                    Movimientos de Inventario
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/almacen/TransferenciasDeProductos" exact className="text-white rounded w-100 d-inline-block px-3" activeClassName="active">
                    Transferencias de Productos
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/almacen/AuditoriaDeInventario" exact className="text-white rounded w-100 d-inline-block px-3" activeClassName="active">
                    Auditoría de Inventario
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>  
        </li>
      </ul>
      <div className='usuario'>
        <FaUserCircle className="me-2" /> <span className='NomUser'>Nombre de Usuario</span>
      </div>
    </div>
  )
}

export default Sidebar;