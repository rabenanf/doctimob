import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { JSX, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import AppLayout from "../../../layout";
import { TitleHeader } from "../../../components/TitleHeader";
import { useTranslation } from "react-i18next";
import { RootStackParamList } from "../../../../data/interface";
import { styles } from "./styles";
import FileDownloadIcon from "../../../../resources/assets/icons/File_download.svg";
import { MedicalRecordCard } from "../../../components/MedicalRecordCard";
import Photo from '../../../../resources/assets/images/doctor.png';

type Props = NativeStackScreenProps<RootStackParamList, 'MedicalRecordList'>;

export const  MedicalRecordListScreen = ({navigation}: Props): JSX.Element => {

    const { t } = useTranslation();
    const [selected, setSelected] = useState('All');
    const members=[ 'Therese', 'Olivia', 'John', 'Diana'];

    const handlePress = (name : string) => {
        setSelected(name);
    }

    return (
        <AppLayout>
            <TitleHeader title={t('RecordList.headerTitle')} back={() => {navigation.goBack()}} />
            <View style={{flex: 1}}>
                <View style={styles.titleContainer}>
                    <View style={styles.title}>
                        <Text style={styles.titleTop}> {t('RecordList.medical')} </Text>
                        <Text style={styles.titleBottom}> {t('RecordList.records')} </Text>
                    </View>
                    <TouchableOpacity style={styles.download}>
                        <View style={styles.downloadView}>
                            <Text style={styles.downloadText}> {t('RecordList.download')}</Text>
                            <Text style={styles.downloadText}> {t('RecordList.reports')}</Text>
                        </View>
                        <View style={styles.downloadIcon}>
                            <FileDownloadIcon />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.filterContainer}>
                    <Text style={styles.label}> {t('RecordList.familyMember')} </Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} 
                        style={styles.scrollView}
                    >
                        {['All', ...members].map((name) => {
                         const isActive = selected === name;
                        return (
                            <TouchableOpacity
                                key={name}
                                onPress={() => handlePress(name)}
                                style={[styles.pill, isActive && styles.pillActive]}
                            >
                                <Text style={[styles.pillText, isActive && styles.pillTextActive]}>
                                    {name}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                    </ScrollView>
                </View>
                <ScrollView contentContainerStyle={styles.listContainer}>
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
                </ScrollView>

            </View>
        </AppLayout>
    )

}