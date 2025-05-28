import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import VideoIcon from "../../../../resources/assets/icons/Videocamera.svg";
import HomeIcon from "../../../../resources/assets/icons/home.svg";
import MiniClockIcon from "../../../../resources/assets/icons/Min_clock.svg";
import MiniCalendarIcon from "../../../../resources/assets/icons/Mini_calendar.svg";
import VietnamFlag from "../../../../resources/assets/icons/Vietnam_flag.svg";
import EnglishFlag from "../../../../resources/assets/icons/English_flag.svg";
import { styles } from "./styles";
import { useTranslation } from "react-i18next";

export interface DoctorAppointmentCardInputProps {
  nbSeen?: number;
  nbResponded?: number;
  title: string;
  date: string;
  time: string;
  type: string;
  name: string;
  rdvTime: string;
  avatar: ImageSourcePropType;
  goToDetail: () => void;
}

export const DoctorAppointmentCard = (
  Props: DoctorAppointmentCardInputProps
) => {
  const { t } = useTranslation();
  const { name, avatar, rdvTime, title, date, time, type, goToDetail } = Props;
  const isMinutes = rdvTime?.includes("minutes");

  return (
    <View style={styles.requestContainer}>
      <View style={styles.requestHeader}>
        <View style={styles.requestType}>
          <Image source={avatar} style={styles.avatar} />

          <Text style={styles.name}>{name}</Text>
        </View>

        <View
          style={[
            styles.rdvTimeContainer,
            { backgroundColor: isMinutes ? "#FF4E0019" : "#F3F6FA" },
          ]}
        >
          <Text
            style={[styles.rdvTime, { color: isMinutes ? "#FF4E00" : "#222" }]}
          >
            {rdvTime}
          </Text>
        </View>
      </View>

      <View style={styles.requestDetail}>
        <Text style={styles.requestTitle}>{title}</Text>
      </View>

      <View style={styles.requestInfo}>
        <View style={styles.leftContent}>
          <View style={styles.footerItem}>
            <MiniCalendarIcon />
            <Text style={styles.itemText}>{date}</Text>
          </View>

          <View style={styles.footerItem}>
            <MiniClockIcon />
            <Text style={styles.itemText}>{time}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.iconCircle}>
          {type == t("NewRequest.homeVisit") ? (
            <HomeIcon width={20} height={20} />
          ) : (
            <VideoIcon width={20} height={20} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
