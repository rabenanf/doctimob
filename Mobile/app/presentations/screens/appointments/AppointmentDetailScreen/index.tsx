import React, { JSX } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../data/interface';
import AppLayout from '../../../layout';
import DoctorDetailCard from '../../../components/DoctorDetailCard';
import Doctor from '../../../../resources/assets/images/doctor.png';
import { TypeConsultation } from '../../../../data/enum';
import { RoundedButton } from '../../../components/RoundedButton';
import { useTranslation } from 'react-i18next';
import EarthIcon from '../../../../resources/assets/icons/Earth.svg';
import DialogIcon from '../../../../resources/assets/icons/Dialog.svg';
import WatchIcon from '../../../../resources/assets/icons/Stopwatch.svg';
import InfoIcon from '../../../../resources/assets/icons/Info_Square.svg';

type Props = NativeStackScreenProps<RootStackParamList, 'AppointmentDetail'>;

export const  AppointmentDetailScreen = ({navigation}: Props): JSX.Element => {

    const { t } = useTranslation();

    return (
        <AppLayout>
            <DoctorDetailCard
                doctorName="Olivia Smith"
                specialty="Cardiologist"
                date="21 March 2025"
                time="09:30 AM"
                onCancel={() => console.log('Cancel pressed')}
                onVideoCall={() => console.log('Video Call pressed')}
                onBack={() => console.log('Back pressed')}
                imageSource={Doctor} 
                type={TypeConsultation.HOMEVISIT}            />
            <View style={styles.appointmentContainer} >
                <View style={styles.detailContainer}>
                    <View style={styles.iconContainer} >
                        <WatchIcon width={20} height={20}/>
                    </View>
                    <View style={styles.descContainer}>
                        <Text style={styles.desc}> {t('Appointment.startTime')} </Text>
                        <Text style={styles.value}> { '0h : 05m' } </Text>
                    </View>
                </View>
                <View style={styles.detailContainer}>
                    <View style={styles.iconContainer} >
                        <EarthIcon width={20} height={20}/>
                    </View>
                    <View style={styles.descContainer}>
                        <Text style={styles.desc}> {t('Appointment.language')} </Text>
                        <Text style={styles.value}> { 'English' }</Text>
                    </View>
                </View>
                {/*<View style={styles.detailContainer}>
                    <View style={styles.iconContainer} >
                        <InfoIcon width={20} height={20}/>
                    </View>
                    <View style={styles.descContainer}>
                        <Text style={styles.desc}> { t('Appointment.chatInfo') }</Text>
                    </View>
                </View>*/}
                <View style={styles.detailContainer}>
                    <View style={styles.iconContainer} >
                        <DialogIcon width={20} height={20}/>
                    </View>
                    <View style={styles.descContainer}>
                        <Text style={styles.value}> {t('Appointment.chat')} </Text>
                    </View>
                    <View style={styles.avatarContainer}>
                        <Image
                        source={Doctor} 
                        style={styles.avatar}
                        />
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>1</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.btnContainer}>
                <RoundedButton 
                    isPrimary={true}
                    onButtonPress={ () => {}} 
                    textBtn={t('Appointment.joinCall')}
                />
            </View>
        </AppLayout>
    )
}