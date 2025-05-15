import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../data/interface";
import { useTranslation } from "react-i18next";
import { JSX, useEffect, useRef } from "react";
import AppLayout from "../../../layout";
import DoctorHeader from "../../../components/DoctorHeader";
import { FlatList, Image, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import PaperclipIcon from "../../../../resources/assets/icons/Paperclip.svg";
import PlainIcon from "../../../../resources/assets/icons/Plain.svg";
import Doctor from "../../../../resources/assets/images/doctor.png";

type Props = NativeStackScreenProps<RootStackParamList, 'AppointmentChat'>;

export const AppointmentChatScreen = ({ navigation }: Props): JSX.Element => {

    const { t } = useTranslation();

    const messages = [
        {
            id: '1',
            text: "Hello Dr. Olivia",
            time: '10:30 AM',
            fromUser: true,
        },
        {
            id: '2',
            text: "Hello! Yes, everything is fine. I’m already on my way to your address. Traffic is light, I should be there around 10:55.",
            time: '10:33 AM',
            fromUser: false,
        },
        {
            id: '3',
            text: "Great, thank you! Just to confirm, the address is 25 Nguyễn Trãi, Phường 5, District 3.",
            time: '10:34 AM',
            fromUser: true,
        },
        {
            id: '4',
            text: "Yes, that’s the one I have as well. See you soon! 😊",
            time: '10:38 AM',
            fromUser: false,
        },
    ];

    const flatListRef = useRef(null);

    useEffect(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, []);

    const renderMessage = ({ item }) => (
        <View style={{ flexDirection : 'row', columnGap: 15, width : '100%', justifyContent: item.fromUser ? 'flex-end' : 'flex-start'}}>
            <View style={{ width: 40}}>
                {(! item.fromUser) ? <Image source={Doctor} style={styles.avatar} /> : <Text></Text>}
            </View>
            <View style={{ flexDirection : 'column', rowGap: 5, maxWidth : '80%' }}>
                <View style={item.fromUser ? styles.userMessage : styles.doctorMessage}>
                    <Text style={[styles.messageText, item.fromUser && {color : 'white'} ]}>{item.text}</Text>
                </View>
                <Text style={styles.time}>{item.time}</Text>
            </View>
            
        </View>
    );

    return (
        <AppLayout>
            <DoctorHeader source={Doctor} doctorName={"Alvin Kapa"} specialty={"Pediatrician"} onClose={function (): void {
                
            }} />
            <KeyboardAvoidingView style={{ flex : 1 }} 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}>

                <View style={{ height: '92%', alignItems : 'center', justifyContent : 'center' , paddingHorizontal : 30}}>
                    <Text style={styles.date}>Friday March 14, 10:30 AM</Text>
                    <FlatList
                        ref={flatListRef}
                        data={messages}
                        renderItem={renderMessage}
                        keyExtractor={(item) => item.id}
                        style={{ width: '100%' }}
                        contentContainerStyle={styles.messageList}
                        onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
                        onLayout={() => flatListRef.current?.scrollToEnd({ animated: true })}
                    />
                </View>
                <View style={styles.sendMessage}>
                    <View style={styles.paperclip}>
                        <PaperclipIcon height={24} width={24} />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={{ flex: 1, fontSize: 16 }}
                            placeholderTextColor="rgba(204, 206, 219, 1)"
                            placeholder={t('Appointment.chatPlaceholder')}
                        />
                        <TouchableOpacity onPress={() => { }}>
                            <PlainIcon height={24} width={24} />
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </AppLayout>
    )
}