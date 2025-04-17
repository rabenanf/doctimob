import React, { JSX } from 'react';
import { View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../data/interface';
import AppLayout from '../../../layout';
import Logo from '../../../../resources/assets/images/logo.png'
import { RoundedButton } from '../../../components/RoundedButton';

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

export const WelcomeScreen = ({navigation}: Props): JSX.Element => {
    
    const { t } = useTranslation();
    
    const goToVerifyNumber = () => {
        navigation.navigate('VerifyNumber');
    }

    const goToLogin = () => {
        navigation.navigate('Login');
    }

    return (
        <AppLayout>
            <LinearGradient 
                style={styles.container} 
                colors={['#57CFC8', 'white']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                locations={[0, 0.78]}
                >
                <View style={styles.imageContainer}>
                    <Image style={styles.image} resizeMode="contain" source={Logo}/> 
                </View>
                <View style={styles.textContainer} >
                    <Text style={styles.welcomeText}> {t('Welcome.title')} </Text>
                    <Text style={styles.descriptionText}> {t('Welcome.description')} </Text>
                </View>
                <View style={styles.btnContainer}>
                    <RoundedButton 
                        isPrimary={true}
                        onButtonPress={ () => goToVerifyNumber()} 
                        textBtn={t('Welcome.getStarted')}
                    />
                    <RoundedButton 
                        isPrimary={false}
                        onButtonPress={ () => goToLogin()} 
                        textBtn={t('Welcome.login')}
                    />
                </View>
            </LinearGradient>

        </AppLayout>
    )
}
