# Challenge PSI

## Iniciar el proyecto
npm run dev ( Developer ) -  
npm start ( Producción ) -

## Descripción General
Esta API proporciona un conjunto de operaciones CRUD para la gestión de usuarios en una base de datos. Permite crear, leer, actualizar y eliminar información de usuarios, así como obtener usuarios según diferentes criterios de búsqueda.

## Endpoints de la API

### Obtener Todos los Usuarios
- **URL**: `/api/users`
- **Método**: `GET`
- **Descripción**: Retorna una lista de todos los usuarios en la base de datos.

### Obtener Usuario por ID
- **URL**: `/api/users/:id`
- **Método**: `GET`
- **Descripción**: Retorna un usuario específico basado en el ID proporcionado.

### Eliminar Usuario por ID
- **URL**: `/api/users/:id`
- **Método**: `DELETE`
- **Descripción**: Elimina el usuario con el ID especificado de la base de datos.

### Crear Usuario
- **URL**: `/api/users`
- **Método**: `POST`
- **Descripción**: Crea un nuevo usuario con la información proporcionada en el cuerpo de la solicitud.
- **Cuerpo de la Solicitud**:
  - `genero`: Género del usuario.
  - `nombre`: Nombre del usuario.
  - `apellido`: Apellido del usuario.
  - `correoElectronico`: Correo electrónico del usuario.
  - `nacimiento`: Fecha de nacimiento del usuario (formato DD/MM/YYYY HH:mm).
  - `coordenadas`: Coordenadas geográficas del usuario.
  - `localizacion` (opcional): Localización del usuario.

### Actualizar Usuario por ID
- **URL**: `/api/users/:id`
- **Método**: `PUT`
- **Descripción**: Actualiza la información del usuario con el ID especificado.
- **Cuerpo de la Solicitud**: Igual que en "Crear Usuario".

### Obtener Usuarios por Género
- **URL**: `/api/users/gender/:genero`
- **Método**: `GET`
- **Descripción**: Retorna una lista de usuarios filtrados por género.

### Obtener Usuarios por Nombre
- **URL**: `/api/users/name/:name`
- **Método**: `GET`
- **Descripción**: Retorna una lista de usuarios filtrados por nombre.

### Obtener Usuarios por Apellido
- **URL**: `/api/users/surname/:surname`
- **Método**: `GET`
- **Descripción**: Retorna una lista de usuarios filtrados por apellido.

### Obtener Usuarios por Correo Electrónico
- **URL**: `/api/users/email/:email`
- **Método**: `GET`
- **Descripción**: Retorna una lista de usuarios filtrados por correo electrónico.

### Obtener Usuarios por Fecha de Nacimiento
- **URL**: `/api/users/birthdate/:birthdate`
- **Método**: `GET`
- **Descripción**: Retorna una lista de usuarios filtrados por fecha de nacimiento.

### Obtener Usuarios por Coordenadas
- **URL**: `/api/users/coordinates/:coordinates`
- **Método**: `GET`
- **Descripción**: Retorna una lista de usuarios filtrados por coordenadas.

## Manejo de Errores
Los códigos de estado HTTP que se pueden esperar en respuesta a las solicitudes son:
- `200 OK`: La solicitud fue exitosa.
- `201 Created`: El recurso (usuario) fue creado exitosamente.
- `500 Internal Server Error`: Error general del servidor, por ejemplo, problemas al conectar con la base de datos.

## Uso
Para utilizar la API, envía solicitudes HTTP a los endpoints correspondientes con los datos requeridos según la descripción de cada endpoint.

## Contribuciones
Las contribuciones a este proyecto son bienvenidas. Por favor, sigue estas pautas para contribuir:
1. Haz un fork del repositorio.
2. Crea una rama para tu característica (`git checkout -b feature/fooBar`).
3. Haz tus cambios y confirma (`git commit -am 'Add some fooBar'`).
4. Empuja la rama (`git push origin feature/fooBar`).
5. Crea una nueva Pull Request.

## Licencia
Este proyecto está licenciado bajo la licencia MIT - ver el archivo LICENSE.md para más detalles.
