import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { JSX, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RootStackParamList } from "../../../../data/interface";
import { FlatList, Modal, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import EditIcon from "../../../../resources/assets/icons/Edit.svg";
import DeleteIcon from "../../../../resources/assets/icons/Trash.svg";
import AppLayout from "../../../layout";
import { TitleHeader } from "../../../components/TitleHeader";
import { RoundedButton } from "../../../components/RoundedButton";
import { styles } from "./styles";
import UserMale from "../../../../resources/assets/icons/User_male.svg";
import UserFemale from "../../../../resources/assets/icons/User_female.svg";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RadioButtonContainer } from "../../../components/RadioButtonContainer";
import { FamilyMemberService } from "../../../../services/application/familymember.sa";
import useUserStore from "../../../../services/redux/userStore";
import { showToast } from "../../../../services/utils/toast";
import moment from "moment";
import { FamilyMember } from "../../../../data/dto/FamilyMember.type";

type Props = NativeStackScreenProps<RootStackParamList, 'FamilyMember'>;

export const  FamilyMemberScreen = ({navigation}: Props): JSX.Element => {

    const { t } = useTranslation();
    const {createMember, updateMember, deleteMember, getMembersByPatient} = FamilyMemberService();
    const { user, updateUser } = useUserStore(); 
    const [modalVisible, setModalVisible] = useState(false);
    const [members, setMembers] = useState<any[]>([]);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [address, setAddress] = useState('');
    const [birthdate, setBirthdate] = useState<Date>(new Date());
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [gender, setGender] = useState('male');
    const [update, setUpdate] = useState(false);
    const [id, setId] = useState('');
    
    const genders = [
        {
          text: "Male",
        },
        {
          text: "Female",
        }
    ];

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const form = {
            firstname: firstname,
            lastname: lastname,
            address: address,
        }
        const [errors, setErrors] = useState<Partial<typeof form>>({});
    
    
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date?: Date) => {
        setBirthdate(date!);
        hideDatePicker();
    };

    useEffect(() => {
        let myDate = moment(birthdate);
        setDay(myDate.format('DD'));
        setMonth(myDate.format('MM'));
        setYear(myDate.format('YYYY'));
    }, [birthdate]);

    const fetchMembers = async () => {
        const response = await getMembersByPatient(user?.user_id!);
        if (response.success) {
            setMembers(response.members!);
        }
        else {
            showToast('error', t('Global.error'), response.message);
        }
            
    };

    useEffect(() => {
        fetchMembers();
    }, []);

    const onRadioButtonPress = (itemIdx: number) => {
        if (itemIdx > 0)
            setGender('female');
        else
            setGender('male');
    };

    const validate = () => {
        const newErrors: Partial<typeof form> = {};
        if (!firstname.trim()) newErrors.firstname = t('FamilyMember.errorFirstname');
        if (!lastname.trim()) newErrors.lastname = t('FamilyMember.errorLastname');
        if (!address.trim()) newErrors.address = t('FamilyMember.errorAddress');
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const createFamilyMember = async () => {
        if (validate()) {
            let data : Partial<FamilyMember> = {
                patient_id : user?.user_id,
                first_name : firstname,
                last_name : lastname,
                address : address,
                gender : gender,
                birth_date : birthdate.toUTCString()
            }
            let response = await createMember(data);
            if (response.success) {
                fetchMembers();
                setModalVisible(false);
            }
            else {
                showToast('error', t('Global.error'), t('FamilyMember.createError'));
            }
        }
    }

    const callUpdate = (item : FamilyMember) => {
        setUpdate(true);
        setId(item.id!);
        setFirstname(item.first_name!);
        setLastname(item.last_name!);
        setAddress(item.address!);
        setGender(item.gender!);
        setBirthdate(new Date(item.birth_date!));
        setModalVisible(true);
    }

    const callDelete = async (item : FamilyMember) => {
        let response = await deleteMember(item.id!);
        if (response.success) {
            fetchMembers();
        }
        else {
            showToast('error', t('Global.error'), t('FamilyMember.deleteError'));
        }
    }

    const updateFamilyMember = async () => {
        if (validate()) {
            let data : Partial<FamilyMember> = {
                patient_id : user?.user_id,
                first_name : firstname,
                last_name : lastname,
                address : address,
                gender : gender,
                birth_date : birthdate.toUTCString()
            }
            let response = await updateMember(data, id);
            if (response.success) {
                setUpdate(false);
                setId('');
                fetchMembers();
                setModalVisible(false);
            }
            else {
                showToast('error', t('Global.error'), t('FamilyMember.createError'));
            }
        }
    }

    useEffect(() => {
        if (errors['address']) setErrors({ ...errors, ['address']: undefined });
    },[address]);
    
    useEffect(() => {
        if (errors['firstname']) setErrors({ ...errors, ['firstname']: undefined });
    },[firstname]);

    useEffect(() => {
        if (errors['lastname']) setErrors({ ...errors, ['lastname']: undefined });
    },[lastname]);

    const renderItem = ({ item }) => {
        return (
            <View key={item.id} style={styles.containerItem}>
                <View style={styles.containerMember}>
                    { item.gender == 'male' ? <UserMale /> : <UserFemale /> }
                    <View style={styles.containerName}>
                       <Text style={styles.name}> {item.first_name + ' ' + item.last_name} </Text>
                       <Text style={styles.birthday}> { t('FamilyMember.birthday') } {' : '} {item.birth_date} </Text>
                    </View>
                </View>
                <View style={styles.action}>
                    <TouchableOpacity style={styles.edit} onPress={() => callUpdate(item)}><EditIcon width={20} height={20} /></TouchableOpacity>
                    <TouchableOpacity style={styles.remove} onPress={() => callDelete(item)}><DeleteIcon width={20} height={20} /></TouchableOpacity>
                </View>
            </View>
            )
    } 

    const addMemberModal = () => {
        return (
            <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                <View style={styles.modalBackground}>
                    <TouchableWithoutFeedback>
                        <View style={styles.addContainer}>
                            <View style={styles.rectangle}></View>
                            <KeyboardAwareScrollView 
                                enableOnAndroid={true}
                                keyboardShouldPersistTaps="handled"
                            >
                                <View style={styles.addTitleContainer}>
                                    <Text style={styles.addTitle}> {t('FamilyMember.addTitle')} </Text>
                                    <Text style={styles.addDescription}> {t('FamilyMember.addDescription')} </Text>
                                </View>
                                <View style={styles.form}>
                                    <Text> {t('FamilyMember.gender')} </Text>
                                    <RadioButtonContainer values={genders} size={15} onPress={onRadioButtonPress} />
                                    <Text> {t('FamilyMember.firstname')} </Text>
                                    <TextInput style={styles.input} 
                                        value={firstname}
                                        onChangeText={setFirstname}
                                     />
                                    { errors.firstname && <Text style={styles.errorText}>{errors.firstname}</Text> } 
                                    <Text> {t('FamilyMember.lastname')} </Text>
                                    <TextInput style={styles.input}  
                                        value={lastname}
                                        onChangeText={setLastname}
                                    />
                                    { errors.lastname && <Text style={styles.errorText}>{errors.lastname}</Text> }
                                    <Text> {t('FamilyMember.address')} </Text>
                                    <TextInput style={styles.input} 
                                        value={address}
                                        onChangeText={setAddress}
                                    />
                                    { errors.address && <Text style={styles.errorText}>{errors.address}</Text> }
                                    <Text> {t('FamilyMember.birthday')} </Text>
                                    <TouchableOpacity  style={styles.addBirthday} onPress={() => showDatePicker()}>
                                        <TextInput style={styles.input}  
                                            editable={false}
                                            value={year}
                                        />
                                        <TextInput style={styles.input}  
                                            editable={false}
                                            value={month}
                                        />
                                        <TextInput style={styles.input}
                                            editable={false}
                                            value={day}  
                                        />
                                    </TouchableOpacity>
                                    <View>
                                        <View>
                                            {<DateTimePickerModal
                                                isVisible={isDatePickerVisible}
                                                date={birthdate}
                                                mode={"date"}
                                                onConfirm={handleConfirm}
                                                onCancel={hideDatePicker}
                                            />}
                                        </View>
                                    </View>
                                </View>
                            </KeyboardAwareScrollView>
                            <View style={styles.action}>
                                <RoundedButton
                                    isPrimary={true}
                                    onButtonPress={() => {
                                        if (update) 
                                            updateFamilyMember();
                                        else
                                            createFamilyMember();
                                    }}
                                    textBtn={ t('FamilyMember.saveMember') }
                                />
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
    
        )
    }

    return (
        <AppLayout>
            <TitleHeader title={t('FamilyMember.title')} back={() => {navigation.goBack()}} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}> {t('FamilyMember.title')} </Text>
                <Text style={styles.description}> {t('FamilyMember.description')} </Text>
            </View>
            <View style={styles.detailContainer}>
                <FlatList 
                    data={members} 
                    renderItem={renderItem}
                    contentContainerStyle={{rowGap: 20}}
                />
            </View>
            <View style={styles.btnContainer}>
                <RoundedButton 
                    isPrimary={true}
                    onButtonPress={ () => { setModalVisible(true) }} 
                    textBtn={t('FamilyMember.add')}
                />
            </View>

            <Modal  
                animationType="slide"
                transparent={true}
                visible={modalVisible}>
                { addMemberModal() }
            </Modal>
        </AppLayout>
    )
}