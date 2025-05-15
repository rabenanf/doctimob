import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { JSX } from "react";
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

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export const  ProfileScreen = ({navigation}: Props): JSX.Element => {

    const { t } = useTranslation();

    const gender = [
        {
          text: "Male",
        },
        {
          text: "Female",
        }
    ];

    return (
        <AppLayout>
            <TitleHeader title={t('Profile.headerTitle')} />
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
                        <RadioButtonContainer values={gender} onPress={() => {}} />
                        <Text> {t('Profile.firstname')} </Text>
                        <TextInput style={styles.input}  />
                        <Text> {t('Profile.lastname')} </Text>
                        <TextInput style={styles.input}  />
                        <Text> {t('Profile.email')} </Text>
                        <TextInput style={styles.input}  />
                        <Text> {t('Profile.phone')} </Text>
                        <TextInput style={styles.input}  />
                        <Text> {t('Profile.address')} </Text>
                        <TextInput style={styles.input}  />
                        <Text> {t('Profile.birthday')} </Text>
                        <View style={styles.addBirthday}>
                            <TextInput style={styles.input}  />
                            <TextInput style={styles.input}  />
                            <TextInput style={styles.input}  />
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