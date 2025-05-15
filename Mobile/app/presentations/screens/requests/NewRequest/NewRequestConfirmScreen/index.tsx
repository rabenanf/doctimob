import React, { JSX } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../data/interface';
import AppLayout from '../../../../layout';
import { TitleHeader } from '../../../../components/TitleHeader';
import { useTranslation } from 'react-i18next';
import CongratsIcon from '../../../../../resources/assets/images/congrats.svg'
import { RoundedButton } from '../../../../components/RoundedButton';

type Props = NativeStackScreenProps<RootStackParamList, 'NewRequestConfirm'>;

export const  NewRequestConfirmScreen = ({navigation}: Props): JSX.Element => {

    const { t } = useTranslation();

    return (
        <AppLayout>
            <TitleHeader title={t('NewRequest.submittedHeader')} />
            <View style={styles.container}>
                <CongratsIcon width={150} height={150} />
                <Text style={styles.title}> {t('NewRequest.submittedTitle')} </Text>
                <Text style={styles.description}> {t('NewRequest.submittedDescription')} </Text>
                <RoundedButton 
                    isPrimary={true}
                    onButtonPress={ () => {navigation.navigate('TabHome', {screen: 'MyRequestsList'})}} 
                    textBtn={t('NewRequest.myRequests')}
                />
            </View>   
        </AppLayout>
    )
}
