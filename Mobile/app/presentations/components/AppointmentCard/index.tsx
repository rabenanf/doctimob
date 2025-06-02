import React from "react";
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import BlueVisioIcon from "../../../resources/assets/icons/BlueVisioIcon.svg";
import HomeBlueIcon from "../../../resources/assets/icons/HomeBlueIcon.svg";
import CalendarIcon from "../../../resources/assets/icons/Mini_calendar.svg";

type AppointmentCardProps = {
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  timingInfo?: string;
  source: ImageSourcePropType;
  type?: string;
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
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={source} style={styles.avatar} />

      <View style={styles.content}>
        <View style={styles.header}>
          <View style={{ flex: 1 / 2 }}>
            <Text style={styles.name} numberOfLines={2}>
              {doctorName}
            </Text>
          </View>

          <View style={[styles.badge, { flex: 1 / 2 }]}>
            <Text style={styles.badgeText} numberOfLines={2}>
              {specialty}
            </Text>
          </View>
        </View>

        <View style={styles.info}>
          <View style={styles.dateRow}>
            <CalendarIcon />

            <View style={{ flexDirection: "column" }}>
              <View style={styles.pill}>
                <Text style={styles.pillText}>{date}</Text>
              </View>
              <View style={styles.pill}>
                <Text style={styles.pillText}>{time}</Text>
                <Text style={styles.miniTime}>{"AM"}</Text>
              </View>
            </View>
          </View>

          <View style={styles.rightSide}>
            {timingInfo && (
              <View style={styles.alertBadge}>
                <Text style={styles.alertText}>{timingInfo}</Text>
              </View>
            )}
            <View style={styles.typeIcon}>
              {type == "OFFLINE" ? <HomeBlueIcon /> : <BlueVisioIcon />}
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AppointmentCard;
