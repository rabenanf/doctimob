import React, { JSX, useEffect, useState } from 'react';
import { View, Text, Image, TextInput, ScrollView, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTranslation } from 'react-i18next';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { styles } from './styles';
import { RootStackParamList } from '../../../../data/interface';
import AppLayout from '../../../layout';
import Logo from '../../../../resources/assets/images/logo.png';
import { RoundedButton } from '../../../components/RoundedButton';
import {Theme} from '../../../../resources/themes'
import { InputWithIcon } from '../../../components/InputWithIcon';
import { RadioButtonContainer } from '../../../components/RadioButtonContainer';


type Props = NativeStackScreenProps<RootStackParamList, 'CreateAccount'>;

export const CreateAccountScreen = ({navigation}: Props): JSX.Element => {
    
    const { t } = useTranslation();

    const [birthday, setBirthday] = useState<Date>(new Date());
    const [genderData, setGenderData] = useState('M');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const gender = [
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

    const handleConfirm = (date : Date) => {
        setBirthday(date);
        hideDatePicker();
    };

    useEffect(() => {
        let myDate = moment(birthday);
        setDay(myDate.format('DD'));
        setMonth(myDate.format('MM'));
        setYear(myDate.format('YYYY'));
     }, [birthday]);
    
    const onRadioButtonPress = (itemIdx: number) => {
        console.log("Clicked", itemIdx);
    };

    const createAccount = () => {
        navigation.navigate('CreatePassword');
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
                <View style={{height : "88%"}}>
                    <KeyboardAwareScrollView
                        style={{ flex: 1 }}
                        contentContainerStyle={{ flexGrow: 1, paddingBottom: 150 }}
                        enableOnAndroid={true}
                        extraScrollHeight={20}
                        keyboardShouldPersistTaps="handled"
                    >
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} resizeMode="contain" source={Logo}/> 
                        </View>
                        <View style={styles.formContainer}>
                            <View style={styles.textContainer} >
                                <Text style={styles.welcomeText}> {t('CreateAccount.title')} </Text>
                                <Text style={styles.descriptionText}> {t('CreateAccount.description')} </Text>
                            </View>
                            <View style={styles.form}>
                                <Text style={{color: "#999"}}>{t('CreateAccount.gender')}</Text>
                                <RadioButtonContainer values={gender} onPress={onRadioButtonPress} />
                                <InputWithIcon
                                    placeholder={t('CreateAccount.firstname')}
                                    iconName="person"
                                    iconLibrary="Ionicons"
                                />
                                <InputWithIcon
                                    placeholder={t('CreateAccount.lastname')}
                                    iconName="person"
                                    iconLibrary="Ionicons"
                                />
                                <InputWithIcon
                                    placeholder={t('CreateAccount.email')}
                                    iconName="mail"
                                    iconLibrary="Ionicons"
                                />
                                <InputWithIcon
                                    placeholder={t('CreateAccount.location')}
                                    iconName="location"
                                    iconLibrary="Ionicons"
                                />                        
                                <Text style={{color: "#999"}}>{t('CreateAccount.birthday')}</Text>
                                <View style={styles.birthday}>
                                    <TextInput style={styles.inputStyle}
                                        editable={false}
                                        placeholder={'Day'}
                                        placeholderTextColor="#999"
                                        value={day}
                                        onPress={() => showDatePicker()}
                                    />
                                    <TextInput style={styles.inputStyle}
                                        editable={false}
                                        placeholder={'Month'}
                                        placeholderTextColor="#999"
                                        value={month}
                                        onPress={() => showDatePicker()}
                                    />
                                    <TextInput style={styles.inputStyle}
                                        editable={false}
                                        placeholder={'Year'}
                                        placeholderTextColor="#999"
                                        value={year}
                                        onPress={() => showDatePicker()}
                                    />
                                    <View>
                                        <View>
                                            <DateTimePickerModal
                                                isVisible={isDatePickerVisible}
                                                date={birthday}
                                                mode= {"date"}
                                                onConfirm={handleConfirm}
                                                onCancel={hideDatePicker}
                                            /> 
                                        </View>
                                    </View>
                                </View>
                                
                                
                            </View>
                        </View>
                    </KeyboardAwareScrollView>
                </View>
                <View style={styles.btnContainer}>
                    <RoundedButton 
                        isPrimary={true}
                        onButtonPress={ () => { createAccount() }} 
                        textBtn={t('CreateAccount.continue')}
                    />
                </View>
            </LinearGradient>

        </AppLayout>
    )
}
