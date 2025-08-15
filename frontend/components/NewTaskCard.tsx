import { useState } from "react";
import { View, Text, TextInput, Pressable, Alert } from "react-native";
import { createTask, TaskData, Task } from "@/services/taskService";
import PlusIcon from "../assets/icons/plus.svg";

type Props = {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>; // Recibimos setTasks de Dashboard
};

export default function NewTaskCard({ setTasks }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreateTask = async () => {
    if (!title.trim()) {
      Alert.alert("Error", "El título es obligatorio");
      return;
    }

    setLoading(true);
    try {
      const newTask: TaskData = { title, description };
      const created = await createTask(newTask);
      Alert.alert("Éxito", "Tarea creada correctamente");
      setTitle("");
      setDescription("");

      // Actualizamos el estado en Dashboard
      setTasks(prev => [created, ...prev]);
    } catch (error: any) {
      Alert.alert("Error", error.message || "No se pudo crear la tarea");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="bg-white p-6 rounded-xl shadow-sm mb-4">
      <TextInput
        placeholder="Título de la tarea"
        value={title}
        onChangeText={setTitle}
        className="border border-gray-200 rounded-lg px-3 py-2 mb-2"
      />
      <TextInput
        placeholder="Descripción de la tarea"
        value={description}
        onChangeText={setDescription}
        className="border border-gray-200 rounded-lg px-3 py-2 mb-4"
      />
      <Pressable
        className="flex-row justify-center items-center bg-indigo-500 px-4 py-2 rounded-lg"
        onPress={handleCreateTask}
        disabled={loading}
      >
        <PlusIcon stroke="#fff" width={16} height={16} />
        <Text className="text-white font-medium ml-2">
          {loading ? "Creando..." : "Crear tarea"}
        </Text>
      </Pressable>
    </View>
  );
}
