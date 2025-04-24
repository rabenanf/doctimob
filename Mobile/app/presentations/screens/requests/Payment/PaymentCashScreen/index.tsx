import { Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { JSX } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RoundedButton } from "../../../../components/RoundedButton";
import { TitleHeader } from "../../../../components/TitleHeader";
import AppLayout from "../../../../layout";
import { RootStackParamList } from "../../../../../data/interface";
import { styles } from './styles';
import CashIcon from "../../../../../resources/assets/icons/cash.svg";

type Props = NativeStackScreenProps<RootStackParamList, 'PaymentCash'>;

export const  PaymentCashScreen = ({navigation}: Props): JSX.Element => {
    const { t } = useTranslation();

    return (
        <AppLayout>
            <TitleHeader title={t('Payment.titleHeader')} />
            <View style={styles.paymentContainer}>
                <View style={styles.paymentTitle}>
                    <View style={styles.imageContainer}>
                        <CashIcon height={80} width={80} />
                    </View>
                    <View style={{alignItems : 'center', gap : 15}}>
                        <Text style={styles.price}> {'1,300,000'} {' VND'} </Text>
                        <Text style={styles.priceText}> {t('Payment.totalCost')} </Text>
                        <View style={{flexDirection : 'row'}}>
                            <Text style={styles.selectedMehodText}> {t('Payment.selectedMethod')} </Text>
                            <Text style={styles.cashText}> {t('Payment.cash')} </Text>
                        </View>    
                        
                    </View>
                    <View style={{alignItems : 'center'}}>
                        <Text style={styles.description}> {t('Payment.cashDescription')} </Text>
                    </View> 
                </View>
                <View style={styles.paymentFooter}>
                    <RoundedButton 
                        isPrimary={true}
                        onButtonPress={ () => {}} 
                        textBtn={t('Payment.confirmAppointment')}
                    />
                </View>

            </View>
        </AppLayout>
    )
}
