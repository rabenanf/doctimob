import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../data/interface";
import { MainMenuTabs } from "./MainMenuTabs";
import { WelcomeScreen } from "../presentations/screens/authentication/WelcomeScreen";
import { LoginScreen } from "../presentations/screens/authentication/LoginScreen";
import { ForgotPasswordScreen } from "../presentations/screens/authentication/ForgotPasswordScreen";
import { VerifyNumberScreen } from "../presentations/screens/authentication/VerifyNumberScreen";
import { OTPVerificationScreen } from "../presentations/screens/authentication/OTPVerificationScreen";
import { CreateNewPasswordScreen } from "../presentations/screens/authentication/CreateNewPassword";
import { CreatePasswordScreen } from "../presentations/screens/authentication/CreatePassword";
import { RegistrationConfirmationScreen } from "../presentations/screens/authentication/RegistrationConfirmationScreen";
import { CreateAccountScreen } from "../presentations/screens/authentication/CreateAccountScreen";
import { RequestDetailsScreen } from "../presentations/screens/requests/MyRequests/RequestDetailsScreen";
import { DoctorProfileScreen } from "../presentations/screens/requests/MyRequests/DoctorProfileScreen";
import { PaymentCreditCardScreen } from "../presentations/screens/requests/MyRequests/PaymentCreditCardScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppStack = () => {

    return (
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="PaymentCreditCard">
            <Stack.Screen name="TabHome" component={MainMenuTabs} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            <Stack.Screen name="VerifyNumber" component={VerifyNumberScreen} />
            <Stack.Screen name="OTPVerification" component={OTPVerificationScreen} />
            <Stack.Screen name="CreateNewPassword" component={CreateNewPasswordScreen} />
            <Stack.Screen name="CreatePassword" component={CreatePasswordScreen} />
            <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
            <Stack.Screen name="RegistrationConfirmation" component={RegistrationConfirmationScreen} />
            <Stack.Screen name="RequestDetails" component={RequestDetailsScreen} />
            <Stack.Screen name= "DoctorProfile" component={DoctorProfileScreen} />
            <Stack.Screen name= "PaymentCreditCard" component={PaymentCreditCardScreen} />
        </Stack.Navigator>
    )
}