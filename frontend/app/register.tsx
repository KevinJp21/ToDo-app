import { Text, View, TextInput, Pressable } from "react-native";
import { Link } from "expo-router";
import Head from 'expo-router/head'
import '../global.css'
import ToDoLogo from '../assets/logos/to-do-logo.svg'

export default function Register(){
    return (
        <View >
            <Head>
                <title>Login - ToDo</title>
            </Head>
            <View className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 flex items-center justify-center p-4">
                <View className="max-w-md w-full">
                    <View className="mb-8 animate-fade-in">
                        <View className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl mb-4 shadow-lg mx-auto">
                            <ToDoLogo className="w-8 h-8 text-white" />
                        </View>
                        <Text className="text-center text-3xl font-bold text-gray-900 mb-2">
                            TaskFlow
                        </Text>
                        <Text className="text-center text-base text-gray-600">
                            Organiza tu vida con estilo
                        </Text>
                    </View>
                    <View className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
                        <View className="space-y-6">
                            <View className="space-y-2">
                                <Text className="text-sm font-medium text-gray-700">Nombre completo</Text>
                                <TextInput
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 placeholder:text-gray-400"
                                    placeholder="Tu nombre completo"
                                />
                            </View>
                            <View className="space-y-2">
                                <Text className="text-sm font-medium text-gray-700">Correo electrónico</Text>
                                <TextInput
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 placeholder:text-gray-400"
                                    placeholder="tu@email.com"
                                    keyboardType="email-address"
                                />
                            </View>
                            <View className="space-y-2">
                                <Text className="text-sm font-medium text-gray-700">Contraseña</Text>
                                <TextInput
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 placeholder:text-gray-400"
                                    placeholder="••••••••"
                                    secureTextEntry
                                />
                            </View>
                            <Pressable className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 py-3 px-4 rounded-xl">
                                <Text className="text-white font-medium text-center">Comenzar mi productividad</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </View>

    );
}
