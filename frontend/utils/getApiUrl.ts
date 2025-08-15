import { Platform } from "react-native";

//Funcion para obtener la url locahost dinamico
export function getApiUrl() {
  // En Android emulador se usa 10.0.2.2
  if (Platform.OS === "android") {
    return "http://10.0.2.2:8000";
  }
  // iOS y Web pueden usar localhost/127.0.0.1
  return "http://127.0.0.1:8000";
}