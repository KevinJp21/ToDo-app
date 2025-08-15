# API ToDo App - Documentación

## Endpoints de entidad users

### 1. Registro de Usuario
**POST** `/api/register`

Registra un nuevo usuario en el sistema.

**Datos requeridos:**
```json
{
    "username": "usuario123",
    "email": "usuario@ejemplo.com",
    "password": "contraseña123",
    "password_confirmation": "contraseña123"
}
```

**Respuesta exitosa (201):**
```json
{
    "success": true,
    "message": "Usuario registrado exitosamente",
    "data": {
        "user": {
            "id": 1,
            "username": "usuario123",
            "email": "usuario@ejemplo.com",
            "created_at": "2025-01-15T10:30:00.000000Z"
        },
        "token": "1|abc123...",
        "token_type": "Bearer"
    }
}
```

### 2. Login de Usuario
**POST** `/api/login`

Autentica un usuario existente y devuelve un token de acceso.

**Datos requeridos:**
```json
{
    "email": "usuario@ejemplo.com",
    "password": "contraseña123"
}
```

**Respuesta exitosa (200):**
```json
{
    "success": true,
    "message": "Login exitoso",
    "data": {
        "user": {
            "id": 1,
            "username": "usuario123",
            "email": "usuario@ejemplo.com"
        },
        "token": "2|def456...",
        "token_type": "Bearer"
    }
}
```

### 3. Logout de Usuario
**POST** `/api/logout`

Cierra la sesión del usuario y revoca el token actual.

**Headers requeridos:**
```
Authorization: Bearer {token}
```

**Respuesta exitosa (200):**
```json
{
    "success": true,
    "message": "Sesión cerrada exitosamente"
}
```

## Endpoints de entidad tasks

### 1. Crear Tarea
**POST** `/api/tasks`

Crea una nueva tarea asociada a un usuario.

**Headers requeridos:**
```
Authorization: Bearer {token}
```

**Datos requeridos:**
```json
{
    "title": "Comprar comida para desayuno",
    "description": "Leche, pan y huevos"
}
```

**Respuesta exitosa (201):**
```json
{
   {
    "success": true,
    "message": "Tarea creada correctamente",
    "data": {
        "title": "Comprar comida para desayuno",
        "description": "Leche, pan y huevos",
        "finish_date": null,
        "user_id": 1,
        "updated_at": "2025-08-15T03:12:24.000000Z",
        "created_at": "2025-08-15T03:12:24.000000Z",
        "id": 1
    }
}
}
```
**Errores de validación (422):**
```json
{
    "success": false,
    "message": "Error de validación",
    "errors": {
        "title": ["El campo título es obligatorio"],
        "user_id": ["El campo user_id es obligatorio"]
    }
}
```

### 2. Obtener Tareas
**GET** `/api/tasks`

Obtiene la lista de todas las tareas asociadas al usuario autenticado.

**Headers requeridos:**
```
Authorization: Bearer {token}
```

Respuesta exitosa (200):
```json
{
    "success": true,
    "message": "Lista de tareas del usuario",
    "data": [
        {
            "id": 1,
            "title": "Comprar comida para desayuno",
            "description": "Leche, pan y huevos",
            "completed": false,
            "finish_date": null,
            "user_id": 1,
            "created_at": "2025-08-15T03:12:24.000000Z",
            "updated_at": "2025-08-15T03:12:24.000000Z"
        },
        {
            "id": 2,
            "title": "Estudiar Laravel",
            "description": "Repasar controladores y rutas",
            "completed": true,
            "finish_date": "2025-08-16",
            "user_id": 1,
            "created_at": "2025-08-14T11:20:00.000000Z",
            "updated_at": "2025-08-14T12:00:00.000000Z"
        }
    ]
}
```

**Errores de validación (401 Unauthorized):**
```json
{
    "success": false,
    "message": "No autorizado"
}
```

### 3. Obtener Tarea por ID
**GET** `/api/tasks/{id}`

Obtiene los detalles de una tarea específica asociada al usuario autenticado.

**Headers requeridos:**
```
Authorization: Bearer {token}
```
**Parámetros de ruta:**
- `id` (integer, requerido): ID de la tarea a obtener.

**Respuesta exitosa (200):**
```json
{
     "success": true,
    "message": "Tarea obtenida correctamente",
    "data": {
        "id": 1,
        "title": "Comprar comida para desayuno",
        "description": "Leche, pan y huevos",
        "completed": false,
        "finish_date": null,
        "user_id": 1,
        "created_at": "2025-08-15T03:12:24.000000Z",
        "updated_at": "2025-08-15T03:12:24.000000Z"
    }
}
```

**Tarea no encontrada (404):**
```json
{
    "success": false,
    "message": "Tarea no encontrada"
}
```
