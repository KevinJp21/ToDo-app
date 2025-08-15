import { Platform } from "react-native";
import * as SecureStore from "expo-secure-store";
import Cookies from "js-cookie";

export async function saveToken(token: string) {
  if (Platform.OS === "web") {
    // Se guarda como cookie en el navegador
    Cookies.set("token", token);
  } else {
    // Se guarda de forma segura en móvil
    await SecureStore.setItemAsync("token", token);
  }
}

export async function getToken(): Promise<string | null> {
  if (Platform.OS === "web") {
    return Cookies.get("token") ?? null;
  } else {
    return await SecureStore.getItemAsync("token");
  }
}

export async function destroyToken() {
  if (Platform.OS === "web") {
    Cookies.remove("token");
  } else {
    await SecureStore.deleteItemAsync("token");
  }
}