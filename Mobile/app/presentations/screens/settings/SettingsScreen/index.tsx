import React, { JSX } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../data/interface';
import AppLayout from '../../../layout';

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

export const  SettingsScreen = ({navigation}: Props): JSX.Element => {
    return (
        <AppLayout>
            <View><Text>DashBoard</Text></View>

        </AppLayout>
    )
}
