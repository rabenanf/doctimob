import React, { JSX, useState } from 'react';
import { View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTranslation } from 'react-i18next';
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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type Props = NativeStackScreenProps<RootStackParamList, 'CreatePassword'>;

export const CreatePasswordScreen = ({navigation}: Props): JSX.Element => {
    
    const { t } = useTranslation();

    const createAccount = () => {
        navigation.navigate('RegistrationConfirmation');
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
                <View style={{ flex : 1}}>   
                    <KeyboardAwareScrollView
                        contentContainerStyle={{ flexGrow: 1 }}
                        enableOnAndroid={true}
                        keyboardShouldPersistTaps="handled"
                    >
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} resizeMode="contain" source={Logo}/> 
                        </View>
                        <View style={styles.formContainer}>
                            <View style={styles.textContainer} >
                                <Text style={styles.welcomeText}> {t('CreatePassword.title')} </Text>
                                <Text style={styles.descriptionText}> {t('CreatePassword.description')} </Text>
                            </View>
                            <View style={styles.form}>
                                <PasswordWithIcon
                                    iconName="bag"
                                    placeholder={t('CreatePassword.password')}
                                />
                                <PasswordWithIcon
                                    iconName="bag"
                                    placeholder={t('CreatePassword.confirmPassword')}
                                />

                            </View>
                        </View>
                    </KeyboardAwareScrollView> 
                    <View style={styles.btnContainer}>
                        <RoundedButton 
                            isPrimary={true}
                            onButtonPress={ () => { createAccount() }} 
                            textBtn={t('CreatePassword.createAccount')}
                        />
                    </View>
                </View>
            </LinearGradient>

        </AppLayout>
    )
}
