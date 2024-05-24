# Tecnologias aplicadas

- React 18
- Bootstrap 5.3.2
- Javascript 8
- React-icons 5.1.0
- Reactstrap 8
- popperjs/core 2.11.8
- chalk 4.1.2
- next.ui 2.2.10
- tailwind-merge 1.14.0
- chokidar 3.6.0
- picomatch 2.3.1
- ansi-styles 5.2.0
- ci-info 3.9.0
- babel/core 7.23.9
- supports-color 8.1.1
- execa 5.1.1
- pure-rand 6.0.4
- emittery 0.10.2
- core-js-compat 3.36.0
- immer 9.0.21

# Navegadores en el que se puede ejecutar

- Chrome
- Oracle
- Brave
- Edge

# Reporte del Figma

1. **Elementos de la imagen:**
   Tres dispositivos:
   **iPad,
   Tablet Android,
   PC**

2. **Pantalla de inicio de sesión:**
   Título: Vista
   Dos campos:
   **Usuario (Nombre de usuario),
   Contraseña (Contraseña),
   Un botón: Ingresar (Iniciar sesión)**

## Reporte del Componente LoginForm.jsx

### Descripción

El módulo de LoginForm es crucial en la plataforma online, ofreciendo un formulario interactivo para que los usuarios inicien sesión. Su función principal es gestionar la introducción de datos de acceso, verificar la información proporcionada y autenticar a los usuarios en el sistema.

### Estructura y Funcionalidad

1. **Hook useState:**
   El componente utiliza el hook useState para gestionar el estado local, incluyendo el nombre de usuario, la contraseña, la opción de recordar sesión y los mensajes de error.

2. **Funciones de Manejo de Cambios:**
   Se definen funciones para manejar los cambios en los campos de nombre de usuario y contraseña. Estas funciones actualizan el estado correspondiente y limpian cualquier mensaje de error.
   También se proporciona una función para manejar el cambio en la opción de recordar sesión.

3. **Función de Envío de Formulario:**
   Cuando se envía el formulario, se procede a validar la información ingresada para el nombre de usuario y la contraseña. Si se encuentra algún campo vacío o si la combinación de datos de acceso no es correcta, se mostrará un mensaje de error. En el caso de que la autenticación sea exitosa, se desplegará un mensaje indicando el éxito y se activará la función onLogin.

4. **Interfaz de Usuario:**
   El formulario incluye campos para introducir el nombre de usuario y la contraseña, con iconos para mejorar la experiencia visual. Además, se ofrece la opción de recordar sesión y un enlace para recuperar la contraseña en caso de olvido. Si hay problemas con la autenticación, se exhiben mensajes de error debajo del formulario.

## Estilos CSS

El componente hace referencia a un archivo de estilo externo (LoginForm.css) para aplicar estilos específicos.
Se utiliza una clase llamada .wrapper para estilizar el contenedor principal del formulario y definir su apariencia visual.

## Reporte del Componente LoginForm.css

## Propósito

El estilo CSS proporcionado define la apariencia visual del formulario de inicio de sesión en la aplicación web.

### Detalles del Estilo:

1. **Selector body:**
   Establece una imagen de fondo para el cuerpo de la página.
   Centra el contenido vertical y horizontalmente utilizando flexbox.
   Fija la altura del cuerpo como el 100% de la altura de la ventana gráfica.
   La imagen de fondo se ajusta y se fija en su posición para cubrir toda el área visible.

2. **Clase `.wrapper`:**
   Define un contenedor para el formulario de inicio de sesión.
   Utiliza flexbox para centrar el contenedor horizontalmente en la página.
   Establece un ancho máximo para el contenedor y lo centra horizontalmente.
   Aplica un fondo semitransparente, bordes y sombras para destacar el formulario.
   Utiliza el efecto de filtro backdrop-filter para desenfocar el fondo.
   Define un espaciado interno para el contenido del contenedor.

3. **Estilos para Campos de Entrada:**
   Define estilos para los campos de usuario y contraseña.
   Utiliza flexbox para organizar los campos de entrada en una columna.
   Establece un borde, relleno y tamaño de fuente para los campos.
   Agrega un borde izquierdo especial para el campo de usuario.

4. **Estilos para el Botón y Mensajes de Error:**
   Define estilos para el botón de envío del formulario.
   Establece un color de fondo, borde, relleno y tamaño de fuente para el botón.
   Define estilos para los mensajes de error que pueden aparecer debajo del formulario.
5. **Media Queries:**
   Ajusta el ancho del contenedor del formulario para pantallas más pequeñas (menos de 700px).
   Redefine el tamaño de fuente para etiquetas y enlaces para mejorar la legibilidad en dispositivos móviles.

# Reporte de Documentación - Sidebar

El archivo Sidebar.js contiene un componente React llamado Sidebar, que se encarga de renderizar la barra lateral de una aplicación web. A continuación, se presenta una estructura ordenada de las importaciones, seguida de una descripción de las funcionalidades y elementos del componente.

### Componente Sidebar

El componente Sidebar renderiza una barra lateral con los siguientes elementos:

- **Título:** Muestra el título "INFINITIX".
- **Menú de navegación:** Contiene enlaces (NavLink) para navegar a diferentes secciones de la aplicación, junto con iconos asociados.

- **Usuarios:** Enlace para acceder a la sección de usuarios.

  - **Nuevo Usuario:** Enlace para crear un nuevo usuario.
  - **Todos los usuarios:** Enlace para ver todos los usuarios registrados.

- **Recursos Humanos:** Enlace para acceder a la sección de recursos humanos.

  - **Perfil del Empleado:** Enlace para acceder a la sección de perfil del empleado
  - **Roles:** Enlace para acceder a la sección de Roles

- **Almacen:** Enlace para acceder a la sección de almacenamiento.

  - **Gestion de Productos:** Enlace para acceder a la sección de gestion de productos
    - **Productos:** Enlace para acceder a la sección de productos
    - **Categorías de Productos:** Enlace para acceder a la sección de categorías de Productos
    - **Marcas de Productos:** Enlace para acceder a la sección de marcas de productos
  - **Control de Inventario:** Enlace para acceder a la sección de control de inventario
    - **Estado de Inventario:** Enlace para acceder a la sección de estado de inventario
    - **Movimiento de Inventario:** Enlace para acceder a la sección de movimiento de inventario
    - **Transferencias de Productos:** Enlace para acceder a la sección de transferencias de productos
    - **Auditoría de Inventario:** Enlace para acceder a la sección de auditoría de inventario

- **Cuenta:** Muestra foto de perfil igual que el nombre del usuario que este accediendo al sistema y esta activo al momento.

El componente utiliza los iconos importados de la librería react-icons para mejorar la interfaz de usuario.

# Reporte de Documentación - Topbar

### Componente Topbar

Representa la barra de navegación superior de la aplicación. Proporciona enlaces y opciones de menú para el usuario, incluyendo la capacidad de cambiar el tema, acceder a la configuración de la aplicación y gestionar el perfil de usuario o de la aplicación.

1. El componente Topbar proporciona una barra de navegación superior con los siguientes elementos:

- **Configuraciónes:** Representa el nombre o logotipo de la aplicación.
- **Botón Claro/Oscuro:** Cambiar el tema de la aplicación entre claro y oscuro.
- **Mi usuario**: Contiene opciones adicionales para el usuario, como "Mi perfil" incluyendo la visualización de información personal, "Configuraciones", Notificaciones y "Cerrar sesión".

Mejora la experiencia del usuario al proporcionar una navegación clara y con un acceso rápido a funciones importantes de la aplicación sin mucha dificultad.

# Reporte de Documentación - NuevoUsuario

### Detalles del Formulario:

El apartado de nuevo usuario como indica el nombre, es un registro para que se pueda registrar el usuario con los datos que te pida el formulario y se guarde en el sistema.

- El formulario tiene una clase CSS form.
- Contiene un título "Registro".
- Tiene los primeros campos de nombre y apellidos.
- Tiene el campos de área (área de trabajo).
- Incluye igual el campo para el correo electronico.
- Los campos de contraseña utilizan el tipo de entrada password para ocultar el texto ingresado.
- Igual esta el campo de confirmar contraseña
- Cada campo de entrada tiene un atributo required para indicar que es obligatorio.
- Boton de registro

# Reporte de Documentación - NuevoUsuario.css

El archivo CSS proporciona estilos para un formulario de registro, con las siguientes características:

- El formulario se muestra como una columna con un espaciado entre los elementos y un fondo blanco con borde redondeado.
- El título del formulario tiene un estilo distintivo con un color de texto y elementos decorativos antes y después del título.
- Los campos de entrada y etiquetas tienen estilos para alinearlos correctamente y proporcionar feedback visual al usuario.
- El botón de envío del formulario tiene un estilo definido con transiciones suaves en hover.
- Se definen varias animaciones que pueden ser utilizadas en elementos dentro del formulario, como pulso, aparición, deslizamiento hacia abajo y deslizamiento hacia arriba.

# Reporte de Documentación - TodosLosUsuarios

### Componente TodosLosUsuarios

muestra una tabla de todos los usuarios registrados, incluye una barra de buscador para facilitar la busqueda de los empleados.

### Detalles de la Tabla

- Tiene una barra de busqueda en la parte superior de la tabla para buscar los empleados
- La tabla utiliza la clase striped de reactstrap para alternar el color de las filas.
- La tabla tiene ocho columnas: #, Nombre, Apellido, Correo, área, Contraseña, status y Editar.
- Cada fila representa un usuario con su información respectiva: nombre, apellido, correo, área, contraseña, status y opciones de editar/eliminar.
- Se le agragaron los campos del area de donde trabaja el empleado y el status de espara para indicar si esta activo, periodo de vacaciones y si esta inactivo.

### Detalles de los campos

Datos que contiene cada columna:

- **#:** Nombre del producto en venta
- **Nombre:** Nombre del empleado
- **Apellido:** Apellido del empleado
- **Correo:** Correo electronico del empleado
- **Área:** Campo de especializacion dentro de la empresa
- **Contraseña:** clave de confirmación para la cuenta
- **Status:** Si el empreado esta activo, inactivo o en estado de vacaciones:
  - **Activo:** El empleado esta trabajando en la empresa.
  - **Inactivo:** El empleado no está trabajando en la empresa, pero sigue siendo parte de la nómina.
  - **Vacaciones:** El empleado está de vacaciones.
- **Editar:** Las acciones que puede hacer son las siguientes:
  - **Editar:** Permite editar los datos del empleado seleccionado.
  - **Eliminar:** Permite eliminar el registro del empleado seleccionado.

# Reporte de Documentación - TodosLosUsuarios .CSS

### Componente TodosLosUsuarios .CSS

El archivo CSS proporciona estilos para un formulario de registro, con las siguientes características:

- El código de estilos define varias clases para estilizar una tabla de usuarios en una página web. La tabla tiene una animación de desvanecimiento cuando se carga por primera vez.

- El título de la tabla tiene una animación de deslizamiento hacia abajo y una letra espaciada. La línea horizontal que separa el título de la tabla también tiene una animación de deslizamiento hacia abajo.

- La tabla en sí tiene un ancho del 100% de la pantalla y una sombra para darle profundidad. La fila de encabezado de la tabla tiene una letra centrada y espaciada. La fila de cuerpo de la tabla también tiene una letra centrada.

- Las celdas de la tabla tienen un relleno y una alineación vertical centrada. Hay tres clases para representar diferentes estados de un usuario: "activo", "inactivo" y "vacaciones". Cada clase tiene un fondo de color diferente y texto blanco.

- También hay dos iconos para editar y eliminar usuarios, que tienen un color negro y se alinean en el centro. Cuando se pasa el mouse sobre el botón de editar, el fondo se vuelve naranja, y cuando se pasa el mouse sobre el botón de eliminar, el fondo se vuelve rojo.

- Finalmente, hay una consulta de medios para dispositivos móviles y tabletas que ajusta el ancho y el tamaño de fuente del formulario de usuario nuevo en pantallas más pequeñas.

# Reporte de Documentación - Productos (Lista de Productos)

### Componente Productos

Este apartado muestra la lista de productos que tiene la empresa en almacen, puedes identificar el producto que quieras con la capacidad de buscar y ordenar los registros de manera rápida y sencilla Además, puedes agregar productos o eliminar/editar los existentes.

### Detalles de la Tabla

- Tiene un buscador para facilitar la busqueda de los productos que hay en almacen
- La tabla tiene ocho columnas: #, Nombre, Descripción, Cantidad, Precio, Stock, Categorias y Editar.

- Tiene 4 botones arriba de la tabla de la lista de productos, uno para crear una nueva fila del producto que deseas agregar, una para imprimir la lista, y los otros 2 para descargar la tabla en formato xlsx(excel).

### Detalles de los Campos:

- Datos que contiene cada columna:
  - **Nombre:** Nombre del producto en venta
  - **Descripción:** Detalles de las especificaciones del producto
  - **Cantidad:** cuantas medidas o cantidades hay del producto para vende o se presenta un artículo específico.
  - **Stock:** Productos en donde se encuentran en almacen para gestionar el inventario
  - **Categorias:** Categoria en la que se clasifica el producto, si es accesorio, producto, etc.
  - **Editar:** En este apartado es para poder editar los datos o cambiar el producto, tambien para eliminarlo

Se agrego al archivo una nueva libreria llamada xlsx, permite trabajar con hojas de cálculo de Excel (archivos .xlsx)

- Se puso para que el botón de excel que esta en la página de lista de productos la tabla se guarde en un excel

# Reporte de Documentación - Productos (Lista de Productos) .CSS

### Componente Productos .CSS

El archivo CSS proporciona estilos para un formulario de registro, con las siguientes características:

#### Elementos de estilo

- Este archivo de estilos contiene varias clases para estilizar diferentes elementos en una página web. La clase .ListaDeProductos h2 tiene una animación de deslizamiento hacia abajo y una letra espaciada, con un tamaño y color de fuente específicos. La clase .barra tiene una animación de deslizamiento hacia abajo y un ancho del 100%.

- La clase .botones utiliza flexbox para alinear los botones con espacio alrededor y centrarlos. Cada botón tiene un borde redondeado y relleno, y los iconos dentro de los botones tienen un tamaño de fuente específico.

- La clase .ListaDeProductos hr tiene una animación de deslizamiento hacia abajo y un borde superior sólido de un color específico.

- Por último, la clase .tabla tiene una animación de deslizamiento hacia abajo. Todas las animaciones duran 1 segundo. Además, hay una consulta de medios para dispositivos móviles y tabletas que ajusta el ancho y el tamaño de fuente del formulario de usuario nuevo en pantallas más pequeñas.

# Reporte de Documentación - Perfil de Empleado

### Componente Perfil de Empleado

Este apartado muestra la lista de empleados que trabajan en la empresa, muestra todos lo datos que tiene y puedes identificar al empleado que quieras o busques mucho más fácil con un buscador. Además, puedes agregar empleados o eliminar/editar los existentes.

### Detalles de la Tabla:

- La tabla tiene 9 columnas: #, Nombre Completo, Dirección, Correo, Telefono, Fecha de Ingreso, Status, Documentación y Editar.

### Detalles de los campos:

- **# :** Número de identificacion del empleado
- **Nombre Completo:** Nombres y Apellidos completos
- **Dirección:** La direccion de donde vive el empleado
- **Correo:** Correo electronico del empleado
- **Telefono:** Número telefonico del empleado
- **Fecha de ingreso:** Fecha en la que el empleado ingreso en la empresa
- **Status:** Si el empreado esta activo, inactivo o en estado de vacaciones:
  - **Activo:** El empleado esta trabajando en la empresa.
  - **Inactivo:** El empleado no está trabajando en la empresa, pero sigue siendo parte de la nómina.
  - **Vacaciones:** El empleado está de vacaciones.
- **Documetación:** Documentos como: Acta de Nacimiento, CURP, RFC, Comprobante de domicilio, etc.
- **Editar:** Las acciones que puede hacer son las siguientes:
  - **Editar:** Permite editar los datos del empleado seleccionado.
  - **Eliminar:** Permite eliminar el registro del empleado seleccionado.

# Reporte de Documentación - Perfil de Empleado CSS.

### Componente Perfil de Empleado CSS.

El archivo CSS proporciona estilos para un formulario de registro, con las siguientes características:

- **th:** Este es un elemento que representa una celda de encabezado en una tabla. El atributo align-content centra el contenido de la celda en la fila.

- **.documentation-icon:** Este es un selector de clase CSS que define el estilo para un icono de documentación. El tamaño de fuente se establece en 1.2 rem, el color en azul claro (#11A2C2), el cursor en puntero y el texto centrado.

- **.documentation-btn:hover:** Este es un selector de clase CSS que define el estilo cuando el mouse se desplaza sobre un botón de documentación. El fondo se cambia a un color más oscuro (#467c8a), el color del texto a blanco y el color del icono también a blanco.
