import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { styles } from './styles'
import { TypeConsultation } from '../../../data/enum';
import HomeIcon from "../../../resources/assets/icons/home.svg";
import CameraIcon from "../../../resources/assets/icons/Videocamera.svg";

type AppointmentCardProps = {
    doctorName: string;
    specialty: string;
    date: string;
    time: string;
    timingInfo?: string;
    source: ImageSourcePropType;
    type: TypeConsultation;
    onPress: () => void;
};

const AppointmentCard: React.FC<AppointmentCardProps> = ({
    doctorName,
    specialty,
    date,
    time,
    timingInfo,
    source,
    type,
    onPress
}) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={source} style={styles.avatar} />
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.name}>{'Dr. '} {doctorName}</Text>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>{specialty}</Text>
                    </View>
                </View>
                <View style={styles.info}>
                    <View style={styles.dateRow}>
                        <Icon name="calendar" size={16} color="#000" style={{ marginRight: 6 }} />
                        <View style={{ flexDirection : 'column'}}>
                            <View style={styles.pill}>
                                <Text style={styles.pillText}> { date } </Text>
                            </View>
                            <View style={styles.pill}>
                                <Text style={styles.pillText}> { time } </Text>
                                <Text style={styles.highlightText}> {'AM' } </Text>
                            </View>
                        </View>
                        
                        
                    </View>
                    <View style={styles.rightSide}>
                        { timingInfo && <View style={styles.alertBadge}>
                            <Text style={styles.alertText}>{timingInfo}</Text>
                        </View>}
                        <View style={styles.typeIcon}>
                            { type == TypeConsultation.HOMEVISIT ? 
                                <HomeIcon /> :
                                <CameraIcon />
                            }
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default AppointmentCard;
