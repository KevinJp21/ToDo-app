import { getToken } from "@/utils/tokenStorage";
import { getApiUrl } from "@/utils/getApiUrl";

export interface TaskData {
  title: string;
  description?: string;
  finish_date?: string | null;
}

export async function createTask(task: TaskData) {
  try {
    const token = await getToken();
    if (!token) throw new Error('No se encontró el token de usuario');

    const response = await fetch(`${getApiUrl()}/api/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(task),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Error al crear la tarea');
    }

    return data.data; // retorna la tarea creada
  } catch (error: any) {
    console.error('Error createTask:', error.message || error);
    throw error;
  }
}
