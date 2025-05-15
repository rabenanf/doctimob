import LinearGradient from "react-native-linear-gradient";
import React, { JSX } from "react";
import { Image, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../data/interface";
import { styles } from './styles';
import AppLayout from "../../../layout";
import { Theme } from "../../../../resources/themes";
import Logo from '../../../../resources/assets/images/logo.png'
import { RoundedButton } from "../../../components/RoundedButton";


type Props = NativeStackScreenProps<RootStackParamList, 'RegistrationConfirmation'>;

export const RegistrationConfirmationScreen = ({navigation}: Props): JSX.Element => {

    const { t } = useTranslation();

    const goToHome = () => {
        navigation.navigate('TabHome');
    }

    return (
        <AppLayout>
            <LinearGradient 
                style={styles.container} 
                colors={[Theme.BACKGROUND_COLOR, 'white']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                locations={[0, 0.40]}
                >
                <View style={styles.imageContainer}>
                    <Image style={styles.image} resizeMode="contain" source={Logo}/> 
                </View>
                <View style={styles.btnContainer}>
                    <Text style={styles.welcomeText}> {t('RegistrationConfirm.title')} </Text>
                    <Text style={styles.descriptionText}> {t('RegistrationConfirm.description')} </Text>
                    <RoundedButton 
                        isPrimary={true}
                        onButtonPress={ () => { goToHome()}} 
                        textBtn={t('RegistrationConfirm.go')}
                    />
                </View>
            </LinearGradient>
        </AppLayout>    

    )

}