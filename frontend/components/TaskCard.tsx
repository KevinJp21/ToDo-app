import { View, Text, Pressable } from "react-native";

import CheckCircleIcon from "../assets/icons/check.svg";
import PlayIcon from "../assets/icons/play.svg";
import PenLineIcon from "../assets/icons/penLine.svg";
import TrashIcon from "../assets/icons/trash.svg";

type Props = {
  title: string;
  description: string;
  completed: boolean;
  created_at: string;
  updated_at?: string;
};

export default function TaskCard({
  title,
  description,
  completed,
  created_at,
  updated_at,
}: Props) {
  // Usamos updated_at si existe, si no fallback a created_at
  const displayDate = updated_at || created_at;

  return (
    <View className="bg-white p-6 rounded-xl shadow-sm">
      <View className="flex-row justify-between mb-4">
        {completed ? (
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
          <PenLineIcon width={16} height={16} fill="none" stroke="#6b7280" />
          <TrashIcon width={16} height={16} fill="none" stroke="#ef4444" />
        </View>
      </View>

      <Text className="font-semibold text-lg text-gray-900 mb-2">{title}</Text>
      <Text className="text-sm text-gray-600 mb-4">{description}</Text>

      <View className="flex-row items-center space-x-1 text-xs text-gray-500">
        <Text>{displayDate}</Text>
      </View>

      <View className="flex-row space-x-2 mt-4 gap-4">
        <Pressable className="flex-1 py-2 px-3 rounded-lg bg-amber-50">
          <Text className="text-xs text-center text-amber-600 font-medium">
            Pendiente
          </Text>
        </Pressable>
        <Pressable className="flex-1 py-2 px-3 rounded-lg bg-green-50">
          <Text className="text-xs text-center text-green-600 font-medium">
            Completar
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
