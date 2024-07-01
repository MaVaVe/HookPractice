import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import HomePage from "../pages/HomePage";
import cameraPage from "../pages/CameraPage";
import PokeapiPage from "../pages/PokeapiPage";

const Stack = createNativeStackNavigator()

function AppStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Camera" component={cameraPage} />
            <Stack.Screen name="PokeApi" component={PokeapiPage} />
        </Stack.Navigator>
    )

}
export default AppStack