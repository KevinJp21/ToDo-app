import { Text, View } from "react-native";
import { Link } from "expo-router";
import Head from 'expo-router/head'
import '../global.css'
import ToDoLogo from '../assets/logos/to-do-logo.svg'

export default function Register() {
    return (
        <>
            <Head>
                <title>Login - ToDo</title>
            </Head>
            <View className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 flex items-center justify-center p-4">
                <View className="max-w-md w-full">
                    <View className="">
                        <View>
                            <ToDoLogo className="text-red-600"/>
                        </View>
                    </View>

                </View>
                <Link href="/">
                    <Text className="text-red-500 text-4xl underline">
                        Regresar
                    </Text>
                </Link>
            </View>
        </>

    );
}
