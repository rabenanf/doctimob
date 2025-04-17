import React, {useRef, useState} from 'react';
import {Dimensions, StyleSheet, TextInput, View} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { styles } from './styles';

import { NUMBER_OF_INPUTS } from "../../../data/const/constants";

const inputWidth = Dimensions.get('screen').width / NUMBER_OF_INPUTS;


export interface IOTPInputProps {
    otpCodeChanged: (otpCode: string) => void;
}

export const PinCode = (props: IOTPInputProps) => {
    const { otpCodeChanged } = props;
  
    const isFocused = useIsFocused();
  
    const [values, setValues] = useState<string[]>(['', '', '', '', '', '']);
    const inputsRef = useRef<Array<TextInput | null>>([]);
  
    const focusedIndex = useSharedValue(0);
  
    const applyOTPCodeToInputs = (code: string) => {
      // split up code and apply it to all inputs
      const codeArray = code.split('');
      codeArray.forEach((char, index) => {
        const input = inputsRef.current[index];
        if (input) {
          input.setNativeProps({
            text: char,
          });
        }
      });
  
      const lastInput = inputsRef.current[inputsRef.current.length - 1];
      if (lastInput) {
        lastInput.focus();
        otpCodeChanged(code);
      }
    };
  
    const derivedValue = useDerivedValue(() => {
      return withTiming(focusedIndex.value);
    }, []);
  
    const translateX = useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateX: withTiming(focusedIndex.value * inputWidth),
          },
          {
            scale: interpolate(
              derivedValue.value,
              [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
              [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            ),
          },
        ],
      };
    }, []);
  
    return (
      <View style={styles.OTPcontainer}>
        {Array.from({length: NUMBER_OF_INPUTS}, (_, index) => {
          return (
            <TextInput
              key={index}
              ref={el => (inputsRef.current[index] = el)}
              keyboardType="numeric"
              placeholder=""
              selectionColor="transparent"
              defaultValue=""
              textContentType="OTP"
              maxLength={6} // a length of 6 because they paste their code into it
              style={styles.OTPtextInput}
              value={values[index]}
              onChange={event => {
                const {text} = event.nativeEvent;
                const newValues = [...values];
                const level1 = values[index]
                  ? text.split('').filter(item => item !== values[index])
                  : text;
                if (Array.isArray(level1) && level1.length > 0) {
                  newValues[index] = level1[0];
                } else {
                  const level2 = text.split('').filter(item => item !== text);
                  if (Array.isArray(level2) && level2.length > 0) {
                    newValues[index] = level2[0];
                  } else {
                    newValues[index] = text;
                  }
                }
  
                setValues(newValues);
                otpCodeChanged(newValues.join(''));
  
                if (text.length === 0 || text.length >= 1 || text.length === 6) {
                  if (text.length === 6) {
                    applyOTPCodeToInputs(text);
                    return;
                  }
                  if (text.length >= 1 && index !== NUMBER_OF_INPUTS - 1) {
                    const nextInput = inputsRef.current[index + 1];
                    if (nextInput) {
                      nextInput.focus();
                    }
                  }
                }
              }}
              onKeyPress={event => {
                if (event.nativeEvent.key === 'Backspace') {
                  if (values[index]) {
                    const newValues = [...values];
                    newValues[index] = '';
                    setValues(newValues);
                  }
                  // backward:
                  if (index !== 0) {
                    const previousInput = inputsRef.current[index - 1];
                    if (previousInput) {
                      previousInput.focus();
                      return;
                    }
                  }
                }
              }}
              onFocus={_ => {
                focusedIndex.value = index;
              }}
            />
          );
        })}
        <Animated.View style={[styles.OTPbottomLine, translateX]} />
      </View>
    );
  }

  export default PinCode;
