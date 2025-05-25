import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import {RadioButton} from "../RadioButton";

export interface IOTPInputProps {
    values: any,
    onPress: (index: number) => void;
    size?: number;
    selected?: number;
}

export const RadioButtonContainer = (props : IOTPInputProps) => {

    const { values, onPress, size, selected } = props;

    const [currentSelectedItem, setCurrentSelectedItem] = useState(selected ? selected : 0);

    const _onPress = (idx : number) => {
        onPress(idx);
        setCurrentSelectedItem(idx);
    };

    const _renderRadioButtons = () => {
        return (values || []).map((listItem: any, idx: number) => {
            let isChecked = currentSelectedItem === idx ? true : false;
            return (
                <RadioButton
                    key={idx}
                    onRadioButtonPress={() => _onPress(idx)}
                    isChecked={isChecked}
                    text={listItem.text}
                    size={size}
                />
            );
        });
    };
    return <View style={{flexDirection: "row", gap: 20}}>{_renderRadioButtons()}</View>;
}