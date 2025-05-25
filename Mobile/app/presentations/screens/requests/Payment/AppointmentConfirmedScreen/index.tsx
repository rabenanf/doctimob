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
import HomeIcon from '../../../../../resources/assets/icons/home.svg';
import useRequestStore from "../../../../../services/redux/requestStore";
import moment from "moment";
import { convertToAmPm } from "../../../../../services/utils/dateUtil";

type Props = NativeStackScreenProps<RootStackParamList, 'AppointmentConfirmed'>;

export const  AppointmentConfirmedScreen = ({navigation}: Props): JSX.Element => {
    const { t } = useTranslation();
    const { current, selectedMedicalService } = useRequestStore();
    let preferred_time = convertToAmPm(current?.preferred_time!).split(' ');
    return (
        <AppLayout>
            <TitleHeader title={t('Payment.confirmed')} back={() => {navigation.goBack()}} />
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
                            <Text style={styles.name}> {'Dr. '} {selectedMedicalService?.doctor.first_name + ' '+ selectedMedicalService?.doctor.last_name}</Text>
                            <Text style={styles.specialty}> {selectedMedicalService?.doctor.speciality_doctor_id.name} </Text>
                        </View>
                        <View style={styles.detailContainer}>
                            <View style={styles.detail}>
                                <Icon name="calendar" size={16} color="#000" style={{ marginRight: 6 }} />
                                <View style={{ flexDirection : 'column'}}>
                                    <View style={styles.pill}>
                                        <Text style={styles.pillText}> {moment(current?.preferred_date!).format('DD MMMM YYYY')} </Text>
                                    </View>
                                    <View style={styles.pill}>
                                        <Text style={styles.pillText}> {preferred_time[0]} </Text>
                                        <Text style={styles.highlightText}> {preferred_time[1]} </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.iconCircle}>
                                {current?.consultation_type.code == 'OFFLINE' ? <HomeIcon width={20} height={20} /> : <VideoIcon width={20} height={20} />}
                            </View>
                        </View>
                    </View>
                </View>
                <RoundedButton 
                    isPrimary={true}
                    onButtonPress={ () => { navigation.navigate('TabHome', {screen: 'AppointmentsList'}) }} 
                    textBtn={t('Payment.myAppointments')}
                />
            </View>
        </AppLayout>
        
    )
}