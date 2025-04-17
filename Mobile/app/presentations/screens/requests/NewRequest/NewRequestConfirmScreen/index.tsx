import React, { JSX } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../data/interface';
import AppLayout from '../../../../layout';

type Props = NativeStackScreenProps<RootStackParamList, 'NewRequestConfirm'>;

export const  NewRequestConfirmScreen = ({navigation}: Props): JSX.Element => {
    return (
        <AppLayout>
            <View><Text>New request</Text></View>

        </AppLayout>
    )
}
