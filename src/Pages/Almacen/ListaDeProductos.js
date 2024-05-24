import React, { useState } from 'react';
// Importar xlsx para exportar a excel
import * as XLSX from 'xlsx';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label } from 'reactstrap';
import { FaTrash, FaPrint, FaRegFilePdf, FaRegFileExcel, FaPlus} from 'react-icons/fa';
import { CiEdit } from "react-icons/ci";
import './ListaDeProductos.css'

const ListaDeProductos = () => {
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);

  const toggle = () => setModal(!modal);
  const toggleEditModal = () => setEditModal(!editModal);

  const productos = [
    { id: 1, nombre: 'Audífonos', descripcion: 'Descripción del producto 1', cantidad: 10, precio: 40, stock: 'Almacén A', categoria: 'Audio' },
    { id: 2, nombre: 'Reloj', descripcion: 'Descripción del producto 2', cantidad: 10, precio: 20, stock: 'Almacén A', categoria: 'Accesorios' },
    { id: 3, nombre: 'Celular', descripcion: 'Descripción del producto 3', cantidad: 18, precio: 55, stock: 'Almacén B', categoria: 'Electrónicos' },
    { id: 4, nombre: 'Computadora', descripcion: 'Descripción del producto 3', cantidad: 18, precio: 65, stock: 'Almacén B', categoria: 'Electrónicos' },
    { id: 5, nombre: 'Teclado', descripcion: 'Descripción del producto 3', cantidad: 18, precio: 18, stock: 'Almacén B', categoria: 'Electrónicos' },
  ];

  const handleFilterChange = (e) => {
    const keyword = e.target.value.toLowerCase();
    const filtered = productos.filter(producto => 
      producto.nombre.toLowerCase().includes(keyword) ||
      producto.descripcion.toLowerCase().includes(keyword) ||
      producto.cantidad.toString().includes(keyword) ||
      producto.precio.toString().includes(keyword) ||
      producto.stock.toLowerCase().includes(keyword) ||
      producto.categoria.toLowerCase().includes(keyword)
    );
    setFilteredProducts(filtered);
  };

  const openEditModal = (product) => {
    setSelectedProduct(product);
    toggleEditModal();
  };

  const productsToRender = filteredProducts ? filteredProducts : productos;

  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(productos);
    XLSX.utils.book_append_sheet(wb, ws, 'Productos');
    XLSX.writeFile(wb, 'productos.xlsx');
  };

  return (
    <div className='container py-3 ListaDeProductos'>
      <h2>Lista de Productos</h2>
      <div className='d-flex flex-column justify-content-between align-items-center w-100'>
        <div className="d-flex mb-3 barra">
          <Input type="text" placeholder="Buscar producto..." onChange={handleFilterChange} />
        </div>
        <div className='botones'>
          <Button color="warning" outline onClick={toggle} >
            <FaPlus />
          </Button>
          {' '}
          <Button color="danger" outline className='icon-button'>
            <FaRegFilePdf />
          </Button>
          {' '}
          <Button color="success" outline className='icon-button' onClick={exportToExcel}>
            <FaRegFileExcel />
          </Button>
          {' '}
          <Button color="info" outline className='icon-button'>
            <FaPrint />
          </Button>
        </div>
      </div>
      <hr />
      <Table striped bordered className='tabla'>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Categorías</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productsToRender.map((producto, index) => (
            <tr key={producto.id}>
              <th scope="row">{index + 1}</th>
              <td>{producto.nombre}</td>
              <td>{producto.descripcion}</td>
              <td>{producto.cantidad}</td>
              <td>${producto.precio}</td>
              <td>{producto.stock}</td>
              <td>{producto.categoria}</td>
              <td>
                <Button color="warning" outline className="me-2" onClick={() => openEditModal(producto)}><CiEdit /></Button>
                <Button color="danger" outline><FaTrash /></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* AQUI CECY :) */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Formulario para ingresar nuevos productos
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Agregar Nuevo Producto</ModalHeader>
        <ModalBody>
        <FormGroup>
                  <Label for="nombre">Nombre</Label>
                  <Input type="text" name="nombre" id="nombre"/>
                </FormGroup>
                <FormGroup>
                  <Label for="descripcion">Descripción</Label>
                  <Input type="text" name="descripcion" id="descripcion"/>
                </FormGroup>
                <FormGroup>
                  <Label for="cantidad">Cantidad</Label>
                  <Input type="number" name="cantidad" id="cantidad"/>
                </FormGroup>
                <FormGroup>
                  <Label for="precio">Precio</Label>
                  <Input type="number" name="precio" id="precio"/>
                </FormGroup>
                <FormGroup>
                  <Label for="stock">Stock</Label>
                  <Input type="text" name="stock" id="stock"/>
                </FormGroup>
                <FormGroup>
                  <Label for="categoria">Categoría</Label>
                  <Input type="select" name="categoria" id="categoria">
                    <option>Electrónica</option>
                    <option>Electrodomésticos</option>
                    <option>Hogar</option>
                  </Input>
                </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="success" outline onClick={toggle}>
            Agregar
          </Button>{' '}
          <Button color="danger" outline onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={editModal} toggle={toggleEditModal}>
        <ModalHeader toggle={toggleEditModal}>Editar Producto</ModalHeader>
        <ModalBody>
          <Form>
            {selectedProduct && (
              <>
                <FormGroup>
                  <Label for="nombre">Nombre</Label>
                  <Input type="text" name="nombre" id="nombre" defaultValue={selectedProduct.nombre} />
                </FormGroup>
                <FormGroup>
                  <Label for="descripcion">Descripción</Label>
                  <Input type="text" name="descripcion" id="descripcion" defaultValue={selectedProduct.descripcion} />
                </FormGroup>
                <FormGroup>
                  <Label for="cantidad">Cantidad</Label>
                  <Input type="number" name="cantidad" id="cantidad" defaultValue={selectedProduct.cantidad} />
                </FormGroup>
                <FormGroup>
                  <Label for="precio">Precio</Label>
                  <Input type="number" name="precio" id="precio" defaultValue={selectedProduct.precio} />
                </FormGroup>
                <FormGroup>
                  <Label for="stock">Stock</Label>
                  <Input type="text" name="stock" id="stock" defaultValue={selectedProduct.stock} />
                </FormGroup>
                <FormGroup>
                  <Label for="categoria">Categoría</Label>
                  <Input type="select" name="categoria" id="categoria" defaultValue={selectedProduct.categoria}>
                    <option>Electrónica</option>
                    <option>Electrodomésticos</option>
                    <option>Hogar</option>
                  </Input>
                </FormGroup>
              </>
            )}
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleEditModal}>Guardar Cambios</Button>{' '}
          <Button color="secondary" onClick={toggleEditModal}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ListaDeProductos;
