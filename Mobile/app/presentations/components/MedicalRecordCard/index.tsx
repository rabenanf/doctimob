import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type RecordProps = {
    doctorImage: ImageSourcePropType;
    doctorName: string;
    specialty: string;
    date: string;
    time: string;
    meridiem: string;
    summary: string;
    onPress: () => void;
}

export const MedicalRecordCard: React.FC<RecordProps> = ({
    doctorImage,
    doctorName,
    specialty,
    date,
    time,
    meridiem,
    summary,
    onPress // Ajoute la prop ici
}) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
            <View style={styles.header}>
                <Image source={doctorImage} style={styles.avatar} />

                <View style={styles.info}>
                    <Text style={styles.name}>{doctorName}</Text>
                    <View style={styles.specialtyBadge}>
                        <Text style={styles.specialtyText}>{specialty}</Text>
                    </View>
                </View>

                <View style={styles.datetime}>
                    <Text style={styles.date}>{date}</Text>
                    <View style={styles.timeRow}>
                        <Text style={styles.time}>{time}</Text>
                        <View style={styles.amBadge}>
                            <Text style={styles.amText}>{meridiem}</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.summaryBox}>
                <Text style={styles.summaryTitle}>Summary:</Text>
                <Text style={styles.summaryText}>{summary}</Text>
            </View>

        </TouchableOpacity>
    )
}
