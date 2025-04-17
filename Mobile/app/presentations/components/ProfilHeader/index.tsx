import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, Image } from 'react-native';
import nobody from '../../../resources/assets/images/nobody.svg';
import NotifBell from '../../../resources/assets/icons/Bell.svg';
import { styles } from './styles';
import { IconWithBadge } from '../IconWithBadge';

export const ProfilHeader = (Props: any) => {
    const { t } = useTranslation();
    const { photo, name } = Props;
    return (
        <View style={styles.profilContainer}>
            <Image
                style={styles.image}
                source={photo ? photo : nobody}
                resizeMode={"cover"}
                />
            <View style={styles.textContainer}>
                <Text style={styles.welcomeback}>
                    {t('Header.welcome')}
                </Text>
                <Text style={styles.name}>
                    {name}
                </Text>
            </View>    
            
            <View style={styles.notification}>
                
                <IconWithBadge 
                    SvgIcon = {NotifBell}
                    badgeCount={3} 
                    size={28} 
                    color="#fff"
                />
                

            </View>
        </View>  )
}