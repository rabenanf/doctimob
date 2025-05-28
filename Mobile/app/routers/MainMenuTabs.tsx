import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import useUserStore from "../services/redux/userStore";
import { DoctorMenuTabs } from "./DoctorMenuTabs";
import { PatientMenuTabs } from "./PatientMenuTabs";

const Tab = createBottomTabNavigator();

export const MainMenuTabs = () => {
  const { user } = useUserStore();

  if (user?.role !== "patient") {
    return <DoctorMenuTabs />;
  }

  return <PatientMenuTabs />;
};
