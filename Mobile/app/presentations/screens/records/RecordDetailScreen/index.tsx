import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { JSX } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useTranslation } from "react-i18next";
import AppLayout from "../../../layout";
import { TitleHeader } from "../../../components/TitleHeader";
import { RootStackParamList } from "../../../../data/interface";
import { MedicalRecordCard } from "../../../components/MedicalRecordCard";
import Photo from '../../../../resources/assets/images/doctor.png';
import Preview1 from '../../../../resources/assets/images/preview1.png';
import Preview2 from '../../../../resources/assets/images/preview2.png';
import StarIcon from '../../../../resources/assets/icons/Plain_star.svg';
import ChatIcon from '../../../../resources/assets/icons/Chat_square.svg';
import { styles } from "./styles";
import { RoundedButton } from "../../../components/RoundedButton";

type Props = NativeStackScreenProps<RootStackParamList, 'MedicalRecordDetail'>;

export const  MedicalRecordDetailScreen = ({navigation}: Props): JSX.Element => {

    const { t } = useTranslation();
    
    return (
        <AppLayout>
            <TitleHeader title={t('RecordDetail.headerTitle')} back={() => {navigation.goBack()}} />
            <View style={{flex: 1, paddingHorizontal: 30, paddingTop: 20, rowGap: 20}}>
                <MedicalRecordCard
                    doctorImage={ Photo }
                    doctorName="Dr. Olivia Smith"
                    specialty="Cardiologist"
                    date="March 17, 2025"
                    time="09 : 30"
                    meridiem="AM"
                    summary="Normal hemoglobin, slight vitamin D deficiency"
                    onPress={() => {navigation.navigate('MedicalRecordDetail')}}
                />

                <View style={styles.preview}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <Image source={Preview1} style={styles.image}/>
                        <Image source={Preview2} style={styles.image}/> 
                    </ScrollView>
                </View>
                <RoundedButton
                    isPrimary={true}
                    onButtonPress={() => {}}
                    textBtn={t('RecordDetail.download')}
                />
                <View style={styles.feedbackContainer}>
                    <View style={styles.star}>
                        <StarIcon height={10} width={10} />
                        <StarIcon height={10} width={10} />
                        <StarIcon height={10} width={10} />
                        <StarIcon height={10} width={10} />
                        <StarIcon height={10} width={10} />
                    </View>
                    <Text style={styles.rate}> {t('RecordDetail.rateYour')} </Text>
                    <Text style={styles.name}> {'Dr. Sophia Davis'} </Text>
                    <TouchableOpacity style={styles.feedbackButton}>
                        <Text style={styles.feedbackText}>{t('RecordDetail.giveFeedback')} </Text>
                        <ChatIcon height={15} width={15} />
                    </TouchableOpacity>
                </View>
            </View>
        </AppLayout>
    )
}