import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, Modal, Text, View } from "react-native";
import { JSX, useState } from "react";
import { RootStackParamList } from "../../../../data/interface";
import { useTranslation } from "react-i18next";
import AppLayout from "../../../layout";
import { TitleHeader } from "../../../components/TitleHeader";
import { styles } from "./styles";
import MasterCard from "../../../../resources/assets/icons/master_card.svg";
import CardIcon from "../../../../resources/assets/icons/card.svg";
import Stars from "../../../../resources/assets/icons/etoiles.svg";
import EditIcon from "../../../../resources/assets/icons/Edit.svg";
import DeleteIcon from "../../../../resources/assets/icons/Trash.svg";
import { RoundedButton } from "../../../components/RoundedButton";
import { AddCardModal } from "../../../components/AddCardModal";

type Props = NativeStackScreenProps<RootStackParamList, 'PaymentMethod'>;

export const  PaymentMethodScreen = ({navigation}: Props): JSX.Element => {

    const { t } = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);

    const creditCards = [
        {
          number: "1234 5678 9012 3456",
          icon : MasterCard
        },
        {
            number: "1234 5678 9012 9458",
            icon : CardIcon
        }
    ];

    const renderItem = ({ item }) => {
        const lastNumbers = item.number.slice(-4);
        return (
            <View style={styles.containerItem}>
                <View style={styles.containerNumber}>
                    { <item.icon width={24} height={24} /> }
                    <View style={styles.containerNumber}>
                        <Stars />
                        <Text style={styles.numberText}>{lastNumbers}</Text>
                    </View>
                </View>
                <View style={styles.action}>
                    <View style={styles.edit}> <EditIcon width={20} height={20} /> </View>
                    <View style={styles.remove}> <DeleteIcon width={20} height={20} /> </View>
                </View>
            </View>
        )
    }

    return (
        <AppLayout>
            <TitleHeader title={t('PaymentMethod.title')} back={() => {navigation.goBack()}} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}> {t('PaymentMethod.title')} </Text>
                <Text style={styles.description}> {t('PaymentMethod.description')} </Text>
            </View>
            <View style={styles.detailContainer}>
                <FlatList 
                    data={creditCards} 
                    renderItem={renderItem}
                    contentContainerStyle={{rowGap: 20}}
                />
            </View>
            <View style={styles.btnContainer}>
                <RoundedButton 
                    isPrimary={true}
                    onButtonPress={ () => { setModalVisible(true) }} 
                    textBtn={t('PaymentMethod.addCard')}
                />
            </View>

             <Modal  
                animationType="slide"
                transparent={true}
                visible={modalVisible}>
                <AddCardModal 
                    closeModal={() => {setModalVisible(false)}} 
                    pay={() => {
                        setModalVisible(false);
                    }}
                    buttonText={t('PaymentMethod.saveCard')} 
                />
            </Modal>
        </AppLayout>
    )
}
