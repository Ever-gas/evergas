import { createStackNavigator } from "@react-navigation/stack";


import SignIn from "../screens/SignIn/SignIn";
import SignUp from "../screens/SignUp/SignUp";
import ForgotPassword from "../screens/ForgotPassword/ForgotPassword";
import ResetPassword from "../screens/ResetPassword/ResetPassword";
import Verification from "../screens/Verification/Verification";

import Dashboard from "../screens/Dashboard/Dashboard";
import OrderGas from "../screens/OrderGas/OrderGas";
import PurchaseGas from "../screens/PurchaseGas/PurchaseGas";
import ConfirmPurchase from "../screens/ConfirmPurchase/ConfirmPurchase";
import OrderSteps from "../screens/OrderSteps/OrderSteps";

import Welcome from "../screens/WelcomeScreen/Welcome";

const Stack = createStackNavigator()

const AppNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
            <Stack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{ headerShown: false }} />
            <Stack.Screen name='ResetPassword' component={ResetPassword} options={{ headerShown: false }} />
            <Stack.Screen name='Verification' component={Verification} options={{ headerShown: false }} />
            <Stack.Screen name='Dashboard' component={Dashboard} options={{ headerShown: false }} />
            <Stack.Screen name='OrderGas' component={OrderGas} options={{ headerShown: false }} />
            <Stack.Screen name='PurchaseGas' component={PurchaseGas} options={{ headerShown: false }} />
            <Stack.Screen name='ConfirmPurchase' component={ConfirmPurchase} options={{ headerShown: false }} />
            <Stack.Screen name='OrderSteps' component={OrderSteps} options={{ headerShown: false }} />
        </Stack.Navigator>

    )
}





const screens = {
    SignIn: {
        screen: SignIn
    },
    SignUp: {
        screen: SignUp
    },
    ForgotPassword: {
        screen: ForgotPassword
    },
    ResetPassword: {
        screen: ResetPassword
    },
    Verification: {
        screen: Verification
    },
    Dashboard : {
        screen: Dashboard
    }
}



export default AppNavigation