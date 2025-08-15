import { View, Text, Pressable, TextInput, ScrollView } from "react-native"
import { LinearGradient } from "expo-linear-gradient";
import TagIcon from '../assets/icons/tag.svg'
import CheckCircleIcon from '../assets/icons/check.svg'
import PlusIcon from '../assets/icons/plus.svg'
import PlayIcon from '../assets/icons/play.svg'
import Head from "expo-router/head";
import TaskCard from "@/components/TaskCard";
export default function Dashboard() {
    return (
        <View style={{ flex: 1 }}>
            <Head>
                <title>Dashboard - ToDo</title>
            </Head>
            <ScrollView className="w-full px-4 py-8 min-h-screen transition-colors duration-300 bg-gray-50">
                {/* Barra superior */}
                <View className="flex flex-col sm:flex-row gap-4 mb-8 items-center justify-between">
                    <View className="flex flex-col sm:flex-row gap-4">
                        {/* Input de búsqueda */}
                        <View className="relative">
                            <TextInput
                                placeholder="Buscar tareas..."
                                className="px-4 py-2 rounded-lg border bg-white border-gray-200 text-gray-900 placeholder-gray-500 w-64"
                            />
                        </View>

                        {/* Filtros */}
                        <View className="flex flex-row space-x-2">
                            <Pressable className="px-4 py-2 rounded-lg bg-indigo-500 shadow-lg">
                                <Text className="text-white text-sm font-medium">Todas</Text>
                            </Pressable>
                            <Pressable className="px-4 py-2 rounded-lg">
                                <Text className="text-gray-600 text-sm font-medium">Pendientes</Text>
                            </Pressable>
                            <Pressable className="px-4 py-2 rounded-lg">
                                <Text className="text-gray-600 text-sm font-medium">Completadas</Text>
                            </Pressable>
                        </View>
                    </View>

                    {/* Botón nueva tarea */}
                    <LinearGradient colors={["#6366F1", "#7C3AED"]}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        style={{ borderRadius: 5 }}
                        className="px-6 py-2">
                        <Pressable className="flex flex-row items-center">
                            <PlusIcon stroke="#fff" />
                            <Text className="text-white font-medium text-base">Nueva tarea</Text>
                        </Pressable>
                    </LinearGradient>

                </View>

                {/* Estadísticas */}
                <View className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                    {/* Total */}
                    <View className="bg-white p-6 rounded-xl drop-shadow-sm border border-gray-100">
                        <View className="flex-row justify-between items-center">
                            <View>
                                <Text className="text-gray-600 text-sm">Total</Text>
                                <Text className="text-2xl font-bold text-gray-900">3</Text>
                            </View>
                            <LinearGradient colors={["#6366F1", "#7C3AED"]}
                                start={{ x: 0, y: 0.5 }}
                                end={{ x: 1, y: 0.5 }}
                                style={{ borderRadius: 10 }}
                                className="p-3">
                                <TagIcon stroke="#fff" />
                            </LinearGradient>

                        </View>
                    </View>
                    {/* Pendientes */}
                    <View className="bg-white p-6 rounded-xl drop-shadow-sm border border-gray-100">
                        <View className="flex-row justify-between items-center">
                            <View>
                                <Text className="text-gray-600 text-sm">Pendientes</Text>
                                <Text className="text-2xl font-bold text-gray-900">3</Text>
                            </View>
                            <LinearGradient colors={["#3b82f6", "#0891b2"]}
                                start={{ x: 0, y: 0.5 }}
                                end={{ x: 1, y: 0.5 }}
                                style={{ borderRadius: 10 }}
                                className="p-3">
                                <PlayIcon stroke="#fff" />
                            </LinearGradient>

                        </View>
                    </View>
                    {/* Completadas */}
                    <View className="bg-white p-6 rounded-xl drop-shadow-sm border border-gray-100">
                        <View className="flex-row justify-between items-center">
                            <View>
                                <Text className="text-gray-600 text-sm">Completadas</Text>
                                <Text className="text-2xl font-bold text-gray-900">1</Text>
                            </View>
                            <LinearGradient colors={["#22c55e", "#059669"]}
                                start={{ x: 0, y: 0.5 }}
                                end={{ x: 1, y: 0.5 }}
                                style={{ borderRadius: 10 }}
                                className="p-3">
                                <CheckCircleIcon stroke="#fff" />
                            </LinearGradient>
                        </View>
                    </View>
                </View>

                {/* Lista de tareas */}
                <View className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <TaskCard
                        title="Configurar base de datos"
                        description="Crear migrations y modelos"
                        completed={false}
                        created_at="18/01/2025"
                        updated_at="20/01/2025"
                    />
                </View>
            </ScrollView>
        </View>
    )
}