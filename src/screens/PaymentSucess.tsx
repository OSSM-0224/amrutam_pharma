import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

type Props = {
  navigation: any;
};

export default function PaymentSuccess({ navigation }: Props) {
  return (
    <View style={styles.container}>
      {/* Doctor Image */}
      <Image
        source={require("../assets/doctor.png")}
        style={styles.doctorImage}
      />

      {/* Payment Info Container */}
      <View style={styles.paymentContainer}>
        <Image
          source={require("../assets/tick.png")}
          style={styles.tickImage}
        />
        <Text style={styles.paidText}>Paid ₹500</Text>
        <Text style={styles.successText}>Chat Consultation Booked Successfully</Text>

        {/* Balance Container */}
        <View style={styles.balanceContainer}>
          <Image
            source={require("../assets/pocket.png")}
            style={styles.pocketImage}
          />
          <Text style={styles.balanceLabel}>Available Balance</Text>
          <Text style={styles.balanceValue}>₹660</Text>
        </View>
      </View>

      {/* Check Bookings Button */}
      <TouchableOpacity
        style={styles.checkBtn}
        onPress={() => navigation.navigate("BookingScreen")}
      >
        <Text style={styles.checkBtnText}>Check Bookings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DCEFDC",
    alignItems: "center",
  },

  doctorImage: {
    width: 99,
    height: 100,
    borderRadius: 100,
    marginTop: 224,
  },

  paymentContainer: {
    width: 248,
    height: 203,
    alignItems: "center",
    gap: 2,
  },

  tickImage: {
    top: -30,
    width: 60,
    height: 60,
  },

  paidText: {
    fontSize: 24,
    top: -30,
    fontWeight: "400",
    fontFamily: "Nunito",
    textAlign: "center",
    color: "#3A643B"
  },

  successText: {
    fontSize: 14,
    top: -30,
    fontWeight: "400",
    fontFamily: "Nunito",
    textAlign: "center",
    color: "#3A643B",
    marginBottom: 12,
  },

  balanceContainer: {
    width: 95,
    height: 72,
    alignItems: "center",
    justifyContent: "center",
  },

  pocketImage: {
    width: 19,
    height: 15,
    position: "absolute",
    top: -30,
  },

  balanceLabel: {
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Nunito",
    textAlign: "center",
  },

  balanceValue: {
    fontSize: 32,
    fontWeight: "700",
    fontFamily: "Nunito",
    textAlign: "center",
  },

  checkBtn: {
    width: 328,
    height: 56,
    top: 200,
    backgroundColor: "#2C6E32",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },

  checkBtnText: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Nunito",
    color: "#fff",
  },
});
