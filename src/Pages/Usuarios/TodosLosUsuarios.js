import React, { useState } from 'react';
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
} from 'reactstrap';
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt} from "react-icons/fa";
import './TodosLosUsuarios.css';

const TodosLosUsuarios = (props) => {
  // Variables de estado
  const [modal, setModal] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState(null);
  const { className } = props;
  
  const toggle = () => setModal(!modal);
  const [selectAll, setSelectAll] = useState(false);

  // Funcion para seleccionar todos los checkbox
  const handleSelectAllChange = (e) => {
    setSelectAll(e.target.checked);
    const checkboxes = document.getElementsByName('usuario');
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = e.target.checked;
    }
  };

  // Datos de prueba
  const users = [
    {
      id: 1, nombre: 'Rafael', apellido: 'Benítez', correo: 'prueba1@usb.edu.mx', area: 'Sistemas', password: 'Temporal#123', status: 'Activo'  
    },
    {
      id: 2, nombre: 'Cecilia', apellido: 'Butrón', correo: 'prueba2@usb.edu.mx', area: 'Contabilidad', password: 'Temporal#123', status: 'Vacaciones'
    },
    {
      id: 3, nombre: 'Rodrigo', apellido: 'Hernández', correo: 'prueba3@usb.edu.mx', area: 'Administracion', password: 'Temporal#123', status: 'Inactivo'
    },
    {
      id: 4, nombre: 'Juan', apellido: 'Sánchez', correo: 'prueba4@usb.edu.mx', area: 'Sistemas', password: 'Temporal#123', status: 'Activo'
    },
    {
      id: 5, nombre: 'Adrian', apellido: 'Torres', correo: 'prueba5@usb.edu.mx', area: 'Marketing', password: 'Temporal#123', status: 'Vacaciones'
    }
  ];

  // Filtrar usuarios
  const handleFilterChange = (e) => {
    const keyword = e.target.value.toLowerCase();
    const filtered = users.filter(user => 
      user.nombre.toLowerCase().includes(keyword) ||
      user.apellido.toLowerCase().includes(keyword) ||
      user.correo.toString().includes(keyword) ||
      user.area.toString().includes(keyword) ||
      user.password.toLowerCase().includes(keyword) ||
      user.status.toLowerCase().includes(keyword)
    );
    setFilteredUsers(filtered);
  };

  const usersToRendered = filteredUsers ? filteredUsers : users;

return (
  <div className="container py-3 tablaUsuarios">
    <div>
      <h2>Todos Los Usuarios</h2>
      <Input type="text" placeholder="Buscar empleado..." onChange={handleFilterChange} />
      <hr />
    </div>
    <Table responsive striped hover>
      <thead>
          <tr>
            <th>
              <Input type="checkbox" checked={selectAll} onChange={handleSelectAllChange} />
            </th>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Área</th>
            <th>Contraseña</th>
            <th>Status</th>
            <th>Editar</th>
          </tr>
      </thead>
      <tbody>
          {usersToRendered.map((user, index) => (
            <tr key={user.id}>
              <td><Input type="checkbox" name="usuario" /></td>
              <th scope="row">{index + 1}</th>
              <td>{user.nombre}</td>
              <td>{user.apellido}</td>
              <td>{user.correo}</td>
              <td>{user.area}</td>
              <td>{user.password}</td>
              {/* El operador ternario evalua que clase se le asigna al stataus dependiendo la situacion */}
              <div className='status-container'>
              <td id='status' className={user.status === 'Activo' ? 'activo' : user.status === 'Inactivo' ? 'inactivo' : 'vacaciones'}>
                {user.status}
              </td>
              </div>
              <td>
              <div className='flex gap-2'>
                <Button className='bg-warning-subtle editar' outline onClick={toggle}>
                  <FaEdit  className='edit-icon'/>
                </Button>
                <Button outline className="bg-danger-subtle trash">
                  <FaRegTrashAlt className='trash-icon'/>
                </Button>
                <Modal isOpen={modal} toggle={toggle} className={className}>
                  <ModalHeader toggle={toggle}>Editar Usuario</ModalHeader>
                  <ModalBody>
                    <Form>
                      <FormGroup>
                        <Input id="Mail" name="email" placeholder="Mail" type="email" />
                      </FormGroup>
                      <FormGroup>
                        <Input id="Password" name="password" placeholder="Contraseña" type="password" />
                      </FormGroup>
                      <FormGroup>
                        <Input id="exampleSelect" name="select" type="select">
                          <option>Área</option>
                          <option>Recursos Humanos</option>
                          <option>Finanzas</option>
                          <option>Almacen</option>
                          <option>Marketing</option>
                        </Input>
                      </FormGroup>
                    </Form>
                  </ModalBody>
                </Modal>
              </div>
            </td>
            </tr>
          ))}
        </tbody>
    </Table>
  </div>
);
}
  
export default TodosLosUsuarios;