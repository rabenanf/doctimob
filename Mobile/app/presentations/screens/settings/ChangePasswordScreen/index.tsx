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
import { supabase } from "../../../../services/technical/supabase";
import useUserStore from "../../../../services/redux/userStore";
import { showToast } from "../../../../services/utils/toast";
import { CustomActivityIndicator } from "../../../components/CustomActivityIndicator";

type Props = NativeStackScreenProps<RootStackParamList, 'ChangePassword'>;

export const  ChangePasswordScreen = ({navigation}: Props): JSX.Element => {

    const { t } = useTranslation();
    const [visibleActual, setVisibleActual] = useState(false);
    const [visiblePassword, setVisiblePassword] = useState(false);
    const [visibleConfirm, setVisibleConfirm] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const { user, logout } = useUserStore(); 

    const form = {
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    };
        
    const [errors, setErrors] = useState<Partial<typeof form>>({});

    const validate = async () => {
        const newErrors: Partial<typeof form> = {};
        const { error: loginError } = await supabase.auth.signInWithPassword({
            email : user?.email!,
            password: currentPassword,
        });

        if (loginError) newErrors.currentPassword = t('Setting.currentPasswordError');
        if (newPassword.length < 6) newErrors.newPassword = t('Setting.newPasswordError');
        if (confirmPassword !=newPassword) newErrors.confirmPassword = t('Setting.confirmPasswordError');

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const changePassword = async () => {
        setLoading(true);
        if (await validate()) {
            const { error: updateError } = await supabase.auth.updateUser({
                password: newPassword,
            });

            if (updateError) {
                showToast('error', t('Global.error'), updateError.message);
            }
            else {
                setLoading(false);
                logout();
                navigation.navigate('Login');
            }
        }
        setLoading(false);
    }

    return (
        <AppLayout>
            <TitleHeader title={t('Setting.changePasswordTitle')} back={() => {navigation.goBack()}} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}> {t('Setting.changePasswordTitle')} </Text>
                <Text style={styles.description}> {t('Setting.changePasswordDescription')} </Text>
            </View>
            <KeyboardAwareScrollView>
                <View style={styles.detailContainer}>
                    <Text> {t('Setting.currentPassword')} </Text>
                    <View>
                        <View style={styles.container}>
                            <TextInput
                                secureTextEntry={!visibleActual}
                                placeholderTextColor="#999"
                                style={styles.input}
                                value={currentPassword}
                                onChangeText={setCurrentPassword}
                            />
                            <TouchableOpacity onPress={() => setVisibleActual(!visibleActual)} style={styles.icon}>
                                <Feather name={visibleActual ? 'eye-off' : 'eye'} size={20} color="#888" />
                            </TouchableOpacity>
                        </View>
                        { errors.currentPassword && <Text style={styles.errorText}>{errors.currentPassword}</Text> }
                    </View>
                    
                    <Text> {t('Setting.newPassword')} </Text>
                    <View>
                        <View style={styles.container}>
                            <TextInput
                                secureTextEntry={!visiblePassword}
                                placeholderTextColor="#999"
                                style={styles.input}
                                value={newPassword}
                                onChangeText={setNewPassword}
                            />
                            <TouchableOpacity onPress={() => setVisiblePassword(!visiblePassword)} style={styles.icon}>
                                <Feather name={visiblePassword ? 'eye-off' : 'eye'} size={20} color="#888" />
                            </TouchableOpacity>
                        </View>
                        { errors.newPassword && <Text style={styles.errorText}>{errors.newPassword}</Text> }
                    </View>
                    
                    <Text> {t('Setting.confirmPassword')} </Text>
                    <View>
                        <View style={styles.container}>
                            <TextInput
                                secureTextEntry={!visibleConfirm}
                                placeholderTextColor="#999"
                                style={styles.input}
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                            />
                            <TouchableOpacity onPress={() => setVisibleConfirm(!visibleConfirm)} style={styles.icon}>
                                <Feather name={visibleConfirm ? 'eye-off' : 'eye'} size={20} color="#888" />
                            </TouchableOpacity>
                        </View>
                        { errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text> }
                    </View>
                    
                </View>
                { loading && <CustomActivityIndicator /> } 
            </KeyboardAwareScrollView>
            <View style={styles.btnContainer}>
                <RoundedButton 
                    isPrimary={true}
                    onButtonPress={ () => { changePassword() }} 
                    textBtn={t('Setting.changePasswordSave')}
                />
            </View>
        </AppLayout>
    )
}