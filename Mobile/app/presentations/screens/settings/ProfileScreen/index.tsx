import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { JSX, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import AppLayout from "../../../layout";
import { TitleHeader } from "../../../components/TitleHeader";
import { RoundedButton } from "../../../components/RoundedButton";
import {styles} from "./styles";
import { RootStackParamList } from "../../../../data/interface";
import Photo from "../../../../resources/assets/images/photo.png";
import CameraIcon from "../../../../resources/assets/icons/Camera.svg";
import { RadioButtonContainer } from "../../../components/RadioButtonContainer";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import useUserStore from "../../../../services/redux/userStore";
import moment from "moment";

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export const  ProfileScreen = ({navigation}: Props): JSX.Element => {

    const { t } = useTranslation();
    const { user, updateUser } = useUserStore(); 

    const [gender, setGender] = useState(user?.gender);
    const [birthday, setBirthday] = useState<Date>(new Date(user?.birth_date!));
    const [firstname, setFirstname] = useState(user?.first_name);
    const [lastname, setLastname] = useState(user?.last_name);
    const [email, setEmail] = useState(user?.email);
    const [telephone, setTelephone] = useState(user?.phone);
    const [address, setAddress] = useState(user?.adresse);
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    
    useEffect(() => {
        const [year, month, day] = (user?.birth_date?.split("-").map(Number)) ?? [];
        setBirthday(new Date(year, month - 1, day));
    }, []);

    useEffect(() => {
        let myDate = moment(birthday);
        setDay(myDate.format('DD'));
        setMonth(myDate.format('MM'));
        setYear(myDate.format('YYYY'));
    }, [birthday]);

    const genders = [
        {
          text: "Male",
        },
        {
          text: "Female",
        }
    ];

    const onRadioButtonPress = (itemIdx: number) => {
        if (itemIdx > 0)
            setGender('female');
        else
            setGender('male');
    };

    return (
        <AppLayout>
            <TitleHeader title={t('Profile.headerTitle')} back={() => {navigation.goBack()}} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}> {t('Profile.title')} </Text>
                <Text style={styles.description}> {t('Profile.description')} </Text>
            </View>
            <View style={styles.detailContainer}>
                <KeyboardAwareScrollView
                    style={{ width: "100%"}}
                    contentContainerStyle={{ flexGrow: 1, paddingBottom: 150 }}
                    enableOnAndroid={true}
                    extraScrollHeight={20}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.imageContainer}>
                        <View style={styles.photoContainer}>
                            <Image source={Photo} style={styles.profileImage} />
                        </View>
                        <TouchableOpacity style={styles.cameraIcon} onPress={() => {}}>
                            <CameraIcon height={20} width={20} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.form}>
                        <Text> {t('Profile.gender')} </Text>
                        <RadioButtonContainer values={genders} selected={gender == 'male' ? 0 : 1} onPress={onRadioButtonPress} />
                        <Text> {t('Profile.firstname')} </Text>
                        <TextInput 
                            style={styles.input}
                            value={firstname}
                            onChangeText={setFirstname}  
                        />
                        <Text> {t('Profile.lastname')} </Text>
                        <TextInput 
                            style={styles.input}  
                            value={lastname}
                            onChangeText={setLastname}  
                        />
                        <Text> {t('Profile.email')} </Text>
                        <TextInput 
                            style={styles.input} 
                            value={email}
                            onChangeText={setEmail}   
                        />
                        <Text> {t('Profile.phone')} </Text>
                        <TextInput 
                            style={styles.input}  
                            value={telephone}
                            onChangeText={setTelephone}  
                        />
                        <Text> {t('Profile.address')} </Text>
                        <TextInput 
                            style={styles.input} 
                            value={address}
                            onChangeText={setAddress}
                        />
                        <Text> {t('Profile.birthday')} </Text>
                        <View style={styles.addBirthday}>
                            <TextInput style={styles.input} value={day} />
                            <TextInput style={styles.input} value={month} />
                            <TextInput style={styles.input} value={year} />
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </View>
            <View style={styles.btnContainer}>
                <RoundedButton 
                    isPrimary={true}
                    onButtonPress={ () => { }} 
                    textBtn={t('Profile.saveChange')}
                />
            </View>
        </AppLayout> 
    )   

}