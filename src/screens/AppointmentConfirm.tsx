import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

type Props = {
  route: any;
  navigation: any;
};

export default function AppointmentConfirm({ route, navigation }: Props) {
  const {
    expert = "Dr. Prem",
    appointmentDate = "2025-11-28",
    appointmentTime = "10:00 AM",
    consultationType = "Video Call",
    walletBalance = "₹500",
    consultationFee = "₹150",
  } = route?.params || {};

  const appointmentDetails = [
    { label: "Expert", value: expert },
    { label: "Appointment Date", value: appointmentDate },
    { label: "Appointment Time", value: appointmentTime },
    { label: "Consultation Type", value: consultationType },
    { label: "Current Wallet Balance", value: walletBalance },
    { label: "Consultation Fee", value: consultationFee },
  ];

  return (
    <View style={styles.container}>
      {/* Main Container */}
      <View style={styles.mainContainer}>
        {/* Doctor Confirmation */}
        <View style={styles.doctorContainer}>
          <Image
            source={require("../assets/doctor.png")}
            style={styles.doctorImage}
          />
          <Image
            source={require("../assets/tick.png")}
            style={styles.tickImage}
          />
          <Text style={styles.confirmTitle}>Appointment Confirmed</Text>
          <Text style={styles.confirmSubtitle}>
            Thank you for choosing our Experts to help guide you
          </Text>
        </View>

        {/* Details Container */}
        <View style={styles.detailsOuterContainer}>
          <View style={styles.detailsInnerContainer}>
            {appointmentDetails.map((item, index) => (
              <View key={index} style={styles.detailRow}>
                <Text style={styles.detailLabel}>{item.label}</Text>
                <Text style={styles.detailValue}>{item.value}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <TouchableOpacity
  style={styles.finishBtn}
  onPress={() => navigation.navigate("PaymentSucess")}
>
  <Text style={styles.finishText}>Make Payment</Text>
</TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", alignItems: "center" },

  mainContainer: {
    width: 328,
    height: 650, // bada height taki sab content fit ho
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "#EAF2EA",
    marginTop: 65,
    alignItems: "center",
    paddingTop: 16,
  },

  doctorContainer: {
    width: 328,
    height: 284,
    borderRadius: 20,
    alignItems: "center",
    position: "relative",
    marginBottom: 16,
  },

  doctorImage: {
    width: 120,
    height: 120,
    borderRadius: 33.6,
    position: "absolute",
    top: 22,
    left: 104,
  },

  tickImage: {
    width: 40,
    height: 40,
    position: "absolute",
    top: 128,
    left: 144.5,
  },

  confirmTitle: {
    position: "absolute",
    top: 182,
    left: 32,
    width: 265,
    height: 32,
    fontFamily: "Nunito",
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: -0.01,
    textAlign: "center",
    color: "#111",
  },

  confirmSubtitle: {
    position: "absolute",
    top: 218,
    left: 12,
    width: 304,
    height: 48,
    fontFamily: "Nunito",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.01,
    textAlign: "center",
    color: "#444",
  },

  detailsOuterContainer: {
    width: 328,
    height: 322,
    borderRadius: 12,
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 4,
    paddingRight: 4,
    alignItems: "center",
  },

  detailsInnerContainer: {
    width: 320,
    height: 274,
    justifyContent: "space-around",
  },

  detailRow: {
    width: 320,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 12,
    paddingRight: 12,
    height: 24,
    alignItems: "center",
  },

  detailLabel: {
    fontSize: 16,
    fontWeight: "400",
    color: "#646665",
  },

  detailValue: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000000ff",
  },

  finishBtn: {
    width: 328,
    height: 56,
    borderRadius: 12,
    backgroundColor: "#2C6E32",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },

  finishText: { color: "#fff", fontSize: 16, fontWeight: "700" },
});
