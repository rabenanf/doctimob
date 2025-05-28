import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import VideoIcon from "../../../../resources/assets/icons/Videocamera.svg";
import HomeIcon from "../../../../resources/assets/icons/home.svg";
import ReplyIcon from "../../../../resources/assets/icons/Auto_reply.svg";
import MiniClockIcon from "../../../../resources/assets/icons/Min_clock.svg";
import MiniCalendarIcon from "../../../../resources/assets/icons/Mini_calendar.svg";
import VietnamFlag from "../../../../resources/assets/icons/Vietnam_flag.svg";
import EnglishFlag from "../../../../resources/assets/icons/English_flag.svg";

import { styles } from "./styles";
import { useTranslation } from "react-i18next";

export interface DoctorRequestCardInputProps {
  nbSeen?: number;
  nbResponded?: number;
  title: string;
  date: string;
  time: string;
  type: string;
  name: string;
  natinality: string;
  avatar: ImageSourcePropType;
  goToDetail: () => void;
}

export const DoctorRequestCard = (Props: DoctorRequestCardInputProps) => {
  const { t } = useTranslation();

  let { name, avatar, natinality, title, date, time, type, goToDetail } = Props;

  return (
    <View style={styles.requestContainer}>
      <View style={styles.requestHeader}>
        <View style={styles.requestType}>
          <Image source={avatar} style={styles.avatar} />

          <Text style={styles.name}>{name}</Text>
        </View>

        <View style={styles.requestResponded}>
          <Text style={styles.typeText}>{type}</Text>

          <View style={styles.iconCircle}>
            {type == t("NewRequest.homeVisit") ? (
              <HomeIcon width={20} height={20} />
            ) : (
              <VideoIcon width={20} height={20} />
            )}
          </View>
        </View>
      </View>

      <View style={styles.requestDetail}>
        <Text style={styles.requestTitle}>
          {title + " " + title + " " + title}
        </Text>
      </View>

      <View style={styles.requestInfo}>
        <View style={styles.footerItem}>
          <MiniCalendarIcon />
          <Text style={styles.itemText}>{date}</Text>
        </View>

        <View style={styles.footerItem}>
          <MiniClockIcon />
          <Text style={styles.itemText}>{time}</Text>
        </View>

        <View style={styles.footerItem}>
          {natinality === "English" ? <EnglishFlag /> : <VietnamFlag />}
          <Text style={styles.itemText}>{natinality}</Text>
        </View>
      </View>
    </View>
  );
};
