import React from 'react';
import {
    TextInput,
    View,
    TextInputProps,
    TouchableOpacity,
    Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';

type IconLibrary = 'Ionicons' | 'Feather' | 'FontAwesome' | 'MaterialIcons';

type Props = TextInputProps & {
    iconName: string;
    iconLibrary?: IconLibrary;
    iconPosition?: 'left' | 'right';
    error?: string;
    onIconPress?: () => void;
};

export const InputWithIcon: React.FC<Props> = ({
    iconName,
    iconLibrary = 'Ionicons',
    iconPosition = 'left',
    onIconPress,
    error,
    style,
    ...rest
}) => {
    const getIcon = () => {
        const size = 20;
        const color = '#888';
        const IconComp =
            iconLibrary === 'Feather'
                ? Feather
                : iconLibrary === 'FontAwesome'
                    ? FontAwesome
                    : iconLibrary === 'MaterialIcons'
                        ? MaterialIcons
                        : Ionicons;

        const iconElement = <IconComp name={iconName as any} size={size} color={color} />;

        return onIconPress ? (
            <TouchableOpacity onPress={onIconPress} style={styles.icon}>
                {iconElement}
            </TouchableOpacity>
        ) : (
            <View style={styles.icon}>{iconElement}</View>
        );
    };

    return (
        <View>
            <View style={styles.container}>
                {iconPosition === 'left' && getIcon()}
                <TextInput
                    style={[styles.input, style]}
                    placeholderTextColor="#999"
                    {...rest}
                />
                {iconPosition === 'right' && getIcon()}
            </View>
            { error && <Text style={styles.errorText}>{error}</Text> }
        </View>
    );
};