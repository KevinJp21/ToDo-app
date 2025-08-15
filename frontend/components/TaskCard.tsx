import { useState } from "react";
import { View, Text, Pressable, TextInput, Alert } from "react-native";

import CheckCircleIcon from "../assets/icons/check.svg";
import PlayIcon from "../assets/icons/play.svg";
import PenLineIcon from "../assets/icons/penLine.svg";
import TrashIcon from "../assets/icons/trash.svg";

import { updateTask } from "@/services/taskService";

type Props = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  created_at: string;
  updated_at?: string;
  onDelete?: (id: number) => void;
  onUpdate?: (task: any) => void; // callback para actualizar el estado en el Dashboard
};

export default function TaskCard({
  id,
  title,
  description,
  completed,
  created_at,
  updated_at,
  onDelete,
  onUpdate,
}: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [localTitle, setLocalTitle] = useState(title);
  const [localDescription, setLocalDescription] = useState(description);
  const [localCompleted, setLocalCompleted] = useState(completed);

  const displayDate = updated_at || created_at;

  const handleSave = async () => {
    try {
      const updated = await updateTask(id, {
        title: localTitle,
        description: localDescription,
        completed: localCompleted,
      });
      onUpdate && onUpdate(updated);
      setIsEditing(false);
    } catch (err: any) {
      Alert.alert("Error", err.message || "No se pudo actualizar la tarea");
    }
  };

  const handleStatusChange = async (status: boolean) => {
    setLocalCompleted(status);
    try {
      const updated = await updateTask(id, { completed: status });
      onUpdate && onUpdate(updated);
    } catch (err: any) {
      Alert.alert("Error", err.message || "No se pudo actualizar el estado");
      setLocalCompleted(!status); // revertir en caso de error
    }
  };

  return (
    <View className="bg-white p-6 rounded-xl shadow-sm">
      <View className="flex-row justify-between mb-4">
        {localCompleted ? (
          <View className="px-3 py-1 rounded-full flex-row items-center space-x-1 bg-green-50 gap-1">
            <CheckCircleIcon width={16} height={16} fill="none" stroke="#22c55e" />
            <Text className="text-xs text-green-600">Completada</Text>
          </View>
        ) : (
          <View className="px-3 py-1 rounded-full flex-row items-center space-x-1 bg-blue-50 gap-1">
            <PlayIcon width={16} height={16} fill="none" stroke="#2563eb" />
            <Text className="text-xs text-blue-600">Pendiente</Text>
          </View>
        )}

        <View className="flex-row space-x-1 gap-2">
          <Pressable onPress={() => setIsEditing(!isEditing)}>
            <PenLineIcon width={16} height={16} fill="none" stroke="#6b7280" />
          </Pressable>
          <Pressable onPress={() => onDelete && onDelete(id)}>
            <TrashIcon width={16} height={16} fill="none" stroke="#ef4444" />
          </Pressable>
        </View>
      </View>

      {isEditing ? (
        <>
          <TextInput
            value={localTitle}
            onChangeText={setLocalTitle}
            className="font-semibold text-lg text-gray-900 mb-2 border p-1 rounded"
          />
          <TextInput
            value={localDescription}
            onChangeText={setLocalDescription}
            className="text-sm text-gray-600 mb-4 border p-1 rounded"
          />
          <Pressable
            onPress={handleSave}
            className="bg-indigo-500 py-2 px-3 rounded-lg mb-4"
          >
            <Text className="text-white text-center font-medium">Guardar</Text>
          </Pressable>
        </>
      ) : (
        <>
          <Text className="font-semibold text-lg text-gray-900 mb-2">{localTitle}</Text>
          <Text className="text-sm text-gray-600 mb-4">{localDescription}</Text>
        </>
      )}

      <View className="flex-row items-center space-x-1 text-xs text-gray-500 mb-4">
        <Text>{displayDate}</Text>
      </View>

      <View className="flex-row space-x-2 mt-4 gap-4">
        <Pressable
          className="flex-1 py-2 px-3 rounded-lg bg-amber-50"
          onPress={() => handleStatusChange(false)}
        >
          <Text className="text-xs text-center text-amber-600 font-medium">Pendiente</Text>
        </Pressable>
        <Pressable
          className="flex-1 py-2 px-3 rounded-lg bg-green-50"
          onPress={() => handleStatusChange(true)}
        >
          <Text className="text-xs text-center text-green-600 font-medium">Completar</Text>
        </Pressable>
      </View>
    </View>
  );
}
