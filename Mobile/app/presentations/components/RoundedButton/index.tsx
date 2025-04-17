import { Text, TouchableOpacity, View } from "react-native";
import { styles } from './styles';
import {Theme} from '../../../resources/themes'
import { ReactNode } from "react";

export const RoundedButton = (Props: any) : ReactNode => {
    return (
        <View style={{width: '100%'}}>
            <TouchableOpacity style={[styles.buttonStyle, {backgroundColor : Props.isPrimary ? Theme.PRIMARY_COLOR : Theme.SECONDARY_COLOR}]} onPress={Props.onButtonPress}>
                <Text style={[styles.textButton, {color : Props.isPrimary ? Theme.PRIMARY_FONT_COLOR : Theme.SECONDARY_FONT_COLOR}]}>{Props.textBtn}</Text>
            </TouchableOpacity>
        </View>
    )
    

}