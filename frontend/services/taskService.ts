import { getToken } from "@/utils/tokenStorage";
import { getApiUrl } from "@/utils/getApiUrl";

export interface TaskData {
  title: string;
  description?: string;
  finish_date?: string | null;
}

export interface Task extends TaskData {
  id: number;
  completed: boolean;
  user_id: number;
  created_at: string;
  updated_at: string;
}

type UpdateTaskPayload = {
    title?: string;
    description?: string;
    finish_date?: string;
    completed?: boolean;
  };

export async function createTask(task: TaskData) {
  try {
    const token = await getToken();
    if (!token) throw new Error("No se encontró el token de usuario");

    const response = await fetch(`${getApiUrl()}/api/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(task),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Error al crear la tarea");
    }

    return data.data; // retorna la tarea creada
  } catch (error: any) {
    console.error("Error createTask:", error.message || error);
    throw error;
  }
}

export async function getTasks(): Promise<Task[]> {
  try {
    const token = await getToken();
    if (!token) throw new Error("No se encontró el token de usuario");

    const response = await fetch(`${getApiUrl()}/api/tasks`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Error al obtener las tareas");
    }

    return data.data; // retorna la lista de tareas
  } catch (error: any) {
    console.error("Error getTasks:", error.message || error);
    throw error;
  }
}

export async function updateTask(id: number, payload: UpdateTaskPayload): Promise<Task> {
    try {
      const token = await getToken();
      if (!token) throw new Error("No se encontró el token de usuario");
  
      const response = await fetch(`${getApiUrl()}/api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Error al actualizar la tarea");
      }
  
      return data.data; // retorna la tarea actualizada
    } catch (error: any) {
      console.error("Error updateTask:", error.message || error);
      throw error;
    }
  }
  

export async function deleteTask(id: number) {
  try {
    const token = await getToken();
    if (!token) throw new Error("No user token found");

    const response = await fetch(`${getApiUrl()}/api/tasks/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Solo parseamos JSON si hay contenido
    let data: any = null;
    const text = await response.text();
    if (text) {
      data = JSON.parse(text);
    }

    if (!response.ok) {
      throw new Error(data?.message || "Error deleting task");
    }

    return data || { success: true };
  } catch (error: any) {
    console.error("Error deleteTask:", error.message || error);
    throw error;
  }
}
