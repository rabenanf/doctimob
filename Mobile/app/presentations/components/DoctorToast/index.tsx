import React, { FC } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { styles } from './styles';

type DoctorToastProps = {
    imageUrl: string;
    doctorName: string;
    specialty: string;
    timeLeft: string;
  };

const DoctorToast : FC<DoctorToastProps> = ({
    imageUrl,
    doctorName,
    specialty,
    timeLeft
}) => {
    return (
        <View style={styles.cardContainer}>
            <Image
                source={{ uri: imageUrl }} // Replace with your image URL
                style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{'Dr. '} {doctorName}</Text>
                <Text style={styles.specialty}> {specialty}</Text>
            </View>
            <Text style={styles.time}>{timeLeft}</Text>
        </View>
    );
};

export default DoctorToast;