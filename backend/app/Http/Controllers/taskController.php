<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class taskController extends Controller
{
    public function index(){
        return 'Obteniendo lista de tareas';
    }
}
