import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Rating } from "react-native-ratings";
import { styles } from './styles';

const ReviewCard = ({ 
  name = 'Anna', 
  date = 'March 10, 2025',
  avatar = 'https://randomuser.me/api/portraits/women/44.jpg',
  rating = 5,
  comment = 'Dr. Miller was amazing with my newborn! He took the time to explain everything in detail.'
}) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>

        <View style={styles.stars}>
            <Rating
                type={'custom'}
                ratingCount={rating}
                startingValue={4.8}
                ratingColor={'rgba(255, 209, 1, 1)'}
                ratingBackgroundColor={'white'}
                imageSize={10}
                readonly
            />
        </View>

        <Text style={styles.comment}>{comment}</Text>
      </View>
    </View>
  );
};

export default ReviewCard;

