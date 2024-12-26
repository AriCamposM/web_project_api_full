# Blog of Travel API

## Enlace al Proyecto

Puedes ver el proyecto en vivo aquí: [Enlace al blog de viajes](https://www.aricampos.ddnsfree.top)


## Descripción

Blog of Travel es una plataforma para compartir experiencias de viaje a través de tarjetas visuales. Los usuarios pueden registrar cuentas, iniciar sesión, crear tarjetas con imágenes y descripciones de sus viajes, y también interactuar con otras tarjetas mediante "likes". Este README describe los endpoints disponibles para la gestión de usuarios y tarjetas en la plataforma.


## 🚀 Tecnologías Utilizadas

- **Frontend**: React.js, CSS
- **Backend**: Node.js, Express.js
- **Base de Datos**: MongoDB (para almacenar usuarios, noticias personalizadas y guardadas)
- **Autenticación**: JSON Web Tokens (JWT) para autenticación segura de usuarios en la API personalizada

## Enlace a la API

La API fue desarrollada por [Aricampos](https://api.aricampos.ddnsfree.top). Puedes acceder a la API utilizando este enlace para hacer pruebas o integraciones.

## Endpoints

### **Usuarios (Users)**

1. **Registrar un nuevo usuario**
   - **Método**: `POST /signup`
   - **Descripción**: Registra a un nuevo usuario proporcionando un email y una contraseña, junto con datos opcionales como nombre, descripción y avatar.
   - **Body**:
     ```json
     {
       "email": "usuario@ejemplo.com",
       "password": "contraseñaSegura",
       "name": "Nombre del Usuario",
       "about": "Descripción breve",
       "avatar": "url-de-avatar"
     }
     ```

2. **Iniciar sesión (login)**
   - **Método**: `POST /signin`
   - **Descripción**: Permite que un usuario inicie sesión proporcionando su email y contraseña. Se devolverá un token de autenticación (JWT).
   - **Body**:
     ```json
     {
       "email": "usuario@ejemplo.com",
       "password": "contraseñaSegura"
     }
     ```

3. **Obtener todos los usuarios**
   - **Método**: `GET /users`
   - **Descripción**: Obtiene la lista de todos los usuarios registrados.
   - **Autenticación**: Requiere autenticación (middleware `auth`).

4. **Obtener información del usuario autenticado**
   - **Método**: `GET /users/me`
   - **Descripción**: Obtiene la información del usuario autenticado mediante el token JWT.
   - **Autenticación**: Requiere autenticación.

5. **Obtener información de un usuario específico**
   - **Método**: `GET /users/:userId`
   - **Descripción**: Obtiene la información de un usuario específico por su ID.
   - **Parámetros**:
     - `:userId`: ID del usuario.

6. **Actualizar la información del usuario autenticado**
   - **Método**: `PATCH /users/me`
   - **Descripción**: Actualiza el nombre y la descripción del usuario autenticado.
   - **Body**:
     ```json
     {
       "name": "Nuevo Nombre",
       "about": "Nueva descripción"
     }
     ```

7. **Actualizar avatar del usuario autenticado**
   - **Método**: `PATCH /users/me/avatar`
   - **Descripción**: Permite actualizar el avatar del usuario autenticado.
   - **Body**:
     ```json
     {
       "avatar": "url-de-nuevo-avatar"
     }
     ```

---

### **Tarjetas (Cards)**

1. **Obtener todas las tarjetas**
   - **Método**: `GET /cards`
   - **Descripción**: Obtiene todas las tarjetas de la plataforma.
   - **Autenticación**: Requiere autenticación (middleware `auth`).

2. **Crear una nueva tarjeta**
   - **Método**: `POST /cards`
   - **Descripción**: Crea una nueva tarjeta proporcionando un nombre y un enlace (imagen o URL).
   - **Body**:
     ```json
     {
       "name": "Nombre de la tarjeta",
       "link": "url-de-imagen-o-enlace"
     }
     ```

3. **Eliminar una tarjeta específica**
   - **Método**: `DELETE /cards/:cardId`
   - **Descripción**: Elimina una tarjeta específica por su ID.
   - **Parámetros**:
     - `:cardId`: ID de la tarjeta que deseas eliminar.

4. **Dar like a una tarjeta**
   - **Método**: `PUT /cards/likes/:cardId`
   - **Descripción**: Permite dar "like" a una tarjeta específica.
   - **Parámetros**:
     - `:cardId`: ID de la tarjeta a la que se le dará like.

5. **Quitar el like a una tarjeta**
   - **Método**: `DELETE /cards/likes/:cardId`
   - **Descripción**: Permite quitar el "like" a una tarjeta específica.
   - **Parámetros**:
     - `:cardId`: ID de la tarjeta a la que se le quitará el like.

---

## Instalación

### Requisitos previos
- Node.js y npm instalados en tu máquina.
- MongoDB (puede ser local o en la nube a través de MongoDB Atlas).

### Pasos para ejecutar el proyecto localmente

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/blog-of-travel.git
   ```
2. Navegar a la carpeta del proyecto:
   ```bash
   cd blog-of-travel
   ```
3. Instalar las dependencias:
   ```bash
   npm install
   ```
4. Configurar las variables de entorno: Crea un archivo .env y añade las siguientes variables:
   - MONGO_URI: URL de tu base de datos MongoDB.
   - JWT_SECRET: Clave secreta para JWT.
   - PORT: (Opcional) Puerto en el que se ejecutará el servidor.
5. Ejecutar el servidor:
   ```bash
   npm start
   ```
6. Visita http://localhost:3000 en tu navegador para probar la API.

## Errores comunes
- **401 Unauthorized:** Cuando el usuario no está autenticado (por ejemplo, si no se proporciona un token JWT válido en los endpoints que requieren autenticación).
- **404 Not Found:** Cuando el recurso solicitado no existe (por ejemplo, si el :userId o :cardId no es válido).
- **400 Bad Request:** Cuando el cuerpo de la solicitud no cumple con los requisitos (por ejemplo, falta un campo obligatorio).

<br><br>
<br><br>
<br><br>
<br><br>
<br><br>

# Blog of Travel API

## Link to the Project

You can view the project live here: [Link to the travel blog](https://www.aricampos.ddnsfree.top)


## Description

Blog of Travel is a platform for sharing travel experiences through visual cards. Users can register accounts, log in, create cards with images and descriptions of their trips, and also interact with other cards by giving "likes". This README describes the available endpoints for managing users and cards on the platform.


## 🚀 Technologies Used

- **Frontend**: React.js, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (to store users, personalized and saved news)
- **Authentication**: JSON Web Tokens (JWT) for secure user authentication in the custom API

## API Link

The API was developed by [Aricampos](https://api.aricampos.ddnsfree.top). You can access the API using this link for testing or integrations.

## Endpoints

### **Users**

1. **Register a new user**
   - **Method**: `POST /signup`
   - **Description**: Registers a new user by providing an email and password, along with optional data such as name, description, and avatar.
   - **Body**:
     ```json
     {
       "email": "user@example.com",
       "password": "SecurePassword",
       "name": "User's Name",
       "about": "Brief description",
       "avatar": "avatar-url"
     }
     ```

2. **Log in (login)**
   - **Method**: `POST /signin`
   - **Description**: Allows a user to log in by providing their email and password. An authentication token (JWT) will be returned.
   - **Body**:
     ```json
     {
       "email": "user@example.com",
       "password": "SecurePassword"
     }
     ```

3. **Get all users**
   - **Method**: `GET /users`
   - **Description**: Retrieves the list of all registered users.
   - **Authentication**: Requires authentication (middleware `auth`).

4. **Get information of the authenticated user**
   - **Method**: `GET /users/me`
   - **Description**: Retrieves the information of the authenticated user via the JWT token.
   - **Authentication**: Requires authentication.

5. **Get information of a specific user**
   - **Method**: `GET /users/:userId`
   - **Description**: Retrieves the information of a specific user by their ID.
   - **Parameters**:
     - `:userId`: ID of the user.

6. **Update the information of the authenticated user**
   - **Method**: `PATCH /users/me`
   - **Description**: Updates the name and description of the authenticated user.
   - **Body**:
     ```json
     {
       "name": "New Name",
       "about": "New description"
     }
     ```

7. **Update the avatar of the authenticated user**
   - **Method**: `PATCH /users/me/avatar`
   - **Description**: Allows the authenticated user to update their avatar.
   - **Body**:
     ```json
     {
       "avatar": "new-avatar-url"
     }
     ```

---

### **Cards**

1. **Get all cards**
   - **Method**: `GET /cards`
   - **Description**: Retrieves all the cards on the platform.
   - **Authentication**: Requires authentication (middleware `auth`).

2. **Create a new card**
   - **Method**: `POST /cards`
   - **Description**: Creates a new card by providing a name and a link (image or URL).
   - **Body**:
     ```json
     {
       "name": "Card name",
       "link": "image-or-link-url"
     }
     ```

3. **Delete a specific card**
   - **Method**: `DELETE /cards/:cardId`
   - **Description**: Deletes a specific card by its ID.
   - **Parameters**:
     - `:cardId`: ID of the card to delete.

4. **Like a card**
   - **Method**: `PUT /cards/likes/:cardId`
   - **Description**: Allows a user to "like" a specific card.
   - **Parameters**:
     - `:cardId`: ID of the card to like.

5. **Remove like from a card**
   - **Method**: `DELETE /cards/likes/:cardId`
   - **Description**: Allows a user to remove their "like" from a specific card.
   - **Parameters**:
     - `:cardId`: ID of the card to remove the like from.

---

## Installation

### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB (either local or in the cloud via MongoDB Atlas).

### Steps to run the project locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-user/blog-of-travel.git
   ```
2. Navigate to the project folder:
   ```bash
   cd blog-of-travel
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure environment variables: Create a .env file and add the following variables:
   - MONGO_URI: Your MongoDB database URL.
   - JWT_SECRET: Secret key for JWT.
   - PORT: (Optional) Port where the server will run.
5. Run the server:
   ```bash
   npm start
   ```
6. Visit http://localhost:3000 in your browser to test the API.

## Common Errors
- **401 Unauthorized:** When the user is not authenticated (for example, if a valid JWT token is not provided for endpoints that require authentication).
- **404 Not Found:** When the requested resource does not exist (for example, if the :userId or :cardId is invalid).
- **400 Bad Request:** When the body of the request does not meet the requirements (for example, if a required field is missing).
