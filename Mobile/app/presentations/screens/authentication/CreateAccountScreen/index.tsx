import React, { JSX, useEffect, useState } from 'react';
import { View, Text, Image, TextInput, ScrollView, Platform, TouchableOpacity, PermissionsAndroid } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTranslation } from 'react-i18next';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import moment from 'moment';
import { styles } from './styles';
import { RootStackParamList } from '../../../../data/interface';
import AppLayout from '../../../layout';
import Logo from '../../../../resources/assets/images/logo.png';
import { RoundedButton } from '../../../components/RoundedButton';
import { Theme } from '../../../../resources/themes'
import { InputWithIcon } from '../../../components/InputWithIcon';
import { RadioButtonContainer } from '../../../components/RadioButtonContainer';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Geolocation from 'react-native-geolocation-service';
import { showToast } from '../../../../services/utils/toast';
import { Location } from '../../../../data/dto/Location.type';
import useUserStore from '../../../../services/redux/userStore';
import { Validator } from '../../../../services/utils/validator';
import { finishScreenTransition } from 'react-native-reanimated';
import { User } from '../../../../data/dto/User.type';

type Props = NativeStackScreenProps<RootStackParamList, 'CreateAccount'>;

export const CreateAccountScreen = ({ navigation }: Props): JSX.Element => {

    const { t } = useTranslation();

    const [birthday, setBirthday] = useState<Date>(new Date());
    const [gender, setGender] = useState('male');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState<Location | undefined >(undefined);
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const form = {
        firstname: firstname,
        lastname: lastname,
        email: email
    }
    const [errors, setErrors] = useState<Partial<typeof form>>({});

    const { user, updateUser } = useUserStore(); 
    const { isValidEmail } = Validator(); 

    const genderData = [
        {
            text: "Male",
        },
        {
            text: "Female",
        }
    ];
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date?: Date) => {
        setBirthday(date!);
        hideDatePicker();
    };

    useEffect(() => {
        let myDate = moment(birthday);
        setDay(myDate.format('DD'));
        setMonth(myDate.format('MM'));
        setYear(myDate.format('YYYY'));
    }, [birthday]);

    const validate = () => {
        const newErrors: Partial<typeof form> = {};
        if (!firstname.trim()) newErrors.firstname = t('CreateAccount.errorFirstname');
        if (!lastname.trim()) newErrors.lastname = t('CreateAccount.errorLastname');
        if (!isValidEmail(email)) newErrors.email = t('CreateAccount.errorEmail');
        

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const onRadioButtonPress = (itemIdx: number) => {
        if (itemIdx > 0)
            setGender('female');
        else
            setGender('male');
    };

    async function requestLocationPermission() {
        if (Platform.OS === 'android') {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            );
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        }
        return true;
    }

    const getCurrentLocation = async () => {
        const hasPermission = await requestLocationPermission();
        if (!hasPermission) return;

        Geolocation.getCurrentPosition(
            position => {
                setLocation({lat: position.coords.latitude, lon: position.coords.longitude});
            },
            error => {
                showToast('error', error.code + ' : ' + error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    };

    useEffect(() => {
        getCurrentLocation();
    }, []);

    const createAccount = () => {
        if (validate()) {
            const data : Partial<User>= {
                first_name: firstname,
                last_name: lastname,
                email: email,
                gender: gender,
                localisation: location,
                birth_date: birthday.toISOString(),
                phone: user?.phone
            };
            updateUser(data);
            navigation.navigate('CreatePassword');
        }
    }

    useEffect(() => {
        if (errors['email']) setErrors({ ...errors, ['email']: undefined });
    },[email]);
   
    useEffect(() => {
        if (errors['firstname']) setErrors({ ...errors, ['firstname']: undefined });
    },[firstname]);

    useEffect(() => {
        if (errors['lastname']) setErrors({ ...errors, ['lastname']: undefined });
    },[lastname]);

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
                            <View style={styles.form}>
                                <Text style={{ color: "#999" }}>{t('CreateAccount.gender')}</Text>
                                <RadioButtonContainer values={genderData} onPress={onRadioButtonPress} />
                                <InputWithIcon
                                    placeholder={t('CreateAccount.firstname')}
                                    iconName="person"
                                    iconLibrary="Ionicons"
                                    value={firstname}
                                    onChangeText={setFirstname}
                                    error={errors.firstname}
                                />
                                <InputWithIcon
                                    placeholder={t('CreateAccount.lastname')}
                                    iconName="person"
                                    iconLibrary="Ionicons"
                                    value={lastname}
                                    onChangeText={setLastname}
                                    error={errors.lastname}
                                />
                                <InputWithIcon
                                    placeholder={t('CreateAccount.email')}
                                    iconName="mail"
                                    iconLibrary="Ionicons"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    value={email}
                                    onChangeText={setEmail}
                                    error={errors.email}
                                />
                                <InputWithIcon
                                    placeholder={t('CreateAccount.location')}
                                    iconName="location"
                                    iconLibrary="Ionicons"
                                    editable={false}
                                    value={location?.lat +  ', ' + location?.lon }
                                />
                                <Text style={{ color: "#999" }}>{t('CreateAccount.birthday')}</Text>
                                <TouchableOpacity style={styles.birthday} onPress={() => showDatePicker()}>
                                    <TextInput style={styles.inputStyle}
                                        editable={false}
                                        placeholder={'Day'}
                                        placeholderTextColor="#999"
                                        value={day}
                                    />
                                    <TextInput style={styles.inputStyle}
                                        editable={false}
                                        placeholder={'Month'}
                                        placeholderTextColor="#999"
                                        value={month}
                                    />
                                    <TextInput style={styles.inputStyle}
                                        editable={false}
                                        placeholder={'Year'}
                                        placeholderTextColor="#999"
                                        value={year}
                                    />
                                    <View>
                                        <View>
                                            {<DateTimePickerModal
                                                isVisible={isDatePickerVisible}
                                                date={birthday}
                                                mode={"date"}
                                                onConfirm={handleConfirm}
                                                onCancel={hideDatePicker}
                                            />}
                                        </View>
                                    </View>
                                </TouchableOpacity>


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
