import React from 'react';
import { View, Text} from 'react-native';
import BackArrow from '../../../resources/assets/icons/back.svg';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';

export const TitleHeader = (Props: any) => {
    const { title } = Props;

    return (
        <View style={styles.titleContainer}>
            <View style={styles.arrowContainer}>
                <BackArrow style={styles.vectorStroke} />
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
            <View style={styles.notification}>
                
            </View>
        </View>  )
}

