import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, GestureResponderEvent } from "react-native";
import { styles } from './styles';

export interface IOTPInputProps {
    isChecked: boolean,
    text: string,
    onRadioButtonPress: (event: GestureResponderEvent) => void;
    size?: number;
}

export const RadioButton = (props: IOTPInputProps) => {

    const { isChecked, text, onRadioButtonPress, size } = props;

    const _renderCheckedView = () => {
        return isChecked ? (
            <View style={[styles.radioButtonIconInnerIcon, size ? {height: size - 4, width : size - 4 } : {}]} />
        ) : null;
    };

    return (
        <TouchableOpacity style={styles.radioContainer} onPress={onRadioButtonPress}>
            <View style={[styles.radioButtonIcon, size ? {height: size, width : size } : {}]}>{_renderCheckedView()}</View>
            <View style={[styles.radioButtonTextContainer]}>
                <Text style={styles.radioButtonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}