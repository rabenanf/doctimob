import React, { JSX, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../data/interface';
import AppLayout from '../../../layout';
import { ProfilHeader } from '../../../components/ProfilHeader';
import Photo from '../../../../resources/assets/images/photo.png';
import Doctor from '../../../../resources/assets/images/doctor.png';
import { useTranslation } from 'react-i18next';
import { AppointmemtPhotoCard } from '../../../components/AppointmentPhotoCard';
import { RequestCard } from '../../../components/RequestCard';
import useUserStore from '../../../../services/redux/userStore';
import { RequestService } from '../../../../services/application/request.sa';
import { AppointmentService } from '../../../../services/application/appointment.sa';
import { UserService } from '../../../../services/application/user.sa';
import moment from 'moment';
import { convertToAmPm } from '../../../../services/utils/dateUtil';
import useRequestStore from '../../../../services/redux/requestStore';
import { navigationRef } from '../../../../routers/NavigationService';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = ({ navigation }: Props): JSX.Element => {

    const { t } = useTranslation();
    const { user } = useUserStore(); 
    const { getRequestsByUser } = RequestService();
    const { getAppointmentsByUser } = AppointmentService();
    const [appointments, setAppointments] = useState<any[]>([]);
    const [requests, setRequests] = useState<any[]>([]);
    const { getUserProfileByUserid } = UserService();
    const { setCurrent } = useRequestStore(); 

    useEffect( () => {
        const fechData = async() => {
            let requestResponse = await getRequestsByUser(user!.user_id!);
            if (requestResponse.success && requestResponse.requests) {
                setRequests(requestResponse.requests);
            }
        }
        fechData();
        const fechAppointment = async() => {
            let response = await getAppointmentsByUser(user?.user_id!);
            if (response.success && response.appointments) {
                let res = response.appointments;

                const updated = await Promise.all(
                    res.map(async (item) => {
                        let response = await getUserProfileByUserid(item.doctor_id);
                        console.log('---', response);
                        if (response.success && response.user) {
                            return { ...item, doctor: response.user };
                        }
                        return item;
                    })
                );
                
                setAppointments(updated);
            }    
        }
        fechAppointment();
    }, [])

    const goToDetail = (id : string) => {
        let current = requests.filter(item => item.id == id)[0];
        setCurrent(current);
        if (navigationRef.isReady()) {
            navigationRef.navigate('RequestDetails');
        }
    }

    return (
        <AppLayout>
            <ProfilHeader photo={Photo} name={user?.first_name + ' ' + user?.last_name} />
            <View style={styles.homeContainer}>
                <View style={styles.appointmentContainer}>
                    <View style={styles.headerHome}>
                        <View style={styles.sectionTitle}>
                            <Text style={styles.txtNew}> {t('Home.next')} </Text>
                            <Text style={styles.txtTitle}> {t('Home.appointments')}</Text>
                        </View>
                        <TouchableOpacity style={styles.headerViewAll}>
                            <Text style={styles.txtViewAll}> {t('Home.viewAll')} </Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.scrollContainer}
                    >
                        {
                            appointments.map( (appointment) => {
                                return (
                                    <AppointmemtPhotoCard
                                        key={appointment.id}
                                        name={appointment.doctor?.first_name + ' '+ appointment.doctor?.last_name}
                                        specialty={appointment.doctor?.specialty_id?.name}
                                        date={moment(appointment.request_id?.preferred_date).format('DD MMMM YYYY')}
                                        time={ appointment.request_id?.preferred_time ? convertToAmPm(appointment.request_id?.preferred_time!) : ''}
                                        image={Doctor}
                                        type={appointment.request_id?.consultation_type!.code}
                                    />
                                )
                            })
                        }
                        {/*<AppointmemtPhotoCard
                            name="Olivia Smith"
                            specialty="Cardiologist"
                            date="21 March 2025"
                            time="09:30 AM"
                            image={Doctor}
                        />
                        <AppointmemtPhotoCard
                            name="James Wilson"
                            specialty="Dermatologist"
                            date="22 March 2025"
                            time="10:15 AM"
                            image={Doctor}
                        />
                        <AppointmemtPhotoCard
                            name="Emma Brown"
                            specialty="Neurologist"
                            date="23 March 2025"
                            time="11:00 AM"
                            image={Doctor}
                        />*/}
                    </ScrollView>

                </View>
                <View style={styles.requestContainer}>
                    <View style={styles.headerHome}>
                        <View style={styles.sectionTitle}>
                            <Text style={styles.txtNew}> {t('Home.my')} </Text>
                            <Text style={styles.txtTitle}> {t('Home.requests')} </Text>
                        </View>
                        <TouchableOpacity style={styles.headerViewAll}>
                            <Text style={styles.txtViewAll}> {t('Home.viewAll')} </Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView contentContainerStyle={styles.requestListContainer}>
                        {
                            requests.map((request) => {
                                return (
                                    <RequestCard
                                        title={request.description!}
                                        date={moment(request.preferred_date!).format('DD MMMM YYYY')}
                                        time={ convertToAmPm(request.preferred_time!)}
                                        nbSeen={0}
                                        nbResponded={0} 
                                        key={request.id}
                                        type={request.consultation_type!.code == 'OFFLINE' ? t('NewRequest.homeVisit') : t('NewRequest.online')} 
                                        goToDetail={() => goToDetail(request.id!)}
                                    />
                                )
                            })
                        }
                        {/*<RequestCard
                            title="Recurring headaches after screen exposure"
                            date="21 March 2025"
                            time="09:30 AM"
                            nbSeen={15}
                            nbResponded={0} 
                            type={'Video consultation'}
                            goToDetail={() => goToDetail()}                        />
                        <RequestCard
                            title="Skin rash consultation"
                            date="22 March 2025"
                            time="10:15 AM"
                            nbSeen={10}
                            nbResponded={2}
                            type={'Video consultation'}
                            goToDetail={() => goToDetail()} 
                        />
                        <RequestCard
                            title="Digestive discomfort evaluation"
                            date="23 March 2025"
                            time="11:00 AM"
                            nbSeen={5}
                            nbResponded={1}
                            type={'Video consultation'} 
                            goToDetail={() => goToDetail()}
                        />*/}
                    </ScrollView>
                </View>
            </View>
        </AppLayout>

    )
}