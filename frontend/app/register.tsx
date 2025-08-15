import { Text, View, TextInput, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import Head from "expo-router/head";
import ToDoLogo from "../assets/logos/to-do-logo.svg";
import "../global.css";

export default function Register() {
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
                            style={{ width: 64, height: 64, borderRadius: 16, marginBottom: 16, alignSelf: "center", justifyContent: "center", alignItems: "center" }}
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
                                />
                            </View>

                            <View className="mt-5">
                                <Text className="text-sm font-medium text-gray-700">Correo electrónico</Text>
                                <TextInput
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 placeholder:text-gray-400"
                                    placeholder="tu@email.com"
                                    keyboardType="email-address"
                                />
                            </View>

                            <View className="mt-5">
                                <Text className="text-sm font-medium text-gray-700">Contraseña</Text>
                                <TextInput
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 placeholder:text-gray-400"
                                    placeholder="••••••••"
                                    secureTextEntry
                                />
                            </View>

                            <View className="mt-5">
                                <Text className="text-sm font-medium text-gray-700">Confirmar contraseña</Text>
                                <TextInput
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 placeholder:text-gray-400"
                                    placeholder="••••••••"
                                    secureTextEntry
                                />
                            </View>

                            <Text className="text-gary-700 mt-4 text-sm ">
                            ¿Ya tienes una cuenta?
                                <Link href="/register" className="underline cursor-pointer"> Inicia sesión</Link>
                            </Text>

                            <LinearGradient
                                colors={["#6366F1", "#7C3AED"]}
                                start={{ x: 0, y: 0.5 }}
                                end={{ x: 1, y: 0.5 }}
                                style={{ borderRadius: 12 }}
                                className="mt-6"
                            >
                                <Pressable className="w-full px-4 py-3 rounded-xl">
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
