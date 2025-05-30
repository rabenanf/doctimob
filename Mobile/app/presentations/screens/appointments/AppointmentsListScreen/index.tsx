import React, { JSX, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../data/interface';
import AppLayout from '../../../layout';
import AppointmentCard from '../../../components/AppointmentCard';
import { useTranslation } from 'react-i18next';
import { ProfilHeader } from '../../../components/ProfilHeader';
import Photo from '../../../../resources/assets/images/photo.png';
import Doctor from '../../../../resources/assets/images/doctor.png';
import { SceneMap, TabView } from 'react-native-tab-view';
import { navigationRef } from '../../../../routers/NavigationService';
import { TypeConsultation } from '../../../../data/enum';
import useUserStore from '../../../../services/redux/userStore';
import { AppointmentService } from '../../../../services/application/appointment.sa';
import { UserService } from '../../../../services/application/user.sa';
import moment from 'moment';
import { convertToAmPm } from '../../../../services/utils/dateUtil';

type Props = NativeStackScreenProps<RootStackParamList, 'AppointmentsList'>;

const goToDetail = () => {
    /*if (navigationRef.isReady()) {
        navigationRef.navigate('AppointmentDetail');
    } */   
}

const ActiveRoute = (appointments : any[]) => {
    const { t } = useTranslation();
    return (
        <ScrollView contentContainerStyle={styles.appointmentListContainer}>
            { appointments.length == 0 ?
                <Text style={styles.noResponse}> {t('Appointment.noResponse')} </Text>
                :
                appointments.map((appointment) => {
                    return (
                        <AppointmentCard
                            doctorName={appointment.doctor?.first_name + ' '+ appointment.doctor?.last_name}
                            specialty={appointment.doctor?.speciality_doctor_id?.name}
                            date={moment(appointment.request_id?.preferred_date).format('DD MMMM YYYY')}
                            time={ appointment.request_id?.preferred_time ? convertToAmPm(appointment.request_id?.preferred_time!) : ''}
                            //timingInfo="in 15 minutes"
                            source= {Doctor}
                            type= {appointment.request_id?.consultation_type!.code}
                            onPress={goToDetail}
                        />
                    )
                })
            }
        </ScrollView>
    )
}

const CancelledRoute = (appointments : any[]) => {
    const { t } = useTranslation();
    return (
        <ScrollView contentContainerStyle={styles.appointmentListContainer}>
            { appointments.length == 0 ?
                <Text style={styles.noResponse}> {t('Appointment.noResponse')} </Text>
                :
                appointments.map((appointment) => {
                    return (
                        <AppointmentCard
                            doctorName={appointment.doctor?.first_name + ' '+ appointment.doctor?.last_name}
                            specialty={appointment.doctor?.speciality_doctor_id?.name}
                            date={moment(appointment.request_id?.preferred_date).format('DD MMMM YYYY')}
                            time={ appointment.request_id?.preferred_time ? convertToAmPm(appointment.request_id?.preferred_time!) : ''}
                            //timingInfo="in 15 minutes"
                            source= {Doctor}
                            type= {appointment.request_id?.consultation_type!.code}
                            onPress={goToDetail}
                        />
                    )
                })
            }
        </ScrollView>
    )
}



export const  AppointmentsListScreen = ({navigation}: Props): JSX.Element => {
    
    const { t } = useTranslation();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'active', title: t('Appointment.active') },
        { key: 'cancelled', title: t('Appointment.cancelled') },
    ]);
    const [appointments, setAppointments] = useState<any[]>([]);
    const { user } = useUserStore();
    const { getAppointmentsByUser } = AppointmentService();
    const { getUserProfileByUserid } = UserService();

    const renderScene = SceneMap({
        active: () => ActiveRoute(appointments.filter(item => item.status == 'accepted')),
        cancelled: () => CancelledRoute(appointments.filter(item => item.status == 'canceled'))
    });

    useEffect(() => {
        const fechData = async() => {
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
        fechData();
    },[])

    const renderTabBar = (props : any) => {
        return (
            <View style={styles.tabBar}>
            {props.navigationState.routes.map((route : any, i : number) => {
                const isFocused = props.navigationState.index === i;
                return (
                <TouchableOpacity
                    key={i}
                    style={[
                    styles.tabStyle,
                    isFocused ? styles.activeTab : styles.inactiveTab,
                    ]}
                    onPress={() => props.jumpTo(route.key)}
                >
                    <Text style={isFocused ? styles.activeLabel : styles.inactiveLabel}>
                    { route.title }
                    </Text>
                </TouchableOpacity>
                );
            })}
            </View>
        );
    };
    
    return (
        <AppLayout>
            <ProfilHeader photo={Photo} name={user?.first_name + ' ' + user?.last_name} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}> { t('Appointment.title') } </Text>
                <Text style={styles.description}> { t('Appointment.description') } </Text>
            </View>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                renderTabBar={renderTabBar}
                onIndexChange={setIndex}
            />
        </AppLayout>
    )
}
