import React, { JSX, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootStackParamList } from '../../../../../data/interface';
import AppLayout from '../../../../layout';
import { TitleHeader } from '../../../../components/TitleHeader';
import { useTranslation } from 'react-i18next';
import VideoIcon from '../../../../../resources/assets/icons/Videocamera.svg';
import EyeIcon from '../../../../../resources/assets/icons/Eye.svg';
import ReplyIcon from '../../../../../resources/assets/icons/Auto_reply.svg'; 
import { ResponseCard } from '../../../../components/ResponseCard';
import Photo from '../../../../../resources/assets/images/photo.png';
import { SelectDoctorModal } from '../../../../components/SelectDoctorModal';

type Props = NativeStackScreenProps<RootStackParamList, 'RequestDetails'>;

export const  RequestDetailsScreen = ({navigation}: Props): JSX.Element => {

    const { t } = useTranslation();

    const [response, setResponse] = useState(['a','b']);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedDoctorId, setSelectedDoctorId] = useState(0);

    const goToProfile = () => {
        navigation.navigate('DoctorProfile');
    }

    return (
        <AppLayout>
            <TitleHeader title={t('RequestDetails.title')} />
            <View style={styles.detailContainer}>
                <View style={styles.requestHeader}>
                    <View style={styles.requestType}>
                        <View style={styles.iconCircle}>
                            <VideoIcon width={20} height={20} />
                        </View>
                        <Text style={styles.typeText}> {'Video Consultation'} </Text>
                    </View>  
                    <View style={styles.requestSeen}>
                        <View style={styles.iconSeen}>
                            <EyeIcon width={20} height={20} />
                        </View>
                        <Text style={styles.statText}>{(8)}</Text>
                    </View> 
                    
                    <View style={styles.requestResponded}>
                        <View style={styles.iconResponded}>
                            <ReplyIcon width={20} height={20} />
                        </View>
                        <Text style={styles.statText}>{4}</Text>
                    </View>
                </View>
                <View style={styles.requestInfoContainer}>
                    <Text style={styles.label}>Description</Text>
                    <Text style={styles.valueBold}>Recurring headaches after screen exposure</Text>
                    <View style={styles.row}>
                        <View style={styles.col}>
                            <Text style={styles.label}>Family member :</Text>
                            <Text style={styles.valueBold}>Olivia</Text>
                        </View>
                        <View style={styles.col}>
                            <Text style={styles.label}>Payment method :</Text>
                            <Text style={styles.valueBold}>Bank card</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.col}>
                            <Text style={styles.label}>Language :</Text>
                            <Text style={styles.valueBold}>English</Text>
                        </View>
                        <View style={styles.col}>
                            <Text style={styles.label}>Publication :</Text>
                            <Text style={styles.valueBold}>5 hours ago</Text>
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
                                <Text style={styles.pillText}>21 March 2025</Text>
                            </View>

                            {/* Time */}
                            <View style={styles.pill}>
                                <Icon name="time" size={16} color="#fff" style={{ marginRight: 6 }} />
                                <Text style={styles.pillText}>09:30 AM</Text>
                            </View>
                        </View>

                        {/* Cancel */}
                        <TouchableOpacity style={styles.cancelButton}>
                            <Icon name="close" size={14} color="#fff" style={{ marginRight: 6 }} />
                            <Text style={styles.cancelText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
            <View style={styles.responseContainer}>
                { response.length == 0 ? 
                <View> 
                    <Text style={styles.noResponse}> {t('RequestDetails.noResponse')} </Text> 
                    <Text style={styles.willNotify}> {t('RequestDetails.willNotify')} </Text>
                </View> 
                :
                <>
                    <Text style={styles.withResponse}> {response.length} {t('RequestDetails.withResponse')} </Text>
                    <ScrollView style={{flexDirection: 'column', rowGap: 10}}>
                        <ResponseCard 
                            message={'Hello! I\'d be happy to assist you. I\'ve worked with similar neurological complaints before, and I focus on listening carefully to my patients\' needs to guide treatment effectively.'} 
                            photo={Photo} 
                            price={55} name={'Laura Nguyen'} 
                            specialty={'Pediatrician'} 
                            rate={'4.5'} 
                            id={1} 
                            seeProfil={(id: number) => {
                               
                            } } 
                            selectDoctor={(id: number) => {
                                setModalVisible(true);
                                setSelectedDoctorId(id);
                            } } />
                        <ResponseCard 
                            message={'Hi, I regularly treat patients with chronic migraines and visual strain symptoms.   I believe I can help you better understand the causes and provide a tailored approach. Looking forward to helping you.'} 
                            photo={Photo} 
                            price={70} name={'Henry Tran'} 
                            specialty={'Neurologist'} 
                            rate={'4.8'} 
                            id={2} 
                            seeProfil={(id: number) => {
                               goToProfile();
                            } } 
                            selectDoctor={(id: number) => {
                                setModalVisible(true);
                                setSelectedDoctorId(id);
                            } } />                    
                            
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
                    price={55}
                    name={'Dr. Henry Tran'}
                    specialty={'Neurologist'}
                    type={''}
                    date={'21 March 2025'}
                    time={'09:30 AM'}
                    id={selectedDoctorId}
                    selectDoctor={setSelectedDoctorId} 
                    closeModal={() => {setModalVisible(false)}} />
            </Modal>    

        </AppLayout>
    )
}
