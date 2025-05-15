import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../data/interface";
import { useTranslation } from "react-i18next";
import AppLayout from "../../../layout";
import LinearGradient from "react-native-linear-gradient";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Logo from '../../../../resources/assets/images/logo.png';
import { styles } from './styles';
import { Theme } from "../../../../resources/themes";
import { JSX, useState } from "react";
import { RoundedButton } from "../../../components/RoundedButton";
import useUserStore from "../../../../services/redux/userStore";

type Props = NativeStackScreenProps<RootStackParamList, 'ChooseAccountType'>;

export const ChooseAccountTypeScreen = ({navigation}: Props): JSX.Element => {

    const { t } = useTranslation();

    const { user, setRole } = useUserStore(); 

    const [isDoctor, setIsDoctor] = useState(false);

    const selectType = (type : string) => {
        setRole(type);
        setIsDoctor(type == 'doctor');
    }

    return (
        <AppLayout>
            <LinearGradient 
                style={styles.container} 
                colors={[Theme.BACKGROUND_COLOR, 'white']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                locations={[0, 0.40]}
                >
                <ScrollView contentContainerStyle={styles.container}>
                {/*<View style={styles.container}>*/}
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} resizeMode="contain" source={Logo}/> 
                    </View>
                    <View style={styles.textContainer} >
                        <Text style={styles.welcomeText}> {t('ChooseAccountType.title')} </Text>
                        <Text style={styles.descriptionText}> {t('ChooseAccountType.description')} </Text>
                    </View>
                    <View style={styles.typeContainer} >
                        <TouchableOpacity style={!isDoctor ? styles.typeSelected : styles.type} onPress={() => selectType('patient')}>
                            <Text style={styles.item}> {t('ChooseAccountType.patient')} </Text>
                            <Text style={styles.itemDesc}> {t('ChooseAccountType.patientDesc')} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={isDoctor ? styles.typeSelected : styles.type} onPress={() => selectType('doctor')}>
                            <Text style={styles.item}> {t('ChooseAccountType.doctor')} </Text>
                            <Text style={styles.itemDesc}> {t('ChooseAccountType.doctorDesc')} </Text>   
                        </TouchableOpacity>
                    </View>
                    {/*</View>*/}    
                </ScrollView>
                <View style={styles.btnContainer}>
                    <RoundedButton 
                        isPrimary={true}
                        onButtonPress={ () => { navigation.navigate('VerifyNumber')}} 
                        textBtn={t('ChooseAccountType.continue')}
                    />
                </View>
            </LinearGradient>
        </AppLayout>
    )
}