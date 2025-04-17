import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import {CardRadioButton} from "../CardRadioButton";

export interface InputProps {
    values: any,
    onPress: (index: number) => void;
}

export const CardRadioButtonContainer = (props : InputProps) => {

    const { values, onPress } = props;

    const [currentSelectedItem, setCurrentSelectedItem] = useState(0);

    const _onPress = (idx : number) => {
        onPress(idx);
        setCurrentSelectedItem(idx);
    };

    const _renderRadioButtons = () => {
        return (values || []).map((listItem: any, idx: number) => {
            let isChecked = currentSelectedItem === idx ? true : false;
            return (
                <CardRadioButton
                    key={idx}
                    onRadioButtonPress={() => _onPress(idx)}
                    isChecked={isChecked}
                    number={listItem.number}
                    SvgIcon={listItem.icon}
                />
            );
        });
    };
    return <View style={{flexDirection: "column", gap: 5}}>{_renderRadioButtons()}</View>;
}