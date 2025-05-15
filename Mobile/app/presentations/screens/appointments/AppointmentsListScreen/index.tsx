import React, { JSX, useState } from 'react';
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

type Props = NativeStackScreenProps<RootStackParamList, 'AppointmentsList'>;

const goToDetail = () => {
    if (navigationRef.isReady()) {
        navigationRef.navigate('AppointmentDetail');
    }    
}

const ActiveRoute = () => {
    return (
        <ScrollView contentContainerStyle={styles.appointmentListContainer}>
            <AppointmentCard
                doctorName="Sophia Davis"
                specialty="Pediatrician"
                date="March 17, 2025"
                time="09 : 30"
                timingInfo="in 15 minutes"
                source= {Doctor}
                type= {TypeConsultation.HOMEVISIT}
                onPress={goToDetail}
            />
        </ScrollView>
    )
}

const CancelledRoute = () => {
    return (
        <ScrollView contentContainerStyle={styles.appointmentListContainer}>
            <AppointmentCard
                doctorName="Sophia Davis"
                specialty="Pediatrician"
                date="March 17, 2025"
                time="09 : 30"
                source= {Doctor}
                type= {TypeConsultation.ONLINE}
                onPress={goToDetail}
            />
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

    const renderScene = SceneMap({
        active: ActiveRoute,
        cancelled: CancelledRoute
    });

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
            <ProfilHeader photo={Photo} name={'Therèse Rabe'} />
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
