import React, { JSX, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootStackParamList } from '../../../../../data/interface';
import AppLayout from '../../../../layout';
import { TitleHeader } from '../../../../components/TitleHeader';
import { useTranslation } from 'react-i18next';
import VideoIcon from '../../../../../resources/assets/icons/Videocamera.svg';
import HomeIcon from '../../../../../resources/assets/icons/home.svg';
import EyeIcon from '../../../../../resources/assets/icons/Eye.svg';
import ReplyIcon from '../../../../../resources/assets/icons/Auto_reply.svg'; 
import { ResponseCard } from '../../../../components/ResponseCard';
import Photo from '../../../../../resources/assets/images/photo.png';
import { SelectDoctorModal } from '../../../../components/SelectDoctorModal';
import useRequestStore from '../../../../../services/redux/requestStore';
import { convertToAmPm, timeAgo } from '../../../../../services/utils/dateUtil';
import moment from 'moment';
import { DoctorResponseService } from '../../../../../services/application/doctor_response.sa';
import { UserService } from '../../../../../services/application/user.sa';
import { RequestService } from '../../../../../services/application/request.sa';
import { showToast } from '../../../../../services/utils/toast';

type Props = NativeStackScreenProps<RootStackParamList, 'RequestDetails'>;

export const  RequestDetailsScreen = ({navigation}: Props): JSX.Element => {

    const { t } = useTranslation();

    const { current, setSelectedMedicalService } = useRequestStore();

    const [responses, setResponses] = useState<any[]>([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState<any>(undefined);
    const { getDoctorResponseByRequest } = DoctorResponseService();
    const { getUserProfileByUserid } = UserService();
    const { updateRequest } = RequestService();

    const goToProfile = (userId : string) => {
        navigation.navigate('DoctorProfile', {userId : userId});
    }

    const goToPayment = () => {
        navigation.navigate('PaymentCreditCard');
    }

    const selectDoctor = () => {
        setSelectedMedicalService(selectedDoctor);
        navigation.navigate('PaymentCash');
    }

    const cancelRequest = async () => {
        let data = {status : 'CANCELLED'};
        let response = await updateRequest(data, current?.id!);
        if (response.success){
            navigation.navigate('TabHome', {screen: 'MyRequestsList'});
        } 
        else {
            showToast('error', t('Global.error'), response.message);
        }
    }

    useEffect( () => {
        const fechData = async() => {
            let doctorResponse = await getDoctorResponseByRequest(current?.id!);
            if (doctorResponse.success && doctorResponse.responses) {
                let res = doctorResponse.responses;

                const updated = await Promise.all(
                    res.map(async item => {
                        let response = await getUserProfileByUserid(item.doctor_id);
                        console.log('---', response);
                        if (response.success && response.user) {
                            return { ...item, doctor: response.user };
                        }
                        return item;
                    })
                );
                
                setResponses(updated);
            }
        }
        fechData();
    }, [])

    useEffect( () => {
        console.log('Valiny : ', responses );
    }, [responses])    

    return (
        <AppLayout>
            <TitleHeader title={t('RequestDetails.title')} back={() => {navigation.goBack()}} />
            <View style={styles.detailContainer}>
                <View style={styles.requestHeader}>
                    <View style={styles.requestType}>
                        <View style={styles.iconCircle}>
                            {current?.consultation_type.code == 'OFFLINE' ? <HomeIcon width={20} height={20} /> : <VideoIcon width={20} height={20} />}
                        </View>
                        <Text style={styles.typeText}> {current?.consultation_type.code == 'OFFLINE' ? t('NewRequest.homeVisit') : t('NewRequest.online')} </Text>
                    </View>  
                    <View style={styles.requestSeen}>
                        <View style={styles.iconSeen}>
                            <EyeIcon width={20} height={20} />
                        </View>
                        <Text style={styles.statText}>{(0)}</Text>
                    </View> 
                    
                    <View style={styles.requestResponded}>
                        <View style={styles.iconResponded}>
                            <ReplyIcon width={20} height={20} />
                        </View>
                        <Text style={styles.statText}>{0}</Text>
                    </View>
                </View>
                <View style={styles.requestInfoContainer}>
                    <Text style={styles.label}>Description</Text>
                    <Text style={styles.valueBold}>{current?.description}</Text>
                    <View style={styles.row}>
                        <View style={styles.col}>
                            <Text style={styles.label}>Family member :</Text>
                            <Text style={styles.valueBold}>{''}</Text>
                        </View>
                        <View style={styles.col}>
                            <Text style={styles.label}>Payment method :</Text>
                            <Text style={styles.valueBold}>{current?.payment_method.code == 'CB' ? 'Bank Card' : 
                                current?.payment_method.code == 'QR' ? 'QR code' : 'Cash'}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.col}>
                            <Text style={styles.label}>Language :</Text>
                            <Text style={styles.valueBold}>{current?.preferred_language == 'en' ? 'English' : 
                                current?.preferred_language == 'vn' ? 'Viet' : 'Both'}</Text>
                        </View>
                        <View style={styles.col}>
                            <Text style={styles.label}>Publication :</Text>
                            <Text style={styles.valueBold}>{ timeAgo(current?.created_at!)}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.dateContainer}>
                    <Text style={styles.dateTitle}>Preferred Date & Time</Text>

                    <View style={styles.dateRow}>
                        {/* Date */}
                        <View style={{flexDirection: 'row', gap: 10}}>
                            <View style={styles.pill}>
                                <Icon name="calendar" size={16} color="#fff" style={{ marginRight: 6 }} />
                                <Text style={styles.pillText}>{moment(current?.preferred_date!).format('DD MMMM YYYY')}</Text>
                            </View>

                            {/* Time */}
                            <View style={styles.pill}>
                                <Icon name="time" size={16} color="#fff" style={{ marginRight: 6 }} />
                                <Text style={styles.pillText}>{ convertToAmPm(current?.preferred_time!)}</Text>
                            </View>
                        </View>

                        {/* Cancel */}
                        <TouchableOpacity style={styles.cancelButton} onPress={() => cancelRequest()}>
                            <Icon name="close" size={14} color="#fff" style={{ marginRight: 6 }} />
                            <Text style={styles.cancelText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
            <View style={styles.responseContainer}>
                { responses.length == 0 ? 
                <View> 
                    <Text style={styles.noResponse}> {t('RequestDetails.noResponse')} </Text> 
                    <Text style={styles.willNotify}> {t('RequestDetails.willNotify')} </Text>
                </View> 
                :
                <>
                    <Text style={styles.withResponse}> {responses.length} {t('RequestDetails.withResponse')} </Text>
                    <ScrollView style={{flexDirection: 'column', rowGap: 10}}>
                        {
                            responses.map((response) => {
                                return (
                                    <ResponseCard 
                                        message={response.comment} 
                                        photo={Photo} 
                                        price={response.price} 
                                        name={response.doctor?.first_name + ' '+ response.doctor?.last_name} 
                                        specialty={response.doctor?.speciality_doctor_id.name} 
                                        rate={'0'} 
                                        id={response.id} 
                                        seeProfil={() => {
                                            goToProfile(response.doctor?.id);
                                        } } 
                                        selectDoctor={() => {
                                            setSelectedDoctor(response);
                                            setModalVisible(true);
                                            //goToPayment();
                                        }} 
                                    />
                                )
                            })
                        }    
                    </ScrollView>
                </> 
                }
            </View>
            <Modal  
                animationType="slide"
                transparent={true}
                visible={modalVisible}>
                <SelectDoctorModal 
                    photo={Photo}
                    price={selectedDoctor?.price}
                    name={'Dr. ' + selectedDoctor?.doctor.first_name + ' '+ selectedDoctor?.doctor.last_name}
                    specialty={selectedDoctor?.doctor.speciality_doctor_id.name}
                    type={current?.consultation_type.code}
                    date={moment(current?.preferred_date!).format('DD MMMM YYYY')}
                    time={convertToAmPm(current?.preferred_time!)}
                    id={selectedDoctor?.id}
                    selectDoctor={selectDoctor} 
                    closeModal={() => {setModalVisible(false)}} />
            </Modal>    

        </AppLayout>
    )
}
