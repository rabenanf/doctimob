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

export { doctorAppointments, doctorConsultationRequests, doctorRequests };
