import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../data/interface";
import { JSX, useState } from "react";
import { useTranslation } from "react-i18next";
import AppLayout from "../../../layout";
import { TitleHeader } from "../../../components/TitleHeader";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { RoundedButton } from "../../../components/RoundedButton";
import Feather from "react-native-vector-icons/Feather";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

type Props = NativeStackScreenProps<RootStackParamList, 'ChangePassword'>;

export const  ChangePasswordScreen = ({navigation}: Props): JSX.Element => {

    const { t } = useTranslation();
    const [visibleActual, setVisibleActual] = useState(false);
    const [visiblePassword, setVisiblePassword] = useState(false);
    const [visibleConfirm, setVisibleConfirm] = useState(false);

    return (
        <AppLayout>
            <TitleHeader title={t('Setting.changePasswordTitle')} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}> {t('Setting.changePasswordTitle')} </Text>
                <Text style={styles.description}> {t('Setting.changePasswordDescription')} </Text>
            </View>
            <KeyboardAwareScrollView>
                <View style={styles.detailContainer}>
                    <Text> {t('Setting.currentPassword')} </Text>
                    <View style={styles.container}>
                        <TextInput
                            secureTextEntry={!visibleActual}
                            placeholderTextColor="#999"
                            style={styles.input}
                        />
                        <TouchableOpacity onPress={() => setVisibleActual(!visibleActual)} style={styles.icon}>
                            <Feather name={visibleActual ? 'eye-off' : 'eye'} size={20} color="#888" />
                        </TouchableOpacity>
                    </View>
                    <Text> {t('Setting.newPassword')} </Text>
                    <View style={styles.container}>
                        <TextInput
                            secureTextEntry={!visiblePassword}
                            placeholderTextColor="#999"
                            style={styles.input}
                        />
                        <TouchableOpacity onPress={() => setVisiblePassword(!visiblePassword)} style={styles.icon}>
                            <Feather name={visiblePassword ? 'eye-off' : 'eye'} size={20} color="#888" />
                        </TouchableOpacity>
                    </View>
                    <Text> {t('Setting.confirmPassword')} </Text>
                    <View style={styles.container}>
                        <TextInput
                            secureTextEntry={!visibleConfirm}
                            placeholderTextColor="#999"
                            style={styles.input}
                        />
                        <TouchableOpacity onPress={() => setVisibleConfirm(!visibleConfirm)} style={styles.icon}>
                            <Feather name={visibleConfirm ? 'eye-off' : 'eye'} size={20} color="#888" />
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAwareScrollView>
            <View style={styles.btnContainer}>
                <RoundedButton 
                    isPrimary={true}
                    onButtonPress={ () => { }} 
                    textBtn={t('Setting.changePasswordSave')}
                />
            </View>
        </AppLayout>
    )
}