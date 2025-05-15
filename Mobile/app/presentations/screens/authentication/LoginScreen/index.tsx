import React, { JSX, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTranslation } from 'react-i18next';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CheckBox } from '@rneui/themed';
import { styles } from './styles';
import { RootStackParamList } from '../../../../data/interface';
import AppLayout from '../../../layout';
import Logo from '../../../../resources/assets/images/logo.png';
import { RoundedButton } from '../../../components/RoundedButton';
import { InputWithIcon } from '../../../components/InputWithIcon';
import {PasswordWithIcon} from '../../../components/PasswordWithIcon';
import {Theme} from '../../../../resources/themes'

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export const LoginScreen = ({navigation}: Props): JSX.Element => {
    
    const { t } = useTranslation();
    const [checked, setChecked] = useState(false);

    function goToForgotPassword(): void {
       navigation.navigate('ForgotPassword');
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
                <View style={{flex: 1}}>  
                    <KeyboardAwareScrollView 
                        style={styles.formContainer}
                        contentContainerStyle={{ flexGrow: 1 }}
                        enableOnAndroid={true}
                        keyboardShouldPersistTaps="handled"
                    >
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} resizeMode="contain" source={Logo}/> 
                        </View>
                        <View style={styles.textContainer} >
                            <Text style={styles.welcomeText}> {t('Login.title')} </Text>
                            <Text style={styles.descriptionText}> {t('Login.description')} </Text>
                        </View>
                        <View style={styles.form}>
                            <InputWithIcon
                                placeholder={t('Login.email')}
                                iconName="mail"
                                iconLibrary="Ionicons"
                            />
                            <PasswordWithIcon
                                iconName="bag"
                                placeholder={t('Login.password')}
                            />
                            <View style={styles.footer}>
                                <CheckBox
                                    checked={checked}
                                    onPress={() => setChecked(!checked)}
                                    iconType="material-community"
                                    checkedIcon="checkbox-marked"
                                    uncheckedIcon="checkbox-blank-outline"
                                    checkedColor="black"
                                    title={t('Login.rememberMe')}
                                    textStyle={styles.remeberStyle}
                                    fontFamily="Rubik"
                                    containerStyle={{ margin: 0, padding: 0, marginLeft: 0 }} 
                                />
                                <TouchableOpacity onPress={() => goToForgotPassword()}>
                                    <Text style={styles.forgotStyle}>
                                        {t('Login.forgotPassword')}
                                    </Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                        
                    </KeyboardAwareScrollView>
                </View>  
                <View style={styles.btnContainer}>
                    <RoundedButton 
                        isPrimary={true}
                        onButtonPress={ () => {}} 
                        textBtn={t('Login.login')}
                    />
                </View>
            </LinearGradient>

        </AppLayout>
    )
}
