import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../screens/Dashboard/Dashboard";


const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name='Dashboard' component={Dashboard} options={{ headerShown: false }} />  */}
        </Stack.Navigator>

    )
}
export default MainStack;