import { NavigationContainer } from "@react-navigation/native";
import i18next from 'i18next';
import { initReactI18next } from "react-i18next";
import enTranslations from './app/i18n/en.json';
import { AppStack } from "./app/routers/AppStack";
import { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";

i18next.use(initReactI18next).init({

    resources: {
        en: { translation: enTranslations },
        // Add more languages here
    }
    ,
    compatibilityJSON: 'v4',
    lng: 'en', // Set the default language
    interpolation: { escapeValue: false }, // React already escapes by default
});

function App(): React.JSX.Element {

    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>

    );
}

export default App;
