import { Image, Text, TouchableOpacity, View } from "react-native";
import { RoundedButton } from "../RoundedButton";
import { useTranslation } from "react-i18next";
import Icon from 'react-native-vector-icons/Ionicons';
import VideoIcon from '../../../resources/assets/icons/Videocamera.svg';
import HomeIcon from '../../../resources/assets/icons/home.svg';
import MiniClockIcon from "../../../resources/assets/icons/Min_clock_inv.svg";
import MiniCalendarIcon from "../../../resources/assets/icons/Mini_calendar_inv.svg";
import nobody from '../../../resources/assets/images/nobody.svg';
import { styles } from './styles';

export interface SelectDoctorProps {
    photo : any,
    price : number,
    name : string,
    specialty : string,
    type : string,
    date : string,
    time : string,
    id : number
    selectDoctor : (id: number) => void;
    closeModal : () => void;
}

export const SelectDoctorModal = (Props : SelectDoctorProps) => {

    const { t } = useTranslation();
    let { photo, price, name, specialty, type, date, time, id, selectDoctor, closeModal } = Props;


    return (
        <View style={styles.modalBackground}>
            <View style={styles.selectContainer}>
                <View style={styles.rectangle}></View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}> {t('SelectDoctor.title')} </Text>
                    <Text style={styles.description}> {t('SelectDoctor.description')} </Text>
                </View>
                <View style={styles.doctor}>
                    <Image
                        style={styles.image}
                        source={photo ? photo : nobody}
                        resizeMode={"cover"}
                        />
                    <View style={styles.nameContainer}>
                        <View style={{flexDirection : 'column', rowGap : 5, flex : 3/4}}>
                            <Text style={styles.name}> {'Dr. '} {name}</Text>
                            <Text style={styles.specialty}> {specialty} </Text>
                        </View>
                        <View style={styles.price}>
                            <Text style={styles.priceText}>{'VND '} {price} </Text>
                        </View>
                    </View>  
                </View>
                <View style={styles.request}>
                    <View style={styles.iconCircle}>
                        {type == 'OFFLINE' ? <HomeIcon width={20} height={20} /> : <VideoIcon width={20} height={20} />}
                    </View>
                    <View style={{flexDirection: 'row', gap: 10}}>
                        <View style={styles.pill}>
                            <MiniCalendarIcon />
                            <Text style={styles.pillText}> {date} </Text>
                        </View>

                        {/* Time */}
                        <View style={styles.pill}>
                            <MiniClockIcon />
                            <Text style={styles.pillText}> {time} </Text>
                        </View>
                    </View>

                </View>
                <View style={styles.action}>
                    <RoundedButton 
                        isPrimary={true}
                        onButtonPress={() => selectDoctor(id)} 
                        textBtn={t('SelectDoctor.select')}
                    />
                    <TouchableOpacity style={styles.cancelContainer} onPress={() => closeModal()} >
                        <Text style={styles.cancel}> {t('SelectDoctor.cancel')} </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        
    )
}