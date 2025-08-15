<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\taskController;
use App\Http\Controllers\userController;

// Rutas públicas (sin autenticación)
Route::post('/register', [userController::class, 'register']);
Route::post('/login', [userController::class, 'login']);

// Rutas protegidas (requieren autenticación)
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [userController::class, 'logout']);

    //Rutas CRUD de Tareas
    Route::post('/tasks', [taskController::class, 'store']);
    Route::get('/tasks', [taskController::class, 'index']);
    Route::get('/tasks/{id}', [taskController::class, 'show']);
    Route::put('/tasks/{id}', [taskController::class, 'update']);
});
