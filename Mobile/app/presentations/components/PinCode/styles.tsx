import { Dimensions, StyleSheet } from "react-native";
import {Theme} from '../../../resources/themes'
import { NUMBER_OF_INPUTS } from "../../../data/const/constants";

const inputWidth = Dimensions.get('screen').width / NUMBER_OF_INPUTS;

export const styles = StyleSheet.create({
    OTPcontainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%'
    },
    OTPtextInput: {
      width: inputWidth - 20,
      aspectRatio: 1,
      textAlign: 'center',
      textAlignVertical: 'center',
      backgroundColor: '#f7f8ff',
      borderRadius: 10,
      borderColor: '#e5e7f3',
      borderWidth: 1,
    },
    OTPbottomLine: {
      width: inputWidth - 20,
      height: 2,
      backgroundColor: 'transparent',
      position: 'absolute',
      bottom: 0,
      opacity: 0.5,
    },
  });