import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import * as DocumentPicker from 'react-native-document-picker';
import LinearGradient from "react-native-linear-gradient";
import { Image, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { JSX, useState } from "react";
import { useTranslation } from "react-i18next";
import AppLayout from "../../../layout";
import { Theme } from "../../../../resources/themes";
import { RootStackParamList } from "../../../../data/interface";
import { styles } from './styles';
import Logo from '../../../../resources/assets/images/logo.png';
import { RoundedButton } from "../../../components/RoundedButton";

type Props = NativeStackScreenProps<RootStackParamList, 'CreateAccountStepTwo'>;

export const CreateAccountStepTwoScreen = ({ navigation }: Props): JSX.Element => {

    const { t } = useTranslation();
    const [file, setFile] = useState(null);

    const createAccount = () => {
        
    }

    /*
    const handleUpload = async () => {
        try {
            const result = await DocumentPicker.pickSingle({
                type: [DocumentPicker.types.pdf, DocumentPicker.types.images],
            });
            setFile(result);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('User cancelled upload');
            } else {
                throw err;
            }
        }
    }*/

    const handleRemoveFile = () => {
        setFile(null);
    }

    return (
        <AppLayout isFullScreen={true} >
            <LinearGradient
                style={styles.container}
                colors={[Theme.BACKGROUND_COLOR, 'white']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                locations={[0, 0.40]}
            >
                <View style={{ height: "88%" }}>
                    <KeyboardAwareScrollView
                        style={{ flex: 1 }}
                        contentContainerStyle={{ flexGrow: 1, paddingBottom: 150 }}
                        enableOnAndroid={true}
                        extraScrollHeight={20}
                        keyboardShouldPersistTaps="handled"
                    >
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} resizeMode="contain" source={Logo} />
                        </View>
                        <View style={styles.formContainer}>
                            <View style={styles.textContainer} >
                                <Text style={styles.welcomeText}> {t('CreateAccount.title')} </Text>
                                <Text style={styles.descriptionText}> {t('CreateAccount.description')} </Text>
                            </View>
                        </View>
                    </KeyboardAwareScrollView>
                </View>
                <View style={styles.btnContainer}>
                    <RoundedButton
                        isPrimary={true}
                        onButtonPress={() => { createAccount() }}
                        textBtn={t('CreateAccount.continue')}
                    />
                </View>
            </LinearGradient>
        </AppLayout>
    )

}