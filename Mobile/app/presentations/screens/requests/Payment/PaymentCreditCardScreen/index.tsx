import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../data/interface";
import { useTranslation } from "react-i18next";
import { Modal, Text, View } from "react-native";
import { JSX, useState } from "react";
import AppLayout from "../../../../layout";
import { TitleHeader } from "../../../../components/TitleHeader";
import { styles } from './styles';
import { RoundedButton } from "../../../../components/RoundedButton";
import { CardRadioButtonContainer } from "../../../../components/CardRadioButtonContainer";
import MasterCard from "../../../../../resources/assets/icons/master_card.svg";
import CardIcon from "../../../../../resources/assets/icons/card.svg";
import { AddCardModal } from "../../../../components/AddCardModal";


type Props = NativeStackScreenProps<RootStackParamList, 'PaymentCreditCard'>;

export const  PaymentCreditCardScreen = ({navigation}: Props): JSX.Element => {
    const { t } = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);

    const creditCards = [
        {
          number: "1234 5678 9012 3456",
          icon : MasterCard
        },
        {
            number: "1234 5678 9012 9458",
            icon : MasterCard
        }
    ];

    return (
        <AppLayout>
            <TitleHeader title={t('Payment.titleHeader')} />
            <View style={styles.paymentContainer}>
                <View style={styles.paymentTitle}>
                    <CardIcon height={200} width={200} />
                    <View style={{alignItems : 'center'}}>
                        <Text style={styles.price}> {'1,300,000'} {' VND'} </Text>
                        <Text style={styles.priceText}> {t('Payment.totalCost')} </Text>
                    </View>
                    <View style={{alignItems : 'center'}}>
                        <Text style={styles.title}> {t('Payment.title')} </Text>
                        <Text style={styles.description}> {t('Payment.description')} </Text>
                    </View>    
                </View>
                <View style={styles.card}>
                    <CardRadioButtonContainer values={creditCards} onPress={(index: number) => {
                        
                    } } />
                </View>
                <View style={styles.paymentFooter}>
                    <RoundedButton 
                        isPrimary={false}
                        onButtonPress={ () => {setModalVisible(true);}} 
                        textBtn={t('Payment.anotherCard')}
                    />
                    <RoundedButton 
                        isPrimary={true}
                        onButtonPress={ () => {navigation.navigate('AppointmentConfirmed');}} 
                        textBtn={t('Payment.payNow')}
                    />
                </View>
            </View>

            <Modal  
                animationType="slide"
                transparent={true}
                visible={modalVisible}>
                <AddCardModal 
                    closeModal={() => {setModalVisible(false)}} 
                    pay={() => {
                        setModalVisible(false);
                        navigation.navigate('AppointmentConfirmed');
                    }} 
                />
            </Modal>
        </AppLayout> 
    )
}