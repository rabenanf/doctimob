import React, { JSX } from 'react';
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

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = ({ navigation }: Props): JSX.Element => {

    const { t } = useTranslation();

    const goToDetail = () => {
        navigation.navigate('RequestDetails');
    }

    return (
        <AppLayout>
            <ProfilHeader photo={Photo} name={'Therèse Rabe'} />
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
                        <AppointmemtPhotoCard
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
                        />
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
                        <RequestCard
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
                        />
                    </ScrollView>
                </View>
            </View>
        </AppLayout>

    )
}