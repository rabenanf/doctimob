import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { JSX, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Alert, StyleSheet, Text, View } from "react-native";

import AppLayout from "../../../../layout";
import { TitleHeader } from "../../../../components/TitleHeader";
import { RootStackParamList } from "../../../../../data/interface";
import { Camera, Code, getCameraDevice, useCameraDevice, useCameraPermission, useCodeScanner } from "react-native-vision-camera";
import { styles } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'QRCode'>;

export const QRCodeScreen = ({ navigation }: Props): JSX.Element => {

    const { t } = useTranslation();
    
    const { hasPermission, requestPermission } = useCameraPermission();
    const devices = Camera.getAvailableCameraDevices();
    const device = getCameraDevice(devices, 'back');
    const [latestScannedData, setLatestScannedData] = useState<string | undefined>(undefined);

    useEffect(() => {
        requestPermission();
    }, []);

    const codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13'],
        onCodeScanned: (codes: Code[]) => {
            // Update the state with the latest scanned data
            setLatestScannedData(codes[0].value);
            console.log(codes[0].value);
        },
    });

    return (
        <AppLayout>
            <TitleHeader title={t('Payment.titleHeader')} />
                <View style={styles.paymentContainer}>
                    { (device == null) ? 
                        (<View>
                            <Text style={styles.title}>Device Not Found</Text>
                        </View>)    
                        :
                        (<Camera
                            style={StyleSheet.absoluteFill}
                            codeScanner={codeScanner}
                            device={device}
                            isActive={true}
                          />)
                    }
                    <View>
                        <Text style={styles.description}> {t('Payment.scanDescription')} </Text>
                    </View>

                </View>
        </AppLayout>
    );
}