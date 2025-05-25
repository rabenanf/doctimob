import { Text, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
import VideoIcon from '../../../resources/assets/icons/Videocamera.svg';
import HomeIcon from '../../../resources/assets/icons/home.svg';
import EyeIcon from '../../../resources/assets/icons/Eye.svg';
import ReplyIcon from '../../../resources/assets/icons/Auto_reply.svg';

import { styles } from './styles';
import { useTranslation } from "react-i18next";

export interface RequestCardInputProps {
    nbSeen? : number,
    nbResponded? : number,
    title : string,
    date : string,
    time : string,
    type : string,
    goToDetail : () => void  
}    

export const RequestCard = (Props : RequestCardInputProps) => {

    const { t } = useTranslation();

    let { nbSeen = 0, nbResponded = 0, title, date, time, type, goToDetail } = Props;

    return (
        <View style={styles.requestContainer}>
            <View style={styles.requestHeader}>
                <View style={styles.requestType}>
                    <View style={styles.iconCircle}>
                        {type == t('NewRequest.homeVisit') ? <HomeIcon width={20} height={20} /> : <VideoIcon width={20} height={20} />}
                    </View>
                    <Text style={styles.typeText}> {type} </Text>
                </View>  
                <View style={styles.requestSeen}>
                    <View style={styles.iconSeen}>
                        <EyeIcon width={20} height={20} />
                    </View>
                    <Text style={styles.statText}>{nbSeen}</Text>
                </View> 
                
                <View style={styles.requestResponded}>
                    <View style={styles.iconResponded}>
                        <ReplyIcon width={20} height={20} />
                    </View>
                    <Text style={styles.statText}>{nbResponded}</Text>
                </View>
            </View>
            <View style={styles.requestDetail}>
                <Text style={styles.requestTitle}> {title} </Text>
            </View>
            <View style={styles.requestInfo}>
                <View style={styles.requestDate}>
                    <Icon name="calendar" size={14} color="#000" />
                    <Text style={styles.typeText}>{date}</Text>
                </View>   
                <View style={styles.requestTime}>
                    <Icon name="time" size={14} color="#000" />
                    <Text style={styles.typeText}>{time}</Text>
                </View>
                <TouchableOpacity style={styles.requestGo} onPress={goToDetail}>
                    <Icon name="arrow-forward" size={18} color="#444" />
                </TouchableOpacity>
            </View>
        </View> 
    )       

}