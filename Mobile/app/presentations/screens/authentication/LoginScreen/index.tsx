import React, { JSX, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTranslation } from 'react-i18next';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import CheckBox from '@react-native-community/checkbox';
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
                colors={[Theme.PRIMARY_COLOR, 'white']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                locations={[0, 0.78]}
                >
                <View style={{height : "88%"}}>  
                    <KeyboardAwareScrollView style={styles.formContainer}>
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

                        </View>
                        <View style={styles.footer}>
                            <View style={{flexDirection: 'row'}} >
                                <View>
                                    <CheckBox
                                        value={checked}
                                        onValueChange={(newValue) => setChecked(newValue)}
                                        boxType='square'
                                        onFillColor={Theme.SECONDARY_FONT_COLOR}
                                        onCheckColor={'white'}
                                        style={{flex : 1, height: 18}}
                                        tintColors= {{ true: '#999', false: '#999' }}
                                    />
                                </View>
                                <Text style={styles.remeberStyle}>
                                    {t('Login.rememberMe')}
                                </Text>
                            </View>
                            <TouchableOpacity onPress={() => goToForgotPassword()}>
                                <Text style={styles.forgotStyle}>
                                    {t('Login.forgotPassword')}
                                </Text>
                            </TouchableOpacity>

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
