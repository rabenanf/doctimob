import React from "react";
import { ViewStyle } from "react-native";
import { View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { styles } from "./style";

type CustomTextInputProps = React.PropsWithChildren<{
  inputRef?: any;
  value?: string;
  placeholder: string;
  icon?: React.ReactElement;
  handleChange?: (text: string) => void;
  obscureText?: boolean;
  backgroundColor?: string;
  disabled?: boolean;
  multiline?: boolean;
  height?: number;
  label?: string;
  containerStyle?: ViewStyle;
  isValid?: boolean;
  validatorMessage?: string;
  primaryColor?: string;
  isNumerique?: boolean;
  withAffix?: boolean;
  isLeftIcon?: boolean;
  leftIcon?: any;
}>;

const CustomTextInput = ({
  inputRef,
  disabled,
  value,
  placeholder,
  icon,
  handleChange,
  backgroundColor,
  obscureText,
  height,
  multiline,
  containerStyle,
  label,
  primaryColor,
  isNumerique,
  isValid,
  validatorMessage,
  withAffix,
  isLeftIcon,
  leftIcon,
}: CustomTextInputProps) => {
  return (
    <View style={{ flex: 1, ...containerStyle }}>
      {label && (
        <Text style={styles.label}>
          {label} {":"}
        </Text>
      )}
      <TextInput
        ref={inputRef}
        outlineColor={"gray"}
        mode="outlined"
        underlineColor="transparent"
        multiline={multiline}
        keyboardType={isNumerique ? "numeric" : "default"}
        disabled={disabled}
        secureTextEntry={obscureText}
        selectionColor={"gray"}
        style={{
          ...styles.container,
          backgroundColor: backgroundColor ?? "white",
          fontSize: 12,
          height,
        }}
        value={value}
        theme={{
          roundness: 10,
          colors: {
            text: "black",
            primary: !isValid ? "red" : primaryColor ?? "grey",
          },
        }}
        placeholder={placeholder}
        contentStyle={styles.text}
        onChangeText={handleChange}
        placeholderTextColor={"gray"}
        right={
          withAffix ? (
            <TextInput.Affix text="VAA" textStyle={{ top: 1 }} />
          ) : (
            icon
          )
        }
        left={isLeftIcon ? leftIcon : undefined}
      />

      {!isValid && (
        <Text
          style={{
            paddingTop: 5,
            fontSize: 12,
            color: "black",
          }}
        >
          {validatorMessage ?? ""}
        </Text>
      )}
    </View>
  );
};

export default CustomTextInput;
