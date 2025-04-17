import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../data/interface";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { JSX } from "react";
import AppLayout from "../../../../layout";
import { TitleHeader } from "../../../../components/TitleHeader";
import { styles } from './styles';
import { RoundedButton } from "../../../../components/RoundedButton";


type Props = NativeStackScreenProps<RootStackParamList, 'PaymentCreditCard'>;

export const  PaymentCreditCardScreen = ({navigation}: Props): JSX.Element => {
    const { t } = useTranslation();

    return (
        <AppLayout>
            <TitleHeader title={t('Payment.title')} />
            <View style={styles.paymemtContainer}>
                <View></View>
                <View></View>
                <View style={styles.paymentFooter}>
                    <RoundedButton 
                        isPrimary={false}
                        onButtonPress={ () => {}} 
                        textBtn={t('Payment.anotherCard')}
                    />
                    <RoundedButton 
                        isPrimary={true}
                        onButtonPress={ () => {}} 
                        textBtn={t('Payment.payNow')}
                    />
                </View>
            </View>
        </AppLayout> 
    )
}