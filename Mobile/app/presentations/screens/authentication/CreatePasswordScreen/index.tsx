import React, { JSX, useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTranslation } from 'react-i18next';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { styles } from './styles';
import { RootStackParamList } from '../../../../data/interface';
import AppLayout from '../../../layout';
import Logo from '../../../../resources/assets/images/logo.png';
import { RoundedButton } from '../../../components/RoundedButton';
import {PasswordWithIcon} from '../../../components/PasswordWithIcon';
import {Theme} from '../../../../resources/themes'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import useUserStore from '../../../../services/redux/userStore';
import { UserService } from "../../../../services/application/user.sa";
import { showToast } from '../../../../services/utils/toast';
import { User } from '../../../../data/dto/User.type';
import { CustomActivityIndicator } from '../../../components/CustomActivityIndicator';

type Props = NativeStackScreenProps<RootStackParamList, 'CreatePassword'>;

export const CreatePasswordScreen = ({navigation}: Props): JSX.Element => {
    
    const { t } = useTranslation();

    const { user, updateUser } = useUserStore(); 
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { createUserProfile } = UserService();


    const form = {
        password: password,
        confirmPassword: confirmPassword
    }
        
    const [errors, setErrors] = useState<Partial<typeof form>>({});

    const createAccount = async () => {
        setLoading(true);
        if (validate()) {
            updateUser({password: password})

            console.log('######################', user);

            let response = await createUserProfile(user!);
            if (response?.success) {
                updateUser(response.user! as Partial<User>);
                setLoading(false);
                navigation.navigate('RegistrationConfirmation');
            }
            else {
                showToast('error', t('Global.error'), t('CreatePassword.createUserError'));
            }
        }
        setLoading(false);
    }

    const validate = () => {
        const newErrors: Partial<typeof form> = {};
        if (password.length < 6) newErrors.password = t('CreatePassword.passwordError');
        if (confirmPassword != password) newErrors.confirmPassword = t('CreatePassword.confirmPasswordError');

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    useEffect(() => {
        console.log('-----utilisateur----', user);
    }, []);

    return (
        <AppLayout isFullScreen={true} >
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
                                    value={password}
                                    onChangeText={setPassword}
                                    error={errors.password}
                                />
                                <PasswordWithIcon
                                    iconName="bag"
                                    placeholder={t('CreatePassword.confirmPassword')}
                                    value={confirmPassword}
                                    onChangeText={setConfirmPassword}
                                    error={errors.confirmPassword}
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
                { loading && <CustomActivityIndicator /> }
            </LinearGradient>

        </AppLayout>
    )
}
