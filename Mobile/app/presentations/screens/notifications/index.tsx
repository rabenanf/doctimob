import React, { JSX } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { styles } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../data/interface";
import { useTranslation } from "react-i18next";
import ChatDotIcon from "../../../resources/assets/icons/Chat_no_dot.svg";
import CalendarProposalIcon from "../../../resources/assets/icons/Calendar_proposal.svg";
import MessageDotRedIcon from "../../../resources/assets/icons/Message_dot_red.svg";
import { Divider } from "react-native-paper";

type Props = NativeStackScreenProps<RootStackParamList, "Notifications">;

export const NotificationsScreen = ({ navigation }: Props): JSX.Element => {
  const notifications = [
    {
      id: "1",
      icon: <ChatDotIcon style={styles.icon} />, // replace with your asset path
      title: "New consultation request",
      time: "5 minutes ago",
      message: "5-year-old child with recurring fever",
      avatar: require("../../../resources/assets/images/Photo_2.png"), // replace with your asset path
    },
    {
      id: "2",
      icon: <CalendarProposalIcon style={styles.icon} />,
      title: "Your proposal was selected!",
      time: "5 minutes ago",
      message: "Patient Emily Hoang confirmed the consultation",
      avatar: require("../../../resources/assets/images/Photo_1.png"),
    },
    {
      id: "3",
      icon: <MessageDotRedIcon style={styles.icon} />,
      title: "Chat is now open",
      time: "5 minutes ago",
      message: "You can now message patient Liam Tran before the consultation.",
      avatar: require("../../../resources/assets/images/Photo_3.png"),
    },
    {
      id: "4",
      icon: <CalendarProposalIcon style={styles.icon} />,
      title: "Complete your consultation summary",
      time: "5 minutes ago",
      message:
        "Please complete your consultation summary for the appointment with Liam Tran.",
      avatar: require("../../../resources/assets/images/Photo_4.png"),
    },
  ];

  const { t } = useTranslation();
  const goBack = () => navigation.goBack();
  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.notificationCard}>
      <View style={styles.row}>
        <View>{item.icon}</View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>

        <Image source={item.avatar} style={styles.avatar} />
      </View>
      <Text style={styles.message}>{item.message}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View />

        <Text style={styles.headerText}>Notifications</Text>

        <TouchableOpacity onPress={goBack} style={styles.closeIcon}>
          <Text style={styles.closeButton}>✕</Text>
        </TouchableOpacity>
      </View>

      <Divider style={styles.divider} />

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
