import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../data/interface";
import { MainMenuTabs } from "./MainMenuTabs";
import { WelcomeScreen } from "../presentations/screens/authentication/WelcomeScreen";
import { LoginScreen } from "../presentations/screens/authentication/LoginScreen";
import { ForgotPasswordScreen } from "../presentations/screens/authentication/ForgotPasswordScreen";
import { VerifyNumberScreen } from "../presentations/screens/authentication/VerifyNumberScreen";
import { OTPVerificationScreen } from "../presentations/screens/authentication/OTPVerificationScreen";
import { CreateNewPasswordScreen } from "../presentations/screens/authentication/CreateNewPasswordScreen";
import { CreatePasswordScreen } from "../presentations/screens/authentication/CreatePasswordScreen";
import { RegistrationConfirmationScreen } from "../presentations/screens/authentication/RegistrationConfirmationScreen";
import { CreateAccountScreen } from "../presentations/screens/authentication/CreateAccountScreen";
import { RequestDetailsScreen } from "../presentations/screens/requests/MyRequests/RequestDetailsScreen";
import { DoctorProfileScreen } from "../presentations/screens/requests/MyRequests/DoctorProfileScreen";
import { PaymentCreditCardScreen } from "../presentations/screens/requests/Payment/PaymentCreditCardScreen";
import { AppointmentConfirmedScreen } from "../presentations/screens/requests/Payment/AppointmentConfirmedScreen";
import { PaymentCashScreen } from "../presentations/screens/requests/Payment/PaymentCashScreen";
import { PaymentQRCodeScreen } from "../presentations/screens/requests/Payment/PaymentQRCodeScreen";
import { QRCodeScreen } from "../presentations/screens/requests/Payment/QRCodeScreen";
import { NewRequestConfirmScreen } from "../presentations/screens/requests/NewRequest/NewRequestConfirmScreen";
import { AppointmentDetailScreen } from "../presentations/screens/appointments/AppointmentDetailScreen";
import { ChooseAccountTypeScreen } from "../presentations/screens/authentication/ChooseAccountTypeScreen";
import { AppointmentChatScreen } from "../presentations/screens/appointments/AppointmentChatScreen";
import { AppointmentCallScreen } from "../presentations/screens/appointments/AppointmentCallScreen";
import { AppointmentFeedbackScreen } from "../presentations/screens/appointments/AppointmentFeedbackScreen";
import { PaymentMethodScreen } from "../presentations/screens/settings/PaymentMethodScreen";
import { ChangePasswordScreen } from "../presentations/screens/settings/ChangePasswordScreen";
import { FamilyMemberScreen } from "../presentations/screens/settings/FamilyMemberScreen";
import { ProfileScreen } from "../presentations/screens/settings/ProfileScreen";
import { MedicalRecordListScreen } from "../presentations/screens/records/RecordsListScreen";
import { MedicalRecordDetailScreen } from "../presentations/screens/records/RecordDetailScreen";
import { NotificationsScreen } from "../presentations/screens/notifications";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Welcome"
    >
      <Stack.Screen name="TabHome" component={MainMenuTabs} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="VerifyNumber" component={VerifyNumberScreen} />
      <Stack.Screen name="OTPVerification" component={OTPVerificationScreen} />
      <Stack.Screen
        name="CreateNewPassword"
        component={CreateNewPasswordScreen}
      />
      <Stack.Screen name="CreatePassword" component={CreatePasswordScreen} />
      <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
      <Stack.Screen
        name="RegistrationConfirmation"
        component={RegistrationConfirmationScreen}
      />
      <Stack.Screen name="RequestDetails" component={RequestDetailsScreen} />
      <Stack.Screen name="DoctorProfile" component={DoctorProfileScreen} />
      <Stack.Screen
        name="PaymentCreditCard"
        component={PaymentCreditCardScreen}
      />
      <Stack.Screen
        name="AppointmentConfirmed"
        component={AppointmentConfirmedScreen}
      />
      <Stack.Screen name="PaymentCash" component={PaymentCashScreen} />
      <Stack.Screen name="PaymentQRCode" component={PaymentQRCodeScreen} />
      <Stack.Screen name="QRCode" component={QRCodeScreen} />
      <Stack.Screen
        name="NewRequestConfirm"
        component={NewRequestConfirmScreen}
      />
      <Stack.Screen
        name="AppointmentDetail"
        component={AppointmentDetailScreen}
      />
      <Stack.Screen
        name="ChooseAccountType"
        component={ChooseAccountTypeScreen}
      />
      <Stack.Screen name="AppointmentChat" component={AppointmentChatScreen} />
      <Stack.Screen name="AppointmentCall" component={AppointmentCallScreen} />
      <Stack.Screen
        name="AppointmentFeedback"
        component={AppointmentFeedbackScreen}
      />
      <Stack.Screen name="PaymentMethod" component={PaymentMethodScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen name="FamilyMember" component={FamilyMemberScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen
        name="MedicalRecordList"
        component={MedicalRecordListScreen}
      />
      <Stack.Screen
        name="MedicalRecordDetail"
        component={MedicalRecordDetailScreen}
      />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
    </Stack.Navigator>
  );
};
