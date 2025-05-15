import { useTranslation } from "react-i18next";
import { Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { styles } from './styles';
import { RoundedButton } from "../RoundedButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export interface AddCardProps {
    closeModal: () => void;
    pay: () => void;
    buttonText? : string;
}

export const AddCardModal = (Props: AddCardProps) => {

    const { pay, closeModal, buttonText } = Props;

    const { t } = useTranslation();

    return (
        <TouchableWithoutFeedback onPress={closeModal}>
            <View style={styles.modalBackground}>
                <TouchableWithoutFeedback>
                    <View style={styles.addContainer}>
                        <View style={styles.rectangle}></View>
                        <View style={styles.keyboardContainer}>
                            <KeyboardAwareScrollView >
                                <View style={styles.titleContainer}>
                                    <Text style={styles.title}> {t('Payment.addCard')} </Text>
                                    <Text style={styles.description}> {t('Payment.addCardDescription')} </Text>
                                </View>
                                <View style={styles.form}>
                                    <Text> {t('Payment.cardNumber')} </Text>
                                    <TextInput style={styles.input} placeholder="XXXX XXXX XXXX XXXX" />
                                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                                        <View style={{ gap: 10, width: '45%' }}>
                                            <Text> {t('Payment.expirationDate')} </Text>
                                            <TextInput style={styles.input} placeholder="MM/YY" />
                                        </View>
                                        <View style={{ gap: 10, width: '45%' }}>
                                            <Text> {t('Payment.cvv')} </Text>
                                            <TextInput style={styles.input} placeholder="123" />
                                        </View>
                                    </View>
                                    <Text> {t('Payment.holderName')} </Text>
                                    <TextInput style={styles.input} placeholder={t('Payment.holderName')} />
                                </View>
                            </KeyboardAwareScrollView>
                        </View>
                        <View style={styles.action}>
                            <RoundedButton
                                isPrimary={true}
                                onButtonPress={() => pay()}
                                textBtn={ buttonText ? buttonText : t('Payment.payNow')}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </TouchableWithoutFeedback>

    )
}