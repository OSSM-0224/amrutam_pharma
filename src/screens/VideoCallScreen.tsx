import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { ZegoUIKitPrebuiltCallWithInvitation } from "@zegocloud/zego-uikit-prebuilt-call-rn";

export default function VideoCallScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Video Calling</Text>

      <View style={styles.card}>
        <ZegoUIKitPrebuiltCallWithInvitation
        
          userID="101"
          userName="Om"
          callID="12345"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    paddingHorizontal: 20,
    paddingTop: 60,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 30,
  },

  card: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
});
