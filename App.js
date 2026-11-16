import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CameraScreen from "./src/components/screens/CameraScreen";
import LocationScreen from "./src/components/screens/LocationScreen";
import ModuleAddScreen from "./src/components/screens/ModuleAddScreen";
import ModuleListScreen from "./src/components/screens/ModuleListScreen";
import ModuleModifyScreen from "./src/components/screens/ModuleModifyScreen";
import ModuleViewScreen from "./src/components/screens/ModuleViewScreen";

const Stack = createNativeStackNavigator();

export const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="ModuleListScreen"
                screenOptions={{
                    headerStyle: { backgroundColor: "black" },
                    headerTintColor: "white",
                }}
            >
                <Stack.Screen
                    name="ModuleListScreen"
                    component={ModuleListScreen}
                    options={{ title: "List modules" }}
                />
                <Stack.Screen
                    name="ModuleAddScreen"
                    component={ModuleAddScreen}
                    options={{ title: "Add module" }}
                />
                <Stack.Screen
                    name="ModuleViewScreen"
                    component={ModuleViewScreen}
                    options={{ title: "View module" }}
                />
                <Stack.Screen
                    name="ModuleModifyScreen"
                    component={ModuleModifyScreen}
                    options={{ title: "Modify module" }}
                />
                <Stack.Screen
                    name="CameraScreen"
                    component={CameraScreen}
                    options={{ title: "Capture picture" }}
                />
                <Stack.Screen
                    name="LocationScreen"
                    component={LocationScreen}
                    options={{ title: "Get location" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
