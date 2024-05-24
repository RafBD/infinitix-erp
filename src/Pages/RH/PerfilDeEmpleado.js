// Importaciones de librerías
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
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { IoDocumentAttach } from "react-icons/io5";
import './PerfilDeEmpleado.css';

const PerfilDeEmpleado = (props) => {
  // Variables de estado
  const [modalDocument, setModalDocument] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState(null);
  const { className } = props;

  // Abrir y cerrar el modal de editar usuario
  const toggleEdit = () => setModalEdit(!modalEdit);
  const [selectAll, setSelectAll] = useState(false);

  // Abrir y cerrar el modal de documentación
  const toggleDocument = () => setModalDocument(!modalDocument);

  // Función para seleccionar todos los checkbox
  const handleSelectAllChange = (e) => {
    setSelectAll(e.target.checked);
    const checkboxes = document.getElementsByName('usuario');
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = e.target.checked;
    }
  };

  // Datos de prueba
  // doa --> date of admission
  const users = [
    {
      id: 1, fullname: 'Rafael Benítez', address: 'Tiburcio Sanchez de la Barquera #97', mail: 'prueba1@usb.edu.mx', tel: '5560729113', doa: '17/04/2023', status: 'Activo'  
    },
    {
      id: 2, fullname: 'Cecilia Butrón', address: 'Tiburcio Sanchez de la Barquera #97', mail: 'prueba2@usb.edu.mx', tel: '5560729113', doa: '17/04/2023', status: 'Vacaciones'
    },
    {
      id: 3, fullname: 'Rodrigo Hernández', address: 'Tiburcio Sanchez de la Barquera #97', mail: 'prueba3@usb.edu.mx', tel: '5560729113', doa: '17/04/2023', status: 'Inactivo'
    },
    {
      id: 4, fullname: 'Juan Sánchez', address: 'Tiburcio Sanchez de la Barquera #97', mail: 'prueba4@usb.edu.mx', tel: '5560729113', doa: '17/04/2023', status: 'Activo'
    },
    {
      id: 5, fullname: 'Adrian Torres', address: 'Tiburcio Sanchez de la Barquera #97', mail: 'prueba5@usb.edu.mx', tel: '5560729113', doa: '17/04/2023', status: 'Vacaciones'
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

  // Renderizado de la tabla

  const usersToRendered = filteredUsers ? filteredUsers : users;

return (
  <div className="container py-3 tablaUsuarios">
    <div>
      <h2>Recursos Humanos</h2>
      <Input type="text" placeholder="Buscar empleado..." onChange={handleFilterChange} />
      <hr />
    </div>
        <Table responsive striped hover className='overflow-x-auto'>
        <thead>
            <tr>
                <th>
                <Input type="checkbox" checked={selectAll} onChange={handleSelectAllChange} />
                </th>
                <th>#</th>
                <th>Nombre Completo</th>
                <th>Dirección</th>
                <th>Correo</th>
                <th>Teléfono</th>
                <th>Fecha de Ingreso</th>
                <th>Status</th>
                <th>Documentación</th>
                <th>Editar</th>
            </tr>
        </thead>
        <tbody>
            {usersToRendered.map((user, index) => (
                <tr key={user.id}>
                <td><Input type="checkbox" name="usuario" /></td>
                <th scope="row">{index + 1}</th>
                <td>{user.fullname}</td>
                <td>{user.address}</td>
                <td>{user.mail}</td>
                <td>{user.tel}</td>
                <td>{user.doa}</td>
                {/* El operador ternario evalua que clase se le asigna al stataus dependiendo la situacion */}
                <td>
                  <div className={user.status === 'Activo' ? 'activo' : user.status === 'Inactivo' ? 'inactivo' : 'vacaciones'}>
                      {user.status}
                  </div>
                </td>
                
                {/* Botón para ver la documentación */}
                <td>
                <div className=''>
                    <Button outline className="border-info documentation-btn" onClick={toggleDocument}>
                      <IoDocumentAttach className='documentation-icon'/>
                    </Button>
                    <Modal isOpen={modalDocument} toggle={toggleDocument} className={className}>
                    <ModalHeader toggle={toggleDocument}>Documentación</ModalHeader>
                    <ModalBody>
                        <Form>
                          <FormGroup>
                            <Input type='checkbox' name='document' /> Acta de nacimiento
                          </FormGroup>
                          <FormGroup>
                            <Input type='checkbox' name='document' /> CURP
                          </FormGroup>
                          <FormGroup>
                            <Input type='checkbox' name='document' /> RFC
                          </FormGroup>
                          <FormGroup>
                            <Input type='checkbox' name='document' /> Comprobante de domicilio
                          </FormGroup>
                        </Form>
                    </ModalBody>
                    </Modal>
                </div>
                </td>
                {/* Botónes para editar */}
                <td>
                <div className='flex gap-2'>
                    <Button className='bg-warning-subtle editar' outline onClick={toggleEdit}>
                    <FaEdit  className='edit-icon'/>
                    </Button>
                    <Button outline className="bg-danger-subtle trash">
                    <FaRegTrashAlt className='trash-icon'/>
                    </Button>
                    <Modal isOpen={modalEdit} toggle={toggleEdit} className={className}>
                    <ModalHeader toggle={toggleEdit}>Editar Usuario</ModalHeader>
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
  
export default PerfilDeEmpleado;