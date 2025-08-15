<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\taskController;
use App\Http\Controllers\userController;

// Rutas públicas (sin autenticación)
Route::post('/register', [userController::class, 'register']);
