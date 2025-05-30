import React, { JSX } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { styles } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../data/interface";
import { useTranslation } from "react-i18next";
import { notifications } from "../../../data/fakeData";

type Props = NativeStackScreenProps<RootStackParamList, "Notifications">;

export const NotificationsScreen = ({ navigation }: Props): JSX.Element => {
  const { t } = useTranslation();
  const renderItem = ({ item }: any) => (
    <View style={styles.notificationCard}>
      <View style={styles.row}>
        <Image source={item.icon} style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <Image source={item.avatar} style={styles.avatar} />
      </View>
      <Text style={styles.message}>{item.message}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Notifications</Text>
        <TouchableOpacity>
          <Text style={styles.closeButton}>✕</Text>
        </TouchableOpacity>
      </View>
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
