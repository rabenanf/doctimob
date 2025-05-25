import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import nobody from '../../../resources/assets/images/nobody.svg';
import { styles } from './styles';
import { useTranslation } from 'react-i18next';


export interface ResponseCardInputProps {
    message : string,
    photo : any,
    price : number,
    name : string,
    specialty : string,
    rate : string,
    id : number,
    seeProfil : (id: number) => void;
    selectDoctor : (id: number) => void;
}

export const ResponseCard = (Props : ResponseCardInputProps) => {

    let { message, photo, price, name, specialty, rate, id, seeProfil, selectDoctor } = Props;
    const { t } = useTranslation();

    return (
        <View style={styles.responseContainer}>
            <View style={styles.responseHeader}>
                <Image
                    style={styles.image}
                    source={photo ? photo : nobody}
                    resizeMode={"cover"}
                    />
                <View style={styles.nameContainer}>
                    <View style={{flexDirection : 'column', rowGap : 5}}>
                        <Text style={styles.name}> {'Dr. '} {name}</Text>
                        <Text style={styles.specialty}> {specialty} </Text>
                    </View>
                    <View style={styles.rate}>
                        <Icon name="star" size={10} color="#000" />
                        <Text style={styles.rateText}> {rate} </Text>
                    </View>
                </View>    
                
            </View>
            <View style={styles.responseMessage}>
                <Text style={styles.message} > {message} </Text>
            </View>
            <View style={styles.responseFooter}>
                <View style={{alignContent:'center',justifyContent: 'center'}}>
                    <Text style={styles.price}>{'VND '} {price}</Text> 
                </View>
                <View style={{flexDirection : 'row', columnGap : 10 }}>
                    <TouchableOpacity style={styles.profil} onPress={() => seeProfil(id)}>
                        <Text style={styles.profilText}> {t('ResponseCard.profil')} </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.select} onPress={() => selectDoctor(id)}>
                        <Text style={styles.selectText}> {t('ResponseCard.select')} </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}