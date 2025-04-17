import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, GestureResponderEvent } from "react-native";
import { styles } from './styles';

export interface IOTPInputProps {
    isChecked: boolean,
    text: string,
    onRadioButtonPress: (event: GestureResponderEvent) => void;
}

export const RadioButton = (props: IOTPInputProps) => {

    const { isChecked, text, onRadioButtonPress } = props;

    const _renderCheckedView = () => {
        return isChecked ? (
            <View style={[styles.radioButtonIconInnerIcon]} />
        ) : null;
    };

    return (
        <TouchableOpacity style={styles.radioContainer} onPress={onRadioButtonPress}>
            <View style={[styles.radioButtonIcon]}>{_renderCheckedView()}</View>
            <View style={[styles.radioButtonTextContainer]}>
                <Text style={styles.radioButtonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}