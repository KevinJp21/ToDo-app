import { Text, View, TextInput, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link, router } from "expo-router";
import Head from "expo-router/head";
import ToDoLogo from "../assets/logos/to-do-logo.svg";
import { useState } from "react";
import { registerUser } from "./services/auth";
import "../global.css";

export default function Register() {

    //Crear Estados para almacenar los datos del formulario
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [errors, setErrors] = useState<any>({});

    //Manejar envio de datos
    async function handleSubmit() {
        try {
            const response = await registerUser({
                username,
                email,
                password,
                password_confirmation: passwordConfirm,
            });

            console.log("Success: ", response.message);
            router.push('/')
        } catch (errors) {
            setErrors(errors);
        }
    }



    return (
        <View style={{ flex: 1 }}>
            <Head>
                <title>Registrarse - ToDo</title>
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
                            <View className="mt-4">
                                <Text className="text-sm font-medium text-gray-700">Nombre de usuario</Text>
                                <TextInput
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 placeholder:text-gray-400"
                                    placeholder="Nombre de usuario"
                                    value={username}
                                    onChangeText={setUsername}
                                />
                                {errors.username && (
                                    <Text className="text-red-500 text-xs mt-1 pl-1">
                                        {errors.username[0]}
                                    </Text>
                                )}
                            </View>

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

                            <View className="mt-5">
                                <Text className="text-sm font-medium text-gray-700">Confirmar contraseña</Text>
                                <TextInput
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 placeholder:text-gray-400"
                                    placeholder="••••••••"
                                    secureTextEntry
                                    value={passwordConfirm}
                                    onChangeText={setPasswordConfirm}
                                />
                            </View>

                            <Text className="text-gary-700 mt-4 text-sm ">
                                ¿Ya tienes una cuenta?
                                <Link href="/" className="underline cursor-pointer"> Inicia sesión</Link>
                            </Text>

                            <LinearGradient
                                colors={["#6366F1", "#7C3AED"]}
                                start={{ x: 0, y: 0.5 }}
                                end={{ x: 1, y: 0.5 }}
                                style={{ borderRadius: 12 }}
                                className="mt-6"
                            >
                                <Pressable className="w-full px-4 py-3 rounded-xl" onPress={handleSubmit}>
                                    <Text className="text-white text-center font-medium">Comenzar mi productividad</Text>
                                </Pressable>
                            </LinearGradient>

                        </View>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
}
