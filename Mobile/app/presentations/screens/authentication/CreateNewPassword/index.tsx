import React, { JSX, useState } from 'react';
import { View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTranslation } from 'react-i18next';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { styles } from './styles';
import { RootStackParamList } from '../../../../data/interface';
import AppLayout from '../../../layout';
import Logo from '../../../../resources/assets/images/logo.png';
import { RoundedButton } from '../../../components/RoundedButton';
import {PasswordWithIcon} from '../../../components/PasswordWithIcon';
import {Theme} from '../../../../resources/themes'

type Props = NativeStackScreenProps<RootStackParamList, 'CreateNewPassword'>;

export const CreateNewPasswordScreen = ({navigation}: Props): JSX.Element => {
    
    const { t } = useTranslation();

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
                            <Text style={styles.welcomeText}> {t('CreateNewPassword.title')} </Text>
                            <Text style={styles.descriptionText}> {t('CreateNewPassword.description')} </Text>
                        </View>
                        <View style={styles.form}>
                            <PasswordWithIcon
                                iconName="bag"
                                placeholder={t('CreateNewPassword.password')}
                            />
                            <PasswordWithIcon
                                iconName="bag"
                                placeholder={t('CreateNewPassword.confirmPassword')}
                            />

                        </View>
                    </View>
                </KeyboardAwareScrollView> 
                <View style={styles.btnContainer}>
                    <RoundedButton 
                        isPrimary={true}
                        onButtonPress={ () => {}} 
                        textBtn={t('CreateNewPassword.confirm')}
                    />
                </View>
            </LinearGradient>

        </AppLayout>
    )
}
