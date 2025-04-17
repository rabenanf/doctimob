import LinearGradient from "react-native-linear-gradient";
import React, { JSX, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useTranslation } from "react-i18next";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import CountryCodeDropdownPicker from 'react-native-dropdown-country-picker';
import { RootStackParamList } from "../../../../data/interface";
import { styles } from './styles';
import AppLayout from "../../../layout";
import { Theme } from "../../../../resources/themes";
import Logo from '../../../../resources/assets/images/logo.png'
import { RoundedButton } from "../../../components/RoundedButton";


type Props = NativeStackScreenProps<RootStackParamList, 'VerifyNumber'>;

export const VerifyNumberScreen = ({navigation}: Props): JSX.Element => {

    const { t } = useTranslation();
    const [selected, setSelected] = useState('+91');
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');

    const sendNumber = () => {
        navigation.navigate('OTPVerification');
    }

    const goToLogin = () => {
        navigation.navigate('Login');
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
                            <Text style={styles.welcomeText}> {t('VerifyNumber.title')} </Text>
                            <Text style={styles.descriptionText}> {t('VerifyNumber.description')} </Text>
                        </View>
                        <View style={styles.form}>
                            <CountryCodeDropdownPicker 
                                selected={selected} 
                                setSelected={setSelected}
                                setCountryDetails={setCountry} 
                                phone={phone} 
                                setPhone={setPhone} 
                                countryCodeTextStyles={{fontSize: 13}}
                            />
                        </View>
                    </View>
                    <View style={styles.login}>
                        <Text style={styles.txtHaveAccount}> {t('VerifyNumber.haveAccount')} </Text>
                        <TouchableOpacity onPress={() => goToLogin()}>
                            <Text style={styles.txtLogin}> {t('VerifyNumber.login')} </Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>
                <View style={styles.btnContainer}>
                    <RoundedButton 
                        isPrimary={true}
                        onButtonPress={ () => { sendNumber()}} 
                        textBtn={t('VerifyNumber.continue')}
                    />
                </View>
            </LinearGradient>
        </AppLayout>    

    )

}