import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { JSX } from "react";
import { styles } from "./styles";
import { RootStackParamList } from "../../../../data/interface";
import AppLayout from "../../../layout";
import SwitchCameraIcon from "../../../../resources/assets/icons/Switch_Camera.svg";
import PhotoCamenraIcon from "../../../../resources/assets/icons/Camera.svg";
import PhoneCallIcon from "../../../../resources/assets/icons/Phone_Calling.svg";
import VolumeIcon from "../../../../resources/assets/icons/Volume.svg";
import MicrophoneIcon from "../../../../resources/assets/icons/Microphone.svg";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Doctor from "../../../../resources/assets/images/doctor.png";
import Profil from "../../../../resources/assets/images/photo.png";
import BackArrow from '../../../../resources/assets/icons/back.svg';

type Props = NativeStackScreenProps<RootStackParamList, 'AppointmentCall'>;

export const AppointmentCallScreen = ({ navigation }: Props): JSX.Element => {

    return (
        <AppLayout>
            <View style={styles.doctorImage}>
                <View  style={styles.headerContainer}>
                    <TouchableOpacity style={styles.arrowContainer} onPress={() => {}}>
                        <BackArrow style={styles.vectorStroke} />
                    </TouchableOpacity>
                    <View style={styles.myPicture}>
                        <Image source={Profil} style={styles.myPicture} />
                    </View>
                </View>
                
                <View  style={styles.bottomContainer}>
                    <View style={styles.doctorContainer}>
                        <View style={styles.doctorInfoContainer}>
                            <Image source={Doctor} style={styles.avatar} />
                            <View style={styles.doctorNameContainer}>
                                <Text style={styles.doctorName}> {'Dr. '} {'Alvin Kate'} </Text>
                                <Text style={styles.specialty}> {'Cardiologist'} </Text>
                            </View>
                        </View>
                        <Text style={styles.duration}> {'14:10'} </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.whiteButton}> <SwitchCameraIcon height={24} width={24} /> </View>
                        <View style={styles.whiteButton}> <PhotoCamenraIcon height={24} width={24} /> </View>
                        <View style={styles.redButton}> <PhoneCallIcon height={24} width={24} /> </View>
                        <View style={styles.whiteButton}> <VolumeIcon height={24} width={24} /> </View>
                        <View style={styles.whiteButton}> <MicrophoneIcon height={24} width={24} /> </View>
                    </View>
                </View>
            </View>
        </AppLayout>
    )

}