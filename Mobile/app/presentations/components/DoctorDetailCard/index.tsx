import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, ImageSourcePropType } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import BackArrow from '../../../resources/assets/icons/back.svg';
import { TypeConsultation } from '../../../data/enum';
import HomeIcon from "../../../resources/assets/icons/home.svg";
import CameraIcon from "../../../resources/assets/icons/Videocamera.svg";

type DoctorDetailCardProps = {
    doctorName: string;
    specialty: string;
    date: string;
    time: string;
    onCancel: () => void;
    onVideoCall: () => void;
    onBack: () => void;
    imageSource: ImageSourcePropType;
    type: TypeConsultation;
};

const DoctorDetailCard: React.FC<DoctorDetailCardProps> = ({
    doctorName,
    specialty,
    date,
    time,
    onCancel,
    onVideoCall,
    onBack,
    imageSource,
    type
}) => {
    return (
        <ImageBackground source={imageSource} style={styles.background}>
            {/* Top buttons */}
            <View style={styles.topButtons}>
                <TouchableOpacity style={styles.arrowContainer} onPress={onBack}>
                    <BackArrow style={styles.vectorStroke} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconButton} onPress={onVideoCall}>
                    { type == TypeConsultation.HOMEVISIT ?
                        <HomeIcon width={24} height={24}/>
                        :
                        <CameraIcon width={24} height={24}/>
                    }
                </TouchableOpacity>
            </View>

            {/* Bottom card */}
            <View style={styles.bottomCard}>
                <View style={styles.infoRow}>
                    <Text style={styles.name}>{'Dr. '} {doctorName}</Text>
                    <View style={styles.specialtyBadge}>
                        <Text style={styles.specialtyText}>{specialty}</Text>
                    </View>
                </View>

                <View style={styles.dateTimeRow}>
                    <View style={{flexDirection: 'row', columnGap : 10}}>
                        <View style={styles.dateItem}>
                            <Ionicons name="calendar" size={16} color="#000" style={{ marginRight: 6 }} />
                            <Text style={styles.dateText}>{date}</Text>
                        </View>
                        <View style={styles.dateItem}>
                            <Ionicons name="time" size={16} color="#000" style={{ marginRight: 6 }} />
                            <Text style={styles.dateText}>{time}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
                        <Ionicons name="close" size={16} color="#fff" style={{ marginRight: 4 }} />
                    <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
                </View>

                
            </View>
        </ImageBackground>
    );
};

export default DoctorDetailCard;
