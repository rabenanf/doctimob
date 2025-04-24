import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, GestureResponderEvent, Image } from "react-native";
import { styles } from './styles';
import { SvgProps } from "react-native-svg";
import Stars from "../../../resources/assets/icons/etoiles.svg";

export interface IOTPInputProps {
    isChecked: boolean,
    number: string,
    SvgIcon: React.FC<SvgProps>;
    onRadioButtonPress: (event: GestureResponderEvent) => void;
}

export const CardRadioButton = (props: IOTPInputProps) => {

    const { isChecked, number, SvgIcon, onRadioButtonPress } = props;
    const lastNumbers = number.slice(-4);

    const _renderCheckedView = () => {
        return isChecked ? (
            <View style={[styles.radioButtonIconInnerIcon]} />
        ) : null;
    };

    return (
        <TouchableOpacity style={styles.radioContainer} onPress={onRadioButtonPress}>
            <View style={[styles.radioButtonTextContainer]}>
                <View style={[styles.radioButtonIcon]}>{_renderCheckedView()}</View>
                <Stars />
                <Text style={styles.radioButtonText}>{lastNumbers}</Text>
            </View>
            <View style={[styles.radioButtonTextContainer]}>
                <SvgIcon width={24} height={24} />
            </View>    
        </TouchableOpacity>
    );
}