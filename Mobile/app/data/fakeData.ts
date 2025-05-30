import {
  Cute_Patient_img,
  Doctor_img,
  Photo_1_img,
  Photo_2_img,
  Photo_3_img,
  Photo_4_img,
} from "../resources/assets/images";

const doctorAppointments = [
  {
    id: 1,
    name: "Lennart Engström",
    preferred_date: new Date().setDate(new Date().getDate() + 1),
    preferred_time: "09:30",
    profile: Cute_Patient_img,
    type: "ONLINE",
  },
  {
    id: 2,
    name: "Kurt Petersson",
    preferred_date: new Date().setDate(new Date().getDate() + 2),
    preferred_time: "14:30",
    profile: Doctor_img,
    type: "ONLINE",
  },
];

const doctorConsultationRequests = [
  {
    id: "1",
    name: "Anton Johnsson",
    description: "High fever and fatigue",
    preferred_date: new Date().setDate(new Date().getDate() + 1),
    preferred_time: "07:30",
    profile: Photo_4_img,
    consultation_type: "ONLINE",
    natinality: "English",
  },
  {
    id: "2",
    name: "Eva Persson",
    description: "Severe migraines, vision blurry",
    preferred_date: new Date().setDate(new Date().getDate() + 3),
    preferred_time: "10:30",
    profile: Photo_2_img,
    consultation_type: "OFFLINE",
    natinality: "Vietnamese",
  },
  {
    id: "3",
    name: "Alice Hellström",
    description: "Routine pediatric checkup",
    preferred_date: new Date().setDate(new Date().getDate() + 7),
    preferred_time: "14:30",
    profile: Photo_1_img,
    consultation_type: "ONLINE",
    natinality: "English",
  },
  {
    id: "4",
    name: "Bo Lundgren",
    description: "High fever and fatigue",
    preferred_date: new Date().setDate(new Date().getDate() + 4),
    preferred_time: "16:30",
    profile: Doctor_img,
    consultation_type: "OFFLINE",
    natinality: "Vietnamese",
  },
];

const doctorRequests = [
  {
    id: "1",
    name: "Eva Persson",
    description: "Severe migraines, vision blurry",
    preferred_date: new Date().setDate(new Date().getDate() + 1),
    preferred_time: "07:30",
    profile: Photo_1_img,
    consultation_type: "ONLINE",
    natinality: "English",
  },
  {
    id: "2",
    name: "Anton Johnsson",
    description: "High fever and fatigue",
    preferred_date: new Date().setDate(new Date().getDate() + 3),
    preferred_time: "10:30",
    profile: Photo_2_img,
    consultation_type: "OFFLINE",
    natinality: "Vietnamese",
  },
  {
    id: "3",
    name: "Alice Hellström",
    description: "Routine pediatric checkup",
    preferred_date: new Date().setDate(new Date().getDate() + 7),
    preferred_time: "14:30",
    profile: Photo_3_img,
    consultation_type: "ONLINE",
    natinality: "English",
  },
  {
    id: "4",
    name: "Bo Lundgren",
    description: "Severe migraines, vision blurry",
    preferred_date: new Date().setDate(new Date().getDate() + 4),
    preferred_time: "16:30",
    profile: Photo_4_img,
    consultation_type: "OFFLINE",
    natinality: "Vietnamese",
  },
];

const doctorUpcomingAppointments = [
  {
    id: "1",
    name: "Eva Persson",
    description: "Child check-up & cough",
    preferred_date: new Date().setDate(new Date().getDate() + 1),
    preferred_time: "07:30",
    rdv_time: "in 05 minutes",
    profile: Photo_1_img,
    consultation_type: "ONLINE",
  },
  {
    id: "2",
    name: "Anton Johnsson",
    description: "High fever and fatigue",
    preferred_date: new Date().setDate(new Date().getDate() + 3),
    preferred_time: "10:30",
    rdv_time: "in 2 days",
    profile: Photo_2_img,
    consultation_type: "OFFLINE",
  },
  {
    id: "3",
    name: "Alice Hellström",
    description: "Routine pediatric checkup",
    preferred_date: new Date().setDate(new Date().getDate() + 7),
    preferred_time: "14:30",
    rdv_time: "in 3 days",
    profile: Photo_3_img,
    consultation_type: "ONLINE",
  },
  {
    id: "4",
    name: "Bo Lundgren",
    description: "Severe migraines, vision blurry",
    preferred_date: new Date().setDate(new Date().getDate() + 4),
    preferred_time: "16:30",
    rdv_time: "in 4 days",
    profile: Photo_4_img,
    consultation_type: "OFFLINE",
  },
];

const notifications = [
  {
    id: "1",
    icon: require("../resources/assets/icons/Chat_no_dot.svg"), // replace with your asset path
    title: "New consultation request",
    time: "5 minutes ago",
    message: "5-year-old child with recurring fever",
    avatar: require("./assets/avatars/user1.png"), // replace with your asset path
  },
  {
    id: "2",
    icon: require("../resources/assets/icons/Calendar_proposal.svg"),
    title: "Your proposal was selected!",
    time: "5 minutes ago",
    message: "Patient Emily Hoang confirmed the consultation",
    avatar: require("./assets/avatars/user2.png"),
  },
  {
    id: "3",
    icon: require("../resources/assets/icons/Message_dot_red.svg"),
    title: "Chat is now open",
    time: "5 minutes ago",
    message: "You can now message patient Liam Tran before the consultation.",
    avatar: require("./assets/avatars/user3.png"),
  },
  {
    id: "4",
    icon: require("../resources/assets/icons/Calendar_proposal.svg"),
    title: "Complete your consultation summary",
    time: "5 minutes ago",
    message:
      "Please complete your consultation summary for the appointment with Liam Tran.",
    avatar: require("./assets/avatars/user4.png"),
  },
];

export {
  doctorAppointments,
  doctorConsultationRequests,
  doctorRequests,
  doctorUpcomingAppointments,
  notifications,
};
