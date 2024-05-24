import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { FaUserCircle } from 'react-icons/fa';
import { CiDark } from 'react-icons/ci';
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";
// Importar CSS
import './TopBar.css';

function Topbar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='Topbar'>
      <Navbar {...args} expand = "md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink><CiDark /></NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
              <IoMdSettings className='text-light'/>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              <FaUserCircle />
              </DropdownToggle>
              <DropdownMenu right>
              <DropdownItem>Mi perfil</DropdownItem>
              <DropdownItem>Configuraciones</DropdownItem>
              <DropdownItem>
                <Link to="/notificaciones" className='fs-6 p-0 text-decoration-none text-light notificaciones-link'>
                  Notificaciones
                  <span className='me-2 badge bg-success ms-1'>0</span>
                </Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Cerrar sesión</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Topbar;