import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View } from "react-native";
import HomeIcon from "../resources/assets/icons/Home_active.svg";
import HomeInactiveIcon from "../resources/assets/icons/Home_inactive.svg";
import RequestIcon from "../resources/assets/icons/Request_active.svg";
import RequestInactiveIcon from "../resources/assets/icons/Request_inactive.svg";
import SettingsIcon from "../resources/assets/icons/Settings_active.svg";
import SettingsInactiveIcon from "../resources/assets/icons/Settings_inactive.svg";
import { styles } from "./Navigation.Styles";
import { MyRequestsListScreen } from "../presentations/screens/requests/MyRequests/MyRequestsListScreen";
import { NewRequestScreen } from "../presentations/screens/requests/NewRequest/NewRequestScreen";
import { AppointmentsListScreen } from "../presentations/screens/appointments/AppointmentsListScreen";
import { SettingsScreen } from "../presentations/screens/settings/SettingsScreen";
import { BlankScreen } from "../presentations/screens/home/BlankScreen";
import { HomeScreen } from "../presentations/screens/home/HomeScreen";
import useRequestStore from "../services/redux/requestStore";
import CalendarActiveIcon from "../resources/assets/icons/Calendar_active.svg";
import CalendarInactiveIcon from "../resources/assets/icons/Calendar_inactive.svg";
import NewRequestIcon from "../resources/assets/icons/NewRequestIcon.svg";

const Tab = createBottomTabNavigator();

export const PatientMenuTabs = () => {
  const { countRequests } = useRequestStore();

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
                <HomeIcon width={24} height={24} />
              ) : (
                <HomeInactiveIcon width={24} height={24} />
              ),
          }}
        >
          {({ navigation }) =>
            countRequests() === 0 ? (
              <BlankScreen
                navigation={navigation}
                route={{ key: "Home", name: "Home" }}
              />
            ) : (
              <HomeScreen
                navigation={navigation}
                route={{ key: "Home", name: "Home" }}
              />
            )
          }
        </Tab.Screen>
        <Tab.Screen
          name="MyRequestsList"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <RequestIcon width={24} height={24} />
              ) : (
                <RequestInactiveIcon width={24} height={24} />
              ),
          }}
        >
          {({ navigation }) => (
            <MyRequestsListScreen
              navigation={navigation}
              route={{ key: "MyRequestsList", name: "MyRequestsList" }}
            />
          )}
        </Tab.Screen>
        <Tab.Screen
          name="NewRequest"
          options={{
            headerShown: false,
            tabBarIcon: ({}) => (
              <View style={styles.container}>
                <NewRequestIcon />
              </View>
            ),
          }}
        >
          {({ navigation }) => (
            <NewRequestScreen
              navigation={navigation}
              route={{ key: "NewRequest", name: "NewRequest" }}
            />
          )}
        </Tab.Screen>
        <Tab.Screen
          name="AppointmentsList"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <CalendarActiveIcon width={24} height={24} />
              ) : (
                <CalendarInactiveIcon width={24} height={24} />
              ),
          }}
        >
          {({ navigation }) => (
            <AppointmentsListScreen
              navigation={navigation}
              route={{ key: "AppointmentsList", name: "AppointmentsList" }}
            />
          )}
        </Tab.Screen>
        <Tab.Screen
          name="Settings"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <SettingsIcon width={24} height={24} />
              ) : (
                <SettingsInactiveIcon width={24} height={24} />
              ),
          }}
        >
          {({ navigation }) => (
            <SettingsScreen
              navigation={navigation}
              route={{ key: "Settings", name: "Settings" }}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </>
  );
};
