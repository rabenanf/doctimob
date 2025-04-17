import LinearGradient from "react-native-linear-gradient";
import React, { JSX, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useTranslation } from "react-i18next";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../data/interface";
import { styles } from './styles';
import AppLayout from "../../../layout";
import { Theme } from "../../../../resources/themes";
import Logo from '../../../../resources/assets/images/logo.png'
import { RoundedButton } from "../../../components/RoundedButton";
import PinCode from "../../../components/PinCode";


type Props = NativeStackScreenProps<RootStackParamList, 'OTPVerification'>;

export const OTPVerificationScreen = ({navigation}: Props): JSX.Element => {

    const { t } = useTranslation();

    const [pinCode, setPinCode] = useState('');

    const verifyCode = () => {
        navigation.navigate('CreateAccount');
    }

    return (
        <AppLayout>
            <LinearGradient 
                style={styles.container} 
                colors={[Theme.PRIMARY_COLOR, 'white']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                locations={[0, 0.78]}
                >
                <KeyboardAwareScrollView>    
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} resizeMode="contain" source={Logo}/> 
                    </View>
                    
                    <View style={styles.formContainer}>
                        <View style={styles.textContainer} >
                            <Text style={styles.welcomeText}> {t('OTP.title')} </Text>
                            <Text style={styles.descriptionText}> {t('OTP.description')} </Text>
                        </View>
                        <View style={styles.form}>
                            <PinCode 
                                otpCodeChanged={setPinCode}
                            />
                        </View>
                    </View>
                    <View style={styles.resend}>
                        <Text style={styles.txtNotReceive}> {t('OTP.notReceive')} </Text>
                        <TouchableOpacity>
                            <Text style={styles.txtResend}> {t('OTP.resend')} </Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>
                <View style={styles.btnContainer}>
                    <RoundedButton 
                        isPrimary={true}
                        onButtonPress={ () => {verifyCode()}} 
                        textBtn={t('OTP.verify')}
                    />
                </View>
            </LinearGradient>
        </AppLayout>
    )

}