import { getApiUrl } from "../utils/getApiUrl";
export async function registerUser(payload: {
    username: string;
    email: string;
    password: string;
    password_confirmation: string;
  }) {
    const res = await fetch(`${getApiUrl()}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  
    const data = await res.json();
  
    if (!data.success) {
      // Devolver los mensajes de error tal cual vienen
      throw data.errors;
    }
  
    return data;
  }

  export async function loginUser(payload: {
    email: string;
    password: string;
  }) {
    const res = await fetch(`${getApiUrl()}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  
    const data = await res.json();
  
    if (!data.success) {
        //Retornar objeto con el mensaje de error
      throw data;
    }
  
    return data;
  }