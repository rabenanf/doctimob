import React, { JSX } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../data/interface';
import AppLayout from '../../../layout';
import { ProfilHeader } from '../../../components/ProfilHeader';
import Photo from '../../../../resources/assets/images/photo.png';
import Frame from '../../../../resources/assets/images/Frame.svg';
import Hand_Drawn_Arrow from '../../../../resources/assets/images/Hand_Drawn_Arrows.svg';
import { useTranslation } from 'react-i18next';
import useUserStore from '../../../../services/redux/userStore';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const  BlankScreen = ({navigation}: Props): JSX.Element => {

    const { t } = useTranslation();
    const { user } = useUserStore();

    return (
        <AppLayout> 
            <ProfilHeader photo={Photo} name={user?.first_name + ' ' + user?.last_name} />
            <View style={styles.homevideContainer}>
                <View style={styles.imageFrame}>
                    <Frame height="100%" />
                </View>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcome}> {t('BlankHome.title')} </Text>
                    <Text style={styles.name}> {user?.first_name + ' ' + user?.last_name} </Text>
                    <Text style={styles.description}> {t('BlankHome.description')} </Text>
                </View>
                <View style={styles.createaNewRequest}>
                    <Text style={styles.create}> {t('BlankHome.create')} </Text>
                    <Text style={styles.request}> {t('BlankHome.request')} </Text>
                </View>
                <View style={styles.imageArrow}>
                    <Hand_Drawn_Arrow height="100%" />
                </View>
            </View>    
        </AppLayout>
        
    )
}