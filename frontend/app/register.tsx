import { Text } from "react-native";
import { Link } from "expo-router";
import '../global.css'

export default function Register() {
    return(
        <Link href="/">
        <Text className="text-red-500 text-4xl underline">
            Regresar
        </Text>
        </Link>
    );
}
