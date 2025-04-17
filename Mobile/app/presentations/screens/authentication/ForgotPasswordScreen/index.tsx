import { NativeStackScreenProps } from "@react-navigation/native-stack";
import LinearGradient from "react-native-linear-gradient";
import { JSX } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Image, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { InputWithIcon } from "../../../components/InputWithIcon";
import { RootStackParamList } from "../../../../data/interface";
import { styles } from './styles';
import AppLayout from "../../../layout";
import { Theme } from "../../../../resources/themes";
import Logo from '../../../../resources/assets/images/logo.png'
import { RoundedButton } from "../../../components/RoundedButton";

type Props = NativeStackScreenProps<RootStackParamList, 'ForgotPassword'>;

export const ForgotPasswordScreen = ({navigation}: Props): JSX.Element => {

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
                <View style={styles.imageContainer}>
                    <Image style={styles.image} resizeMode="contain" source={Logo}/> 
                </View>
                <KeyboardAwareScrollView style={styles.formContainer}>
                    <View style={styles.textContainer} >
                        <Text style={styles.welcomeText}> {t('ForgotPassword.title')} </Text>
                        <Text style={styles.descriptionText}> {t('ForgotPassword.description')} </Text>
                    </View>
                    <View style={styles.form}>
                        <InputWithIcon
                            placeholder={t('ForgotPassword.email')}
                            iconName="mail"
                            iconLibrary="Ionicons"
                        />
                    </View>
                </KeyboardAwareScrollView>
                <View style={styles.btnContainer}>
                    <RoundedButton 
                        isPrimary={true}
                        onButtonPress={ () => {}} 
                        textBtn={t('ForgotPassword.sendEmail')}
                    />
                </View>
            </LinearGradient>
        </AppLayout>    

    )

}