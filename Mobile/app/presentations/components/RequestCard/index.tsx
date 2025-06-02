import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import VideoIcon from "../../../resources/assets/icons/Videocamera.svg";
import HomeIcon from "../../../resources/assets/icons/home.svg";
import EyeIcon from "../../../resources/assets/icons/Eye.svg";
import ReplyIcon from "../../../resources/assets/icons/Auto_reply.svg";

import { styles } from "./styles";
import { useTranslation } from "react-i18next";
import MiniClockIcon from "../../../resources/assets/icons/Min_clock.svg";
import MiniCalendarIcon from "../../../resources/assets/icons/Mini_calendar.svg";
import PurpleEyesIcon from "../../../resources/assets/icons/PurpleEyesIcon.svg";
import YellowMessageIcon from "../../../resources/assets/icons/YellowMessageIcon.svg";
import HomeBlueIcon from "../../../resources/assets/icons/HomeBlueIcon.svg";
import BlueVisioIcon from "../../../resources/assets/icons/BlueVisioIcon.svg";
import RightPurpleIcon from "../../../resources/assets/icons/RightPurpleIcon.svg";

export interface RequestCardInputProps {
  nbSeen?: number;
  nbResponded?: number;
  title: string;
  date: string;
  time: string;
  type: string;
  goToDetail: () => void;
}

export const RequestCard = (Props: RequestCardInputProps) => {
  const { t } = useTranslation();

  let {
    nbSeen = 0,
    nbResponded = 0,
    title,
    date,
    time,
    type,
    goToDetail,
  } = Props;

  return (
    <TouchableOpacity
      onPress={goToDetail}
      activeOpacity={0.5}
      style={styles.requestContainer}
    >
      <View style={styles.requestHeader}>
        <View style={[{ flex: 2 / 3 }]}>
          <View style={styles.requestType}>
            {type == t("NewRequest.homeVisit") ? (
              <HomeBlueIcon />
            ) : (
              <BlueVisioIcon />
            )}
            <Text style={styles.typeText}>{type}</Text>
          </View>
        </View>

        <View
          style={[
            {
              flex: 1.25 / 3,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            },
          ]}
        >
          <View style={styles.requestSeen}>
            <PurpleEyesIcon />
            <Text style={styles.statText}>{nbSeen}</Text>
          </View>

          <View style={styles.requestResponded}>
            <YellowMessageIcon />
            <Text style={styles.statText}>{nbResponded}</Text>
          </View>
        </View>
      </View>

      <View style={styles.requestDetail}>
        <Text style={styles.requestTitle}>{title}</Text>
      </View>

      <View style={styles.requestInfo}>
        <View style={styles.requestDate}>
          <MiniCalendarIcon />
          <Text style={styles.typeText}>{date}</Text>
        </View>

        <View style={styles.requestTime}>
          <MiniClockIcon />
          <Text style={styles.typeText}>{time}</Text>
        </View>

        <TouchableOpacity style={styles.requestGo} onPress={goToDetail}>
          <RightPurpleIcon />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
