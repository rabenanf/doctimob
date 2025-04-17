import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
  Text,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';

type Props = TextInputProps & {
  placeholder?: string;
  error?: string;
  iconName?: string;
};

export const PasswordWithIcon: React.FC<Props> = ({ placeholder = 'Password', error, iconName, ...rest }) => {
  const [visible, setVisible] = useState(false);

  const getIcon = () => {
    const size = 20;
    const color = '#888';
    const iconElement = <Ionicons name={iconName as any} size={size} color={color} />;

    return (
      <View style={styles.iconLeft}>{iconElement}</View>
    );
  };

  return (
    <View>
      <View style={styles.container}>
        { getIcon() }
        <TextInput
          placeholder={placeholder}
          secureTextEntry={!visible}
          placeholderTextColor="#999"
          style={styles.input}
          {...rest}
        />
        <TouchableOpacity onPress={() => setVisible(!visible)} style={styles.icon}>
          <Feather name={visible ? 'eye-off' : 'eye'} size={20} color="#888" />
        </TouchableOpacity>
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>

  );
};
