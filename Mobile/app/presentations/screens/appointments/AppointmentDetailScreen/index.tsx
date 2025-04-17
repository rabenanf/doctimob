import React, { JSX } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import  parentStyles from '../../../layout/styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../data/interface';
import AppLayout from '../../../layout';

type Props = NativeStackScreenProps<RootStackParamList, 'AppointmentDetail'>;

export const  AppointmentDetailScreen = ({navigation}: Props): JSX.Element => {
    return (
        <AppLayout>
            <View style={parentStyles.ParentContainer}>
                
                <Text>Appointment Detail</Text>
            </View>
        </AppLayout>
    )
}