import { Text } from "react-native";
import '../global.css'
import { Link } from "expo-router";

export default function index() {
    return(
        <Link href="/register">
        <Text className="text-red-500 text-4xl underline">
            Registrarse
        </Text>
        </Link>
        
    );
}
