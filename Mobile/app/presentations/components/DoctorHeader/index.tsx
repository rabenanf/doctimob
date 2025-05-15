import React, { FC } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageSourcePropType } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';

type DoctorHeaderProps = {
  source: ImageSourcePropType;
  doctorName: string;
  specialty: string;
  onClose: () => void;
};

const DoctorHeader: FC<DoctorHeaderProps> = ({
  source,
  doctorName,
  specialty,
  onClose,
}) => {
  return (
    <View style={styles.container}>
      {/* Doctor Info */}
      <View style={styles.infoContainer}>
        <Image source={source} style={styles.avatar} />
        <View>
          <Text style={styles.name}>{'Dr. '} {doctorName}</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{specialty}</Text>
          </View>
        </View>
      </View>

      {/* Close button */}
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Ionicons name="close" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default DoctorHeader;
