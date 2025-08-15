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