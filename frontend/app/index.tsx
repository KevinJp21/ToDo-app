import { Text, View, TextInput, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Head from "expo-router/head";
import ToDoLogo from "../assets/logos/to-do-logo.svg";
import { Link, router } from "expo-router";
import { useState } from "react";
import { loginUser } from "./services/auth";
import * as SecureStore from 'expo-secure-store';
import '../global.css'
import { saveToken } from "./utils/utils/tokenStorage";

export default function index() {

    //Crear Estados para almacenar los datos del formulario
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<any>({});

    //Manejar envio de datos
    async function handleSubmit() {
        try {
            const response = await loginUser({
                email,
                password,
            });

            // Guarda el token de forma segura
            await saveToken(response.data.token)

            console.log("Success: ", response.message);
            router.push('/')
        } catch (err: any) {
            // si err tiene "errors" => error por validación
            if (err.errors) {
                setErrors(err.errors);
            } else if (err.message) {
                // error general (credenciales incorrectas)
                setErrors({ message: err.message });
            }
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <Head>
                <title>Login - ToDo</title>
            </Head>
            <LinearGradient
                colors={["#EEF2FF", "#FFFFFF", "#ECFEFF"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 16 }}
            >
                <View className="max-w-md w-full">
                    <View className="mb-8">
                        <LinearGradient
                            colors={["#6366F1", "#7C3AED"]}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            style={{ width: 64, height: 64, borderRadius: 100, marginBottom: 16, alignSelf: "center", justifyContent: "center", alignItems: "center" }}
                        >
                            <ToDoLogo width={32} height={32} fill="none" stroke="#fff" />
                        </LinearGradient>

                        <Text className="text-center text-3xl font-bold text-gray-900 mb-2">TaskFlow</Text>
                        <Text className="text-center text-base text-gray-600">Organiza tu vida con estilo</Text>
                    </View>

                    <View className="bg-white/80 rounded-2xl shadow-xl border border-white/20 p-8">
                        <View className="space-y-6">
                        {errors.message && (
                                <Text className="text-red-500 text-xl mt-2 text-center">
                                    {errors.message}
                                </Text>
                            )}
                            <View className="mt-5">
                                <Text className="text-sm font-medium text-gray-700">Correo electrónico</Text>
                                <TextInput
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 placeholder:text-gray-400"
                                    placeholder="tu@email.com"
                                    keyboardType="email-address"
                                    value={email}
                                    onChangeText={setEmail}
                                />
                                {errors.email && (
                                    <Text className="text-red-500 text-xs mt-1">
                                        {errors.email[0]}
                                    </Text>
                                )}
                            </View>

                            <View className="mt-5">
                                <Text className="text-sm font-medium text-gray-700">Contraseña</Text>
                                <TextInput
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 placeholder:text-gray-400"
                                    placeholder="••••••••"
                                    secureTextEntry
                                    value={password}
                                    onChangeText={setPassword}
                                />
                                {errors.password && (
                                    <Text className="text-red-500 text-xs mt-1">
                                        {errors.password[0]}
                                    </Text>
                                )}
                            </View>

                            <Text className="text-gary-700 mt-4 text-sm ">
                                ¿Aún no tienes cuenta?
                                <Link href="/register" className="underline cursor-pointer"> ¡Crea una y comienza a organizar tus tareas!</Link>
                            </Text>

                            <LinearGradient
                                colors={["#6366F1", "#7C3AED"]}
                                start={{ x: 0, y: 0.5 }}
                                end={{ x: 1, y: 0.5 }}
                                style={{ borderRadius: 12 }}
                                className="mt-6"
                            >
                                <Pressable className="w-full px-4 py-3 rounded-xl" onPress={handleSubmit}>
                                    <Text className="text-white text-center font-medium">Iniciar sesión</Text>
                                </Pressable>
                            </LinearGradient>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
}
