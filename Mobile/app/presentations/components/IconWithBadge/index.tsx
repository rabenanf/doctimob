import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { SvgProps } from 'react-native-svg';

export interface IOTPInputProps {
    SvgIcon: React.FC<SvgProps>;
    badgeCount? : number,
    size? : number,
    color? : string
}

export const IconWithBadge = (Props: IOTPInputProps) => {

    let { SvgIcon, badgeCount = 0, size = 24, color = 'black' } = Props;

    return (
        <View style={{ width: size, height: size }}>
            <SvgIcon width={size} height={size} />
            
            {badgeCount > 0 && (
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{badgeCount}</Text>
                </View>
            )}
        </View>
    );
};
