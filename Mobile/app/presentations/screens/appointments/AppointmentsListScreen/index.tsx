import React, { JSX } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../data/interface';
import AppLayout from '../../../layout';

type Props = NativeStackScreenProps<RootStackParamList, 'AppointmentsList'>;

export const  AppointmentsListScreen = ({navigation}: Props): JSX.Element => {
    return (
        <AppLayout>
            <View><Text>Appointments List</Text></View>

        </AppLayout>
    )
}
