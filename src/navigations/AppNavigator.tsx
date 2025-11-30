import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SelectConcernScreen from "../screens/SelectConcernScreen";
import ConsultDoctorScreen from "../screens/ConsultDoctorScreen";
import ScheduleScreen from "../screens/ScheduleScreen";
import VideoCallScreen from "../screens/VideoCallScreen";
import YourConcernScreen from "../screens/YourConcernScreen";
import BasicInfoScreen from "../screens/BasicInfoScreen";
import ChooseDateScreen from "../screens/ChooseDateScreen";
import ChooseTimeSlot from "../screens/ChooseTimeSlot";
import AppointmentConfirm from "../screens/AppointmentConfirm";
import PaymentSucess from "../screens/PaymentSucess";
import BookingScreen from "../screens/BookingScreen";
import CustomCallScreen from "../screens/CustomCallScreen";
import NoAnswerScreen from "../screens/NoAnswerScreen";
import CallEndedScreen from "../screens/CallEndedScreen";
import CallDisconnectedScreen from "../screens/CallDisconnectedScreen";
import AppointmentDetailsScreen from "../screens/AppointmentDetailsScreen";

export type RootStackParamList = {
  SelectConcern: undefined;
  ConsultDoctorScreen: undefined;
  ScheduleScreen: undefined;
  VideoCallScreen: undefined;
  YourConcernScreen: { selectedSlot: string };
  BasicInfoScreen: undefined;
  ChooseDateScreen: undefined;
  ChooseTimeSlot: { selectedDate: string };
  AppointmentConfirm: { selectedDate: string; selectedSlot: string };
  PaymentSucess: undefined;
  BookingScreen: undefined;
  CustomCallScreen: {
    userID: string;
    userName: string;
    callID: string;
  };
  NoAnswerScreen: {
    doctorName?: string;
    specialty?: string;
    balance?: number;
  };
  CallEndedScreen: {
    duration?: string;
    amountDeducted?: number;
    balance?: number;
  };
  CallDisconnectedScreen: {
    doctorName?: string;
    duration?: string;
    amountDeducted?: number;
    balance?: number;
    minRechargeAmount?: number;
  };
  AppointmentDetailsScreen: {
    doctorName?: string;
    appointmentId?: string;
    appointmentType?: string;
    appointmentFee?: string;
    duration?: string;
    appointmentDate?: string;
    appointmentTime?: string;
    bookingStatus?: string;
    routineStatus?: string;
    symptoms?: string;
    symptomsDescription?: string;
    severity?: string;
    symptomsDuration?: string;
    sleepPattern?: string;
    couponCode?: string;
    couponDiscount?: string;
    discountAmount?: string;
    bookedBy?: string;
    bookingDate?: string;
    bookingTime?: string;
    paymentDate?: string;
    paymentTime?: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SelectConcern" component={SelectConcernScreen} />
        <Stack.Screen name="ConsultDoctorScreen" component={ConsultDoctorScreen} />
        <Stack.Screen name="ScheduleScreen" component={ScheduleScreen} />
        <Stack.Screen name="VideoCallScreen" component={VideoCallScreen} />
        <Stack.Screen name="YourConcernScreen" component={YourConcernScreen} />
        <Stack.Screen name="BasicInfoScreen" component={BasicInfoScreen} />
        <Stack.Screen name="ChooseDateScreen" component={ChooseDateScreen} />
        <Stack.Screen name="ChooseTimeSlot" component={ChooseTimeSlot} />
        <Stack.Screen name="AppointmentConfirm" component={AppointmentConfirm} />
        <Stack.Screen name="PaymentSucess" component={PaymentSucess} />
        <Stack.Screen name="BookingScreen" component={BookingScreen} />
        <Stack.Screen name="CustomCallScreen" component={CustomCallScreen} />
        <Stack.Screen name="NoAnswerScreen" component={NoAnswerScreen} />
        <Stack.Screen name="CallEndedScreen" component={CallEndedScreen} />
        <Stack.Screen name="CallDisconnectedScreen" component={CallDisconnectedScreen} />
        <Stack.Screen name="AppointmentDetailsScreen" component={AppointmentDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}