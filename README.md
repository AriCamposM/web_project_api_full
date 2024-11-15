# Blog of Travel API

## Enlace al Proyecto

Puedes ver el proyecto en vivo aquí: [Enlace al blog de viajes](https://www.aricampos.ddnsfree.top)


## Descripción

Blog of Travel es una plataforma para compartir experiencias de viaje a través de tarjetas visuales. Los usuarios pueden registrar cuentas, iniciar sesión, crear tarjetas con imágenes y descripciones de sus viajes, y también interactuar con otras tarjetas mediante "likes". Este README describe los endpoints disponibles para la gestión de usuarios y tarjetas en la plataforma.

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
