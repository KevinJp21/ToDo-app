<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class taskController extends Controller
{

    // Crear tarea
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'finish_date' => 'nullable|date',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Error de validación',
                'errors' => $validator->errors()
            ], 422);
        }

        $task = Task::create([
            'title' => $request->title,
            'description' => $request->description,
            'finish_date' => $request->finish_date,
            'user_id' => $request->user()->id, // Pasar token de sesion en lugar de id
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Tarea creada correctamente',
            'data' => $task
        ], 201);
    }

    // Obtener tareas del usuario autenticado
    public function index(Request $request)
    {
        $tasks = Task::where('user_id', $request->user()->id)->get();

        return response()->json([
            'success' => true,
            'message' => 'Lista de tareas del usuario',
            'data' => $tasks
        ], 200);
    }

    // Obtener tarea del usaurio logeado por ID
    public function show(Request $request, $id)
    {
        // Buscar tarea por id y user_id (token)
        $task = Task::where('id', $id)
            ->where('user_id', $request->user()->id)
            ->first();

        if (!$task) {
            return response()->json([
                'success' => false,
                'message' => 'Tarea no encontrada'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'message' => 'Tarea obtenida correctamente',
            'data' => $task
        ], 200);
    }
}
