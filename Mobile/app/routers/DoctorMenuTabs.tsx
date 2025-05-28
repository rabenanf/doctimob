import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeIcon from "../resources/assets/icons/Home_active.svg";
import HomeInactiveIcon from "../resources/assets/icons/Home_inactive.svg";
import CalendarActiveIcon from "../resources/assets/icons/Calendar_active.svg";
import CalendarInactiveIcon from "../resources/assets/icons/Calendar_inactive.svg";
import ConsultationActiveIcon from "../resources/assets/icons/Consultation_active.svg";
import ConsultationInactiveIcon from "../resources/assets/icons/Consultation_inactive.svg";
import SettingsIcon from "../resources/assets/icons/Settings_active.svg";
import SettingsInactiveIcon from "../resources/assets/icons/Settings_inactive.svg";
import { styles } from "./Navigation.Styles";
import useRequestStore from "../services/redux/requestStore";
import { DoctorBlankScreen } from "../presentations/screens/home/DoctorBlankScreen";
import { DoctorHomeScreen } from "../presentations/screens/home/DoctorHomeScreen";
import { DoctorConsultations } from "../presentations/screens/requests/DoctorConsultations";
import { DoctorAppointments } from "../presentations/screens/appointments/DoctorAppointments";
import { DoctorSettingsScreen } from "../presentations/screens/settings/DoctorSettingsScreen";

const Tab = createBottomTabNavigator();

export const DoctorMenuTabs = () => {
  const { countRequests } = useRequestStore();
  const iconSize = 24;

  return (
    <>
      <Tab.Navigator
        detachInactiveScreens={true}
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            ...styles.tabBarStyle,
          },
        }}
        initialRouteName={"Home"}
      >
        <Tab.Screen
          name="Home"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <HomeIcon width={iconSize} height={iconSize} />
              ) : (
                <HomeInactiveIcon width={iconSize} height={iconSize} />
              ),
          }}
        >
          {({ navigation }) =>
            countRequests() === 1 ? (
              <DoctorBlankScreen
                navigation={navigation}
                route={{ key: "Home", name: "Home" }}
              />
            ) : (
              <DoctorHomeScreen
                navigation={navigation}
                route={{ key: "Home", name: "Home" }}
              />
            )
          }
        </Tab.Screen>
        <Tab.Screen
          name="DoctorConsultations"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <ConsultationActiveIcon width={iconSize} height={iconSize} />
              ) : (
                <ConsultationInactiveIcon width={iconSize} height={iconSize} />
              ),
          }}
        >
          {({ navigation }) => (
            <DoctorConsultations
              navigation={navigation}
              route={{
                key: "DoctorConsultations",
                name: "DoctorConsultations",
              }}
            />
          )}
        </Tab.Screen>
        <Tab.Screen
          name="DoctorAppointments"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <CalendarActiveIcon width={iconSize} height={iconSize} />
              ) : (
                <CalendarInactiveIcon width={iconSize} height={iconSize} />
              ),
          }}
        >
          {({ navigation }) => (
            <DoctorAppointments
              navigation={navigation}
              route={{ key: "DoctorAppointments", name: "DoctorAppointments" }}
            />
          )}
        </Tab.Screen>
        <Tab.Screen
          name="Settings"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <SettingsIcon width={iconSize} height={iconSize} />
              ) : (
                <SettingsInactiveIcon width={iconSize} height={iconSize} />
              ),
          }}
        >
          {({ navigation }) => (
            <DoctorSettingsScreen
              navigation={navigation}
              route={{ key: "Settings", name: "Settings" }}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </>
  );
};
