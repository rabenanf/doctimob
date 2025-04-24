import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { JSX } from "react";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";
import AppLayout from "../../../../layout";
import { TitleHeader } from "../../../../components/TitleHeader";
import { RootStackParamList } from "../../../../../data/interface";
import { styles } from './styles';
import QRIcon from "../../../../../resources/assets/icons/qr.svg";
import { RoundedButton } from "../../../../components/RoundedButton";

type Props = NativeStackScreenProps<RootStackParamList, 'PaymentQRCode'>;

export const  PaymentQRCodeScreen = ({navigation}: Props): JSX.Element => {
    const { t } = useTranslation();

    return (
        <AppLayout>
            <TitleHeader title={t('Payment.titleHeader')} />
            <View style={styles.paymentContainer}>
                <View style={styles.paymentTitle}>
                    <View style={styles.imageContainer}>
                        <QRIcon height={100} width={100} />
                    </View>
                    <View style={{alignItems : 'center', gap : 15}}>
                        <Text style={styles.price}> {'1,300,000'} {' VND'} </Text>
                        <Text style={styles.priceText}> {t('Payment.totalCost')} </Text>
                        <View style={{flexDirection : 'row'}}>
                            <Text style={styles.selectedMehodText}> {t('Payment.selectedMethod')} </Text>
                            <Text style={styles.cashText}> {t('Payment.qrCode')} </Text>
                        </View>    
                        
                    </View>
                    <View style={{alignItems : 'center'}}>
                        <Text style={styles.description}> {t('Payment.qrCodeDescription')} </Text>
                    </View> 
                    
                </View>
                <View style={styles.paymentFooter}>
                    <RoundedButton 
                        isPrimary={true}
                        onButtonPress={ () => {}} 
                        textBtn={t('Payment.scanQRCode')}
                    />
                </View>
            </View>
        </AppLayout> 
    )
}   