import { Text, View } from "react-native";
import '../global.css'
import { Link } from "expo-router";

export default function index() {
    return (
            <View className="max-w-[90rem] min-h-dvh mx-auto max-[576px]:p-3.5 p-10">
                <Link href="/register">
                    <Text className="text-red-500 text-4xl underline">
                        Registrarse
                    </Text>
                </Link>
            </View>
    );
}
