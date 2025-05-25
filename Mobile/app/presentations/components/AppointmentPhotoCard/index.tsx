import React from 'react';
import { View, Text, TouchableOpacity, ImageSourcePropType, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // pour les icônes (calendar, clock)
import VideoIcon from '../../../resources/assets/icons/Videocamera.svg'; // ton icône vidéo SVG
import HomeIcon from '../../../resources/assets/icons/home.svg'; // ton icône vidéo SVG

import { styles } from './styles';

type AppointmentProps = {
    name: string;
    specialty: string;
    date: string;
    time: string;
    type?: string;
    // image: string;
    image: ImageSourcePropType;
};

export const AppointmemtPhotoCard = (props: AppointmentProps) => {

    let { name, specialty, date, time, image, type } = props;

    return (
        <View style={styles.card}>

            {/* <Image source={{ uri: image }} style={styles.image} /> */}
            <ImageBackground source={image} style={styles.image} />
            
            {/* Bouton vidéo flottant */}
            <TouchableOpacity style={styles.videoButton}>
                { type == 'OFFLINE' ? 
                                <HomeIcon width={24} height={24} /> :
                                <VideoIcon width={24} height={24} />
                            }
                
            </TouchableOpacity>

            {/* Info section */}
            <View style={styles.infoContainer}>
                <View style={styles.headerRow}>
                    <Text style={styles.name}>Dr. {name}</Text>
                    <View style={styles.specialtyTag}>
                        <Text style={styles.specialtyText}>{specialty}</Text>
                    </View>
                </View>

                <View style={styles.detailRow}>
                    <View style={styles.detailBox}>
                        <Icon name="calendar" size={10} color="#000" />
                        <Text style={styles.detailText}>{date}</Text>
                    </View>
                    <View style={styles.detailBox}>
                        <Icon name="time" size={10} color="#000" />
                        <Text style={styles.detailText}>{time}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};
