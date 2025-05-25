import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { JSX, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RootStackParamList } from "../../../../data/interface";
import { FlatList, Modal, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
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

type Props = NativeStackScreenProps<RootStackParamList, 'FamilyMember'>;

export const  FamilyMemberScreen = ({navigation}: Props): JSX.Element => {

    const { t } = useTranslation();
    const {createMember, updateMember, deleteMember, getMembersByPatient} = FamilyMemberService();
    const { user, updateUser } = useUserStore(); 
    const [modalVisible, setModalVisible] = useState(false);
    const [members, setMembers] = useState([
        {
            id: 1,
            name: 'John Doe',
            dateOfBirth: '01/01/1990',
            gender: 'male'
        },
        {
            id: 2,
            name: 'John Cathy',
            dateOfBirth: '01/01/1994',
            gender: 'female'
        },
        {
            id: 3,
            name: 'James Doe',
            dateOfBirth: '01/01/1993',
            gender: 'male'
        }
    ]);

    const gender = [
        {
          text: "Male",
        },
        {
          text: "Female",
        }
    ];

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await getMembersByPatient(user?.id!);
                if (response.success) {
                    setMembers(response.members!);
                }
            } catch (error) {
                console.error("Erreur lors du chargement des membres :", error);
            }
        };

        fetchMembers();
    }, []);

    const onRadioButtonPress = (itemIdx: number) => {
        console.log("Clicked", itemIdx);
    };

    const renderItem = ({ item }) => {
        return (
            <View key={item.id} style={styles.containerItem}>
                <View style={styles.containerMember}>
                    { item.gender == 'male' ? <UserMale /> : <UserFemale /> }
                    <View style={styles.containerName}>
                       <Text style={styles.name}> {item.name} </Text>
                       <Text style={styles.birthday}> { t('FamilyMember.birthday') } {' : '} {item.dateOfBirth} </Text>
                    </View>
                </View>
                <View style={styles.action}>
                    <View style={styles.edit}><EditIcon width={20} height={20} /></View>
                    <View style={styles.remove}><DeleteIcon width={20} height={20} /></View>
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
                                    <RadioButtonContainer values={gender} size={15} onPress={onRadioButtonPress} />
                                    <Text> {t('FamilyMember.firstname')} </Text>
                                    <TextInput style={styles.input}  />
                                    <Text> {t('FamilyMember.lastname')} </Text>
                                    <TextInput style={styles.input}  />
                                    <Text> {t('FamilyMember.address')} </Text>
                                    <TextInput style={styles.input}  />
                                    <Text> {t('FamilyMember.birthday')} </Text>
                                    <View style={styles.addBirthday}>
                                        <TextInput style={styles.input}  />
                                        <TextInput style={styles.input}  />
                                        <TextInput style={styles.input}  />
                                    </View>
                                    
                                </View>
                            </KeyboardAwareScrollView>
                            <View style={styles.action}>
                                <RoundedButton
                                    isPrimary={true}
                                    onButtonPress={() => {setModalVisible(false)}}
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