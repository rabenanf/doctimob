import { Image, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Icon from 'react-native-vector-icons/Ionicons';
import { RootStackParamList } from "../../../../../data/interface";
import { useTranslation } from "react-i18next";
import { JSX } from "react";
import AppLayout from "../../../../layout";
import { TitleHeader } from "../../../../components/TitleHeader";
import { styles } from './styles';
import { RoundedButton } from "../../../../components/RoundedButton";
import Photo from '../../../../../resources/assets/images/photo.png';
import nobody from '../../../../../resources/assets/images/nobody.svg';
import VideoIcon from '../../../../../resources/assets/icons/Videocamera.svg';

type Props = NativeStackScreenProps<RootStackParamList, 'AppointmentConfirmed'>;

export const  AppointmentConfirmedScreen = ({navigation}: Props): JSX.Element => {
    const { t } = useTranslation();
    return (
        <AppLayout>
            <TitleHeader title={t('Payment.confirmed')} />
            <View style={styles.confirmedContainer}>
                <Text style={styles.confirmedTitle}>{t('Payment.confirmedTitle')}</Text>
                <View style={styles.appointmentContainer}>
                    <Image
                        style={styles.image}
                        source={Photo ?? nobody}
                        resizeMode={"cover"}
                    />
                    <View style={styles.appointmentInfo}>
                        <View style={styles.doctorNameContainer}>
                            <Text style={styles.name}> {'Dr. '} {'Henry Tran'}</Text>
                            <Text style={styles.specialty}> {'Neurologist'} </Text>
                        </View>
                        <View style={styles.detailContainer}>
                            <View style={styles.detail}>
                                <View style={styles.pill}>
                                    <Icon name="calendar" size={16} color="#000" style={{ marginRight: 6 }} />
                                    <Text style={styles.pillText}> {'March 17, 2025'} </Text>
                                </View>
                                <View style={styles.pill}>
                                    <Icon name="time" size={16} color="#000" style={{ marginRight: 6 }} />
                                    <Text style={styles.pillText}> {'09 : 30' } </Text>
                                    <Text style={styles.highlightText}> {'AM' } </Text>
                                </View>
                            </View>
                            <View style={styles.iconCircle}>
                                <VideoIcon width={20} height={20} />
                            </View>
                        </View>
                    </View>
                </View>
                <RoundedButton 
                    isPrimary={true}
                    onButtonPress={ () => {}} 
                    textBtn={t('Payment.myAppointments')}
                />
            </View>
        </AppLayout>
        
    )
}