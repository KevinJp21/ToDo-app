# ToDo App

Este proyecto es una aplicación sencilla de ToDo con un backend en Laravel y un frontend en React Native utilizando Expo.

---

## Backend (Laravel)

### Requisitos
- PHP >= 8.x
- Composer
- MySQL o cualquier base de datos soportada por Laravel

### Instalación
1. Clonar el repositorio:
   git clone <repo-url>
   cd <backend-folder>
2. Instalar dependencias:
   composer install
3. Configurar el archivo `.env` con tu base de datos y otros parámetros.

### Migraciones y Base de Datos
Laravel utiliza migraciones para crear y actualizar las tablas de la base de datos. Para levantar el proyecto, sigue estos pasos:

1. **Crear migraciones necesarias (Para este caso solo es necesario ejecutar el comando #3 y el #5)**
   php artisan make:migration create_<table-name>_table
2. **Ejecutar todas las migraciones pendientes**:
   php artisan migrate
3. **Eliminar todas las tablas y recrearlas desde cero**:
   php artisan migrate:fresh
4. **Crear un modelo de tabla**:
   php artisan make:model <ModelName>
5. **Sanctum** (para manejo de tokens de acceso personal):
```
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
```

Nota: Laravel agrega automáticamente mensajes de validación, por ejemplo:
["The password field must be at least 8 characters."]

### Configuración del .env
Debes crear un `.env` a partir de `.env.example` y modificar solo los parámetros necesarios para tu entorno local. 
En este proyecto, los cambios principales en el `.env` son los de la base de datos:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=tododb
DB_USERNAME=root
DB_PASSWORD=

### Ejecutar servidor
```
composer run dev
```
El backend quedará disponible típicamente en http://127.0.0.1:8000.

---

## Frontend (React Native con Expo)

### Requisitos
- Node.js
- Expo CLI
- npm o yarn

### Instalación
1. Entrar a la carpeta del frontend:
   cd frontend
2. Instalar dependencias:
```
   npm install
   o
   yarn install
```

### Ejecutar la app
```
npm run web
```

Esto abrirá el Expo Dev Tools en tu navegador y podrás correr la app en:
- Emulador de iOS o Android
- Dispositivo físico usando la app Expo Go

---

## Funcionalidades implementadas

- Registro y login de usuarios con manejo de tokens usando Laravel Sanctum.
- CRUD de tareas (crear, actualizar, eliminar, marcar completadas/pendientes).
- Logout con eliminación del token en frontend y backend.
- UI en React Native con manejo de estado y feedback de acciones (loading en logout, actualización de tareas, etc.).
- Validaciones de backend y manejo de mensajes automáticos de Laravel.

---

## Comandos útiles resumidos

### Backend
```
php artisan migrate:fresh
```
```
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
```

### Frontend
```
npm install
```
```
yarn install
```
```
expo start o npx expo start (si no tienes el CLI de expo instalado)
```

---

Este README cubre desde levantar el backend con Laravel hasta ejecutar la app de Expo en el frontend, con las migraciones y manejo de tokens.
