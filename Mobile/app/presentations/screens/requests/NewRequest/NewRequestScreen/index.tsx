import React, { JSX, useEffect, useRef, useState } from 'react';
import { View, Text, Touchable, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../data/interface';
import AppLayout from '../../../../layout';
import { ProfilHeader } from '../../../../components/ProfilHeader';
import Photo from '../../../../../resources/assets/images/photo.png';
import { useTranslation } from 'react-i18next';
import { RoundedButton } from '../../../../components/RoundedButton';
import QRIcon from "../../../../../resources/assets/icons/qr.svg";
import QRBlackIcon from "../../../../../resources/assets/icons/qr_black.svg";
import CBIcon from "../../../../../resources/assets/icons/cb.svg";
import CBBlackIcon from "../../../../../resources/assets/icons/cb_black.svg";
import CashIcon from "../../../../../resources/assets/icons/cash_white.svg";
import CashBlackIcon from "../../../../../resources/assets/icons/cash_black.svg";
import HomeIcon from "../../../../../resources/assets/icons/home.svg";
import CameraIcon from "../../../../../resources/assets/icons/Videocamera.svg";
import EnglishIcon from "../../../../../resources/assets/icons/english.svg";
import VietIcon from "../../../../../resources/assets/icons/vietnam.svg";
import { Gender, Language, PaymentMethod, TypeConsultation } from "../../../../../data/enum";
import CustomToogle from '../../../../components/CustomToogle';
import { Theme } from "../../../../../resources/themes"
import TimeSelector from '../../../../components/TimeSelector';
import { Times } from '../../../../../data/const/constants';
import DaySelector from '../../../../components/DaySelector';
import DropDown from '../../../../components/DropDown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import useUserStore from '../../../../../services/redux/userStore';
import { LanguageService } from '../../../../../services/application/language.sa';
import { RequestService } from '../../../../../services/application/request.sa';
import { showToast } from '../../../../../services/utils/toast';
import { CustomActivityIndicator } from '../../../../components/CustomActivityIndicator';
import { PatientRequest } from '../../../../../data/dto/Request.type';
import { ConsultationTypeService } from '../../../../../services/application/consultation_type.sa';
import { SpecialtyService } from '../../../../../services/application/specialty.sa';
import { PaymentMethodService } from '../../../../../services/application/payment_method.sa';
import { FamilyMemberService } from '../../../../../services/application/familymember.sa';
import { convertTo24Hour, getNext30MinuteSlotFormatted } from '../../../../../services/utils/dateUtil';

type Props = NativeStackScreenProps<RootStackParamList, 'NewRequest'>;

export const NewRequestScreen = ({ navigation }: Props): JSX.Element => {

    const { t } = useTranslation();
    const { getLanguageIdByCode } = LanguageService();
    const { createRequest } = RequestService();
    const { getAllMethod } = PaymentMethodService();

    const myComponentRef = useRef<any>(null);

    const formatDate = (date: Date): string => {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',   // ex: Friday
            month: 'long',     // ex: March
            day: 'numeric',    // ex: 14
        });
    };

    const { user } = useUserStore(); 
    const { getMembersByPatient } = FamilyMemberService();
    const [paymentMethod, setPaymentMethod] = useState(PaymentMethod.CB);
    const [consultationMethod, setConsultationMethod] = useState(TypeConsultation.HOMEVISIT);
    const [preferredlanguage, setPreferredLanguage] = useState(Language.BOTH);
    const [selectedTime, setSelectedTime] = useState<string | undefined>("09:00 AM");
    const [selectedDay, setSelectedDay] = useState(new Date());
    const [hasInsurance, setHasInsurance] = useState(false);
    const [preferredGender, setPreferredGender] = useState(Gender.NO);
    const [description, setDescription] = useState<string | undefined>(undefined);
    const [specialties, setSpecialties] = useState<any[]>([]);
    const [specialtiesName, setSpecialtiesName] =  useState<string[]>([]);
    const [types, setTypes] = useState<any[]>([]);
    const [paymentTypes, setPaymentTypes] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const {getAllType} = ConsultationTypeService();
    const {getAllSpecialty} = SpecialtyService();

    const [familyMemberDropdownVisible, setFamilyMemberDropdownVisible] = useState(false);
    const [familyMembers, setFamilyMembers]= useState<any[]>([]);
    const [familyMembersList, setFamilyMembersList]= useState<any[]>([]);
    const [familyMember, setFamilyMember] = useState<string | undefined >(undefined);
    const [familyMemberId, setFamilyMemberId] = useState<string | undefined >(undefined);

    const handleFamilyMemberSelect = (member : string) => {
        let selected = familyMembersList.filter(item => { return item.first_name + ' ' + item.last_name == member})
        console.log('####', member, '####', selected );
        setFamilyMemberId(selected[0].id);
        setFamilyMemberId(member);
    }
    const [specialtyDropdownVisible, setSpecialtyDropdownVisible] = useState(false);
    const [specialty, setSpecialty] = useState<string | undefined>(undefined);
    const handleSpecialtySelect = (specialty : string) => {
        setSpecialty(specialty);
    }

    const verifySelectedTime = (time : string) => {
        const timeString = convertTo24Hour(time);
        const date = new Date( selectedDay.getFullYear() + '-' + (selectedDay.getMonth() + 1)+ '-' + selectedDay.getDate() + ' ' + timeString)
        console.log('+++++++++++', date.toISOString());
        console.log('++', date.getTime() ,'mamdalo ato', Date.now());
        if (date.getTime() > Date.now()) {
            console.log('tsy rarahany');
            setSelectedTime(time);
        }
        else {
            console.log('efa lasa e');
            setSelectedTime(undefined);
            myComponentRef.current?.setTime(undefined);
        }
    }

    useEffect(() => {
        if (selectedTime) verifySelectedTime(selectedTime!);
    }, [selectedDay])    


    const createRequestAction = async () => {
        // setLoading(true);
        let consultationType = null;
        if (consultationMethod == TypeConsultation.HOMEVISIT) {
            let data = types.filter(item => item.code == 'OFFLINE');
            consultationType = data[0].id;
        }
        else if (consultationMethod == TypeConsultation.ONLINE) {
            let data = types.filter(item => item.code == 'ONLINE');
            consultationType = data[0].id;
        }
        console.log('######', consultationType);
        let paymentTypeId = null;
        if (paymentMethod == PaymentMethod.CB) {
            let data = paymentTypes.filter(item =>item.code == 'CB');
            paymentTypeId = data[0].id;
        }
        else if (paymentMethod == PaymentMethod.QR) {
            let data = paymentTypes.filter(item =>item.code == 'QR');
            paymentTypeId = data[0].id;
        }
        else {
            let data = paymentTypes.filter(item =>item.code == 'CP');
            paymentTypeId = data[0].id;
        }
        const code = preferredlanguage == Language.ENGLISH ? 'en' : Language.VIET ? 'vn' : null;
        const spec = specialty ? specialties.filter((item) => {return item.name == specialty})[0].id : undefined;
        let language_id = code !=  null ? await getLanguageIdByCode(code) : null;
        let data : Partial<PatientRequest> = {
            patient_id : user!.user_id,
            description: description,
            has_insurance: hasInsurance,
            caregiver_gender_preference: preferredGender == Gender.MALE ? 'male' : preferredGender == Gender.FEMALE ? 'female' : 'both',
            preferred_time: selectedTime,
            preferred_date: selectedDay.toUTCString(),
            preferred_language: language_id,
            consultation_type: consultationType,
            payment_method: paymentTypeId,
            status: 'ACTIVE',
            share_medical_history: true
        }
        if (familyMember)
            data.family_mamber_id = familyMemberId;

        if (specialty)
           data.specialty_id = spec,
            
        console.log('--data----', data);

        if (selectedDay && selectedTime && (selectedDay.getTime() > Date.now())) {
            let response = await createRequest(data );
            if (response.success) {
                setLoading(false);
                navigation.navigate('NewRequestConfirm');
            }
            else {
                showToast('error', t('Global.error'), response.message);
            }
        }
        else {
            showToast('error', t('Global.error'), t('NewRequest.errorCreate'));
        }
        setLoading(false);
        
    }

    useEffect(() => {
        const fechData = async() => {
            let response = await getAllSpecialty();
            if (response.success) {
                setSpecialties(response.specialties ?? []);
            }
            let responseMember = await getMembersByPatient(user?.user_id!);
            if (responseMember.success) {
                let res = responseMember.members ?? [];
                setFamilyMembersList(res);
                let list = res.map((item) => { return item.first_name + ' ' + item.last_name});
                setFamilyMembers(list);
            }
            let response1 = await getAllType();
            if (response1.success) {
                setTypes(response1.types ?? []);
            }
            let response2 = await getAllMethod();
            if (response1.success) {
                setPaymentTypes(response2.types ?? []);
            }
        }
        fechData();
        //setSelectedTime(getNext30MinuteSlotFormatted);
    }, [])

    useEffect(() => {
        let names = specialties.map((item) => { return item.name });
        setSpecialtiesName(names);
    }, [specialties])    

    return (
        <AppLayout>
            <ProfilHeader photo={Photo} name={user?.first_name + ' ' + user?.last_name} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}> {t('NewRequest.title')} </Text>
                <Text style={styles.description}> {t('NewRequest.description')} </Text>
            </View>
            <View style={styles.detailContainer}>
                <KeyboardAwareScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    enableOnAndroid={true}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.medicalInfo}>
                        <Text style={styles.sectionTitle}> {t('NewRequest.medicalInfoTitle').toUpperCase()} </Text>
                        <Text> {t('NewRequest.familyMember')} </Text>
                        <DropDown
                            data={familyMembers}
                            name="familyMember"
                            placeholder= {t('NewRequest.familyMember')}
                            onSelect={handleFamilyMemberSelect}
                            isError={false}
                            defaultValue={familyMember}
                            active={true}
                            isVisible={familyMemberDropdownVisible}
                            setIsVisible={setFamilyMemberDropdownVisible} 
                            checkValidity={(name: string) => {
                                
                            }}
                        />

                        
                        <View style={styles.shareHistoryContainer}>
                            <CustomToogle label={t('NewRequest.shareHistory')} handleEnabled={function (value: boolean): void {
                            }} defaultState={false} />
                        </View>
                        
                        <Text>{t('NewRequest.descriptionArea')}</Text>
                        <TextInput
                            value={description}
                            onChangeText={(text) => setDescription(text)}
                            placeholder={t('NewRequest.descriptionArea') + '...'}
                            multiline
                            style={styles.descriptionText}
                        />

                        <Text>{t('NewRequest.specialty')}</Text>
                        <DropDown
                            data={specialtiesName}
                            name="specialty"
                            placeholder={t('NewRequest.specialty')}
                            onSelect={handleSpecialtySelect}
                            isError={false}
                            defaultValue={specialty}
                            active={true}
                            isVisible={specialtyDropdownVisible}
                            setIsVisible={setSpecialtyDropdownVisible} 
                            checkValidity={(name: string) => {
                                
                            }}
                        />    

                        <Text>{t('NewRequest.preferredGender')}</Text>
                        <View style={styles.methodContainer}>
                            <TouchableOpacity style={ preferredGender == Gender.NO ? styles.methodSelected : styles.method}
                                onPress={() => setPreferredGender(Gender.NO)}>
                                <Text style={ preferredGender == Gender.NO ? styles.textSelected : styles.text}> {t('NewRequest.noPreference')} </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={ preferredGender == Gender.MALE ? styles.methodSelected : styles.method}
                                onPress={() => setPreferredGender(Gender.MALE)}>
                                <Text style={ preferredGender == Gender.MALE ? styles.textSelected : styles.text}> {t('NewRequest.male')} </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={ preferredGender == Gender.FEMALE ? styles.methodSelected : styles.method}
                                onPress={() => setPreferredGender(Gender.FEMALE)}>
                                <Text style={ preferredGender == Gender.FEMALE ? styles.textSelected : styles.text}> {t('NewRequest.female')} </Text>
                            </TouchableOpacity>
                        </View>
                        
                        <Text>{t('NewRequest.insurance')}</Text>
                        <View style={styles.methodContainer}>
                            <TouchableOpacity style={! hasInsurance ? styles.methodSelected : styles.method}
                                onPress={() => setHasInsurance(false)}>
                                <Text style={! hasInsurance ? styles.textSelected : styles.text}> {t('NewRequest.No')} </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={hasInsurance ? styles.methodSelected : styles.method}
                                onPress={() => setHasInsurance(true)}>
                                <Text style={hasInsurance ? styles.textSelected : styles.text}> {t('NewRequest.Yes')} </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.dateTime}>
                        <Text style={styles.sectionTitle}> {t('NewRequest.preferredDateTitle').toUpperCase()} </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 12, fontWeight: 400 }}> {t('NewRequest.chooseDay')} </Text>
                            <Text style={{ fontSize: 12, fontWeight: 700 }}> {formatDate(selectedDay)} </Text>
                        </View>
                        <DaySelector
                            daysCount={30}
                            onSelect={(date: Date) => setSelectedDay(date)}
                            selectedDate={selectedDay}
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 12, fontWeight: 400 }}> {t('NewRequest.chooseTime')} </Text>
                            <Text style={{ fontSize: 12, fontWeight: 700 }}> {selectedTime} </Text>
                        </View>
                        <TimeSelector
                            ref={myComponentRef}
                            times={Times}
                            initialValue={selectedTime}
                            onSelect={(time) => verifySelectedTime(time)}
                        />
                    </View>
                    <View style={styles.consultation}>
                        <Text style={styles.sectionTitle}> {t('NewRequest.consultationTitle').toUpperCase()} </Text>
                        <View style={styles.methodContainer}>
                            <TouchableOpacity style={[consultationMethod == TypeConsultation.HOMEVISIT ? styles.methodSelected : styles.method, {justifyContent : 'space-between', paddingHorizontal : 16}]}
                                onPress={() => setConsultationMethod(TypeConsultation.HOMEVISIT)}>
                                <View style={consultationMethod == TypeConsultation.HOMEVISIT ? styles.typeSelected : styles.type}>
                                    <HomeIcon />
                                </View>
                                <Text style={consultationMethod == TypeConsultation.HOMEVISIT ? styles.textSelected : styles.text}> {t('NewRequest.homeVisit')} </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[consultationMethod == TypeConsultation.ONLINE ? styles.methodSelected : styles.method, , {justifyContent : 'space-between', paddingHorizontal : 16}]}
                                onPress={() => setConsultationMethod(TypeConsultation.ONLINE)}>
                                <View style={consultationMethod == TypeConsultation.ONLINE ? styles.typeSelected : styles.type}>
                                    <CameraIcon />
                                </View>
                                <Text style={consultationMethod == TypeConsultation.ONLINE ? styles.textSelected : styles.text}> {t('NewRequest.online')} </Text>
                            </TouchableOpacity>
                        </View>
                        <Text> {t('NewRequest.preferredLanguage')} </Text>
                        <View style={styles.methodContainer}>
                            <TouchableOpacity style={preferredlanguage == Language.BOTH ? styles.methodSelected : styles.method}
                                onPress={() => setPreferredLanguage(Language.BOTH)}>
                                <Text style={preferredlanguage == Language.BOTH ? styles.textSelected : styles.text}> {t('NewRequest.both')} </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={preferredlanguage == Language.VIET ? styles.methodSelected : styles.method}
                                onPress={() => setPreferredLanguage(Language.VIET)}>
                                <VietIcon />
                                <Text style={preferredlanguage == Language.VIET ? styles.textSelected : styles.text}> {t('NewRequest.vietnamese')} </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={preferredlanguage == Language.ENGLISH ? styles.methodSelected : styles.method}
                                onPress={() => setPreferredLanguage(Language.ENGLISH)}>
                                <EnglishIcon />
                                <Text style={preferredlanguage == Language.ENGLISH ? styles.textSelected : styles.text}> {t('NewRequest.english')} </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.payment}>
                        <Text style={styles.sectionTitle}> {t('NewRequest.paymentTitle').toUpperCase()} </Text>
                        <View style={styles.methodContainer}>
                            <TouchableOpacity style={paymentMethod == PaymentMethod.CB ? styles.methodSelected : styles.method}
                                onPress={() => setPaymentMethod(PaymentMethod.CB)}>
                                {paymentMethod == PaymentMethod.CB ? <CBIcon /> : <CBBlackIcon />}
                                <Text style={paymentMethod == PaymentMethod.CB ? styles.textSelected : styles.text}> {t('NewRequest.creditCard')} </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={paymentMethod == PaymentMethod.QR ? styles.methodSelected : styles.method}
                                onPress={() => setPaymentMethod(PaymentMethod.QR)}>
                                {paymentMethod == PaymentMethod.QR ? <QRIcon /> : <QRBlackIcon />}
                                <Text style={paymentMethod == PaymentMethod.QR ? styles.textSelected : styles.text}> {t('NewRequest.qrCode')} </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={paymentMethod == PaymentMethod.CASH ? styles.methodSelected : styles.method}
                                onPress={() => setPaymentMethod(PaymentMethod.CASH)}>
                               {paymentMethod == PaymentMethod.CASH ? <CashIcon height={24} width={24}/> : <CashBlackIcon height={24} width={24} />}
                                <Text style={paymentMethod == PaymentMethod.CASH ? styles.textSelected : styles.text}> {t('NewRequest.cash')} </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </KeyboardAwareScrollView>
                { loading && <CustomActivityIndicator /> }
            </View>
            <View style={styles.btnContainer}>
                <RoundedButton
                    isPrimary={true}
                    onButtonPress={() => {createRequestAction()}}
                    textBtn={t('NewRequest.createRequest')}
                />
            </View>
        </AppLayout>
    )
}
