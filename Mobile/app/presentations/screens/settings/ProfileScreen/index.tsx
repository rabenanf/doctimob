import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { JSX, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Button, Image, Modal, PermissionsAndroid, Platform, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
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
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { getPublicImageUrl, supabase } from "../../../../services/technical/supabase";
import { showToast } from "../../../../services/utils/toast";
import { UserService } from "../../../../services/application/user.sa";
import { CustomActivityIndicator } from "../../../components/CustomActivityIndicator";

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export const  ProfileScreen = ({navigation}: Props): JSX.Element => {

    const { t } = useTranslation();
    const { user, updateUser } = useUserStore(); 
    const [modalPhotoVisible, setModalPhotoVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    
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
    const [image_uri, setImage_uri] = useState(user?.image_url ? user?.image_url : '');
    const [imagePublicUri, setImagePublicUri] = useState<string | undefined >(undefined);
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

    const { updateUserProfile } = UserService();
    
    useEffect(() => {
        const [year, month, day] = (user?.birth_date?.split("-").map(Number)) ?? [];
        setBirthday(new Date(year, month - 1, day));
        if (user?.image_url)
            setImagePublicUri(getPublicImageUrl(image_uri));
    }, []);

    useEffect(() => {
        let myDate = moment(birthday);
        console.log("Date naka : ", myDate);
        if (myDate.isValid()) {
            setDay(myDate.format('DD'));
            setMonth(myDate.format('MM'));
            setYear(myDate.format('YYYY'));
        }
        else {
            setDay('');
            setMonth('');
            setYear('');
        }
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
    }

    const requestCameraPermission = async () => {
        if (Platform.OS === 'android') {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'Permission caméra',
                    message: 'Cette app a besoin d\'accéder à la caméra',
                    buttonPositive: 'OK',
                }
            );

            return granted === PermissionsAndroid.RESULTS.GRANTED;
        }
        return true;
    };

    const handleCamera = async () => {
        setModalPhotoVisible(false);
        const granted = await requestCameraPermission();
        if (!granted) return;
        launchCamera(
            {
                mediaType: 'photo',
                saveToPhotos: true,
            },
            (response) => {
                if (response.didCancel) return;
                if (response.errorCode) {
                    showToast('error', t('Global.error'), response.errorMessage);
                    console.log('Camera error', response.errorMessage);
                    return;
                }
                const uri = response.assets?.[0]?.uri;
                console.log('photo uri : ',  uri);
                if (uri) uploadImageToSupabase(uri);
            }
        );
    };

    const handleLibrary = () => {
        setModalPhotoVisible(false);
        launchImageLibrary(
            {
                mediaType: 'photo',
            },
            (response) => {
                if (response.didCancel) return;
                if (response.errorCode) {
                    showToast('error', t('Global.error'), response.errorMessage);
                    return;
                }
                const uri = response.assets?.[0]?.uri;
                console.log('photo uri : ',  uri);
                if (uri) uploadImageToSupabase(uri);
            }
        );
    };

    const takePhotoModal = () => {
        return (
            <View style={styles.modalBackground}>
                <TouchableWithoutFeedback>
                    <View style={styles.modalContainer}>
                        <RoundedButton 
                            isPrimary={true}
                            onButtonPress={ () => {handleCamera()}} 
                            textBtn={t("Profile.takePhoto")}
                        />
                        <RoundedButton 
                            isPrimary={false}
                            onButtonPress={ () => {handleLibrary()}} 
                            textBtn={t("Profile.fromLibrary")}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )    
    }

    const uploadImageToSupabase = async (uri) => {
        try {
            // Create a Blob from the image URI
            const response = await fetch(uri);
            const blob = await response.blob();

            // Define the file path (you can adjust this based on the use case)
            setImage_uri(`${user?.id}${ Date.now()}.jpg`);

            // Upload the file to Supabase Bucket
            const { data, error } = await supabase.storage
                .from('profiles')  // Replace with your bucket name
                .upload(image_uri, blob, {
                    cacheControl: '3600',  // Optional: Cache settings
                    upsert: false,         // Optional: Set to true to overwrite existing files
                });

            if (error) {
                console.log('Uploaded sup error', error);
                showToast('error', t('Global.error'), error.message);
                return;
            }

            saveImageToDatabase();

            console.log('Image uploaded successfully', data);
        } catch (error) {
            console.log('Uploaded error', error);
            showToast('error', t('Global.error'), 'error upload');
        }
    };

    const saveImageToDatabase = async () => {
        const data = { image_url : image_uri};
        let response = await updateUserProfile(data, user?.id!);
        if (response.success) {
            setImagePublicUri(getPublicImageUrl(image_uri));
        }
        else {
            console.log('#############', response.message)
        }
    }

    const updateProfile = async () => {
        setLoading(true);
        let data = {
            gender : gender,
            first_name : firstname,
            last_name : lastname,
            email : email,
            phone : telephone,
            adresse : address,
            birth_date : birthday.toISOString()
        }

        let response = await updateUserProfile( data, user?.id!);
        if (! response.success) {
            showToast('error', t('Global.error'), t('Profile.updateError'));
            console.log('###########', response.message)
        }
        setLoading(false);
    }

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
                        <TouchableOpacity style={styles.cameraIcon} onPress={() => {setModalPhotoVisible(true)}}>
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
                        <TouchableOpacity style={styles.addBirthday} onPress={() => showDatePicker()}>
                            <TextInput editable={false} style={styles.input} value={day} />
                            <TextInput editable={false} style={styles.input} value={month} />
                            <TextInput editable={false} style={styles.input} value={year} />
                        </TouchableOpacity>

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
                    </View>
                    { loading && <CustomActivityIndicator /> } 
                </KeyboardAwareScrollView>
            </View>
            <View style={styles.btnContainer}>
                <RoundedButton 
                    isPrimary={true}
                    onButtonPress={ () => { updateProfile() }} 
                    textBtn={t('Profile.saveChange')}
                />
            </View>

            <Modal  
                animationType="slide"
                transparent={true}
                visible={modalPhotoVisible}>
                { takePhotoModal() }
            </Modal>

        </AppLayout> 
    )   

}