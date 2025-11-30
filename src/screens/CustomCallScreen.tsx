import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import ZegoUIKitPrebuiltCallService from "@zegocloud/zego-uikit-prebuilt-call-rn";
import * as ZIM from "zego-zim-react-native";
import * as ZPNs from "zego-zpns-react-native";

// 🔥 Your Zego Credentials
const APP_ID = 120795159; // Your actual APP_ID
const APP_SIGN = "9f5f82037cae2593582dfe9fda28ea9e13620c85ee32dcb76a0df6e3beb0b950"; // Add your actual APP_SIGN here

export default function CustomCallScreen({ route, navigation }) {
  const { userID, userName, callID } = route?.params || {};
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeaker, setIsSpeaker] = useState(true);
  const [callDuration, setCallDuration] = useState(0);
  const [isCallActive, setIsCallActive] = useState(false);

  useEffect(() => {
    // Initialize Zego Service
    initializeZegoCall();

    // Start call timer
    const timer = setInterval(() => {
      setCallDuration(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      // Cleanup Zego on unmount
      cleanupCall();
    };
  }, []);

  const initializeZegoCall = async () => {
    try {
      console.log("🔄 Initializing Zego Call...");
      
      // Initialize with plugins - Remove ringtone config to avoid errors
      await ZegoUIKitPrebuiltCallService.init(
        APP_ID,
        APP_SIGN,
        userID,
        userName,
        [ZIM, ZPNs],
        {
          // ❌ Remove ringtoneConfig to avoid errors
          requireConfig: (data) => {
            return {
              turnOnCameraWhenJoining: false,
              turnOnMicrophoneWhenJoining: true,
              useSpeakerWhenJoining: true,
              audioVideoViewConfig: {
                showSoundWavesInAudioMode: true,
              },
              topMenuBarConfig: {
                isVisible: false, // Hide default top bar
              },
              bottomMenuBarConfig: {
                buttons: [], // Hide default buttons, we have custom ones
              },
              onHangUp: () => {
                console.log("📞 Call Ended");
                setIsCallActive(false);
                navigation.goBack();
              },
            };
          },
        }
      );

      console.log("✅ Zego Service Initialized!");
      setIsCallActive(true);
      
    } catch (error) {
      console.error("❌ Zego Init Error:", error);
      Alert.alert("Call Error", "Failed to initialize call: " + error.message);
    }
  };

  const cleanupCall = async () => {
    try {
      await ZegoUIKitPrebuiltCallService.uninit();
      console.log("🧹 Zego Cleanup Done");
    } catch (error) {
      console.error("Cleanup error:", error);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    console.log("🎤 Mute toggled:", !isMuted);
    // You can use ZegoUIKit APIs here if available
  };

  const toggleSpeaker = () => {
    setIsSpeaker(!isSpeaker);
    console.log("🔊 Speaker toggled:", !isSpeaker);
  };

  const endCall = () => {
    Alert.alert(
      "End Call",
      "Are you sure you want to end this call?",
      [
        { text: "Cancel", style: "cancel" },
        { 
          text: "End Call", 
          style: "destructive",
          onPress: async () => {
            await cleanupCall();
            navigation.goBack();
          }
        }
      ]
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={["rgba(58,100,60,0.85)", "#FFF7E2", "rgba(58,100,60,0.85)"]}
        locations={[0, 0.5, 1]}
        start={{ x: 0.2, y: 0 }}
        end={{ x: 0.8, y: 1 }}
        style={styles.bg}
      >
        <View style={styles.whiteOverlay} />

        {/* CALL STATUS */}
        <View style={styles.statusContainer}>
          <View style={[styles.statusDot, isCallActive && styles.statusDotActive]} />
          <Text style={styles.ringingText}>
            {isCallActive ? "Connected" : "Connecting..."}
          </Text>
          {isCallActive && <Text style={styles.timerText}>{formatTime(callDuration)}</Text>}
        </View>

        {/* DOCTOR PICTURE */}
        <Image
          source={require("../assets/doctor.png")}
          style={styles.doctorImg}
        />

        {/* USER PREVIEW */}
        <View style={styles.userPreview}>
          <View style={styles.userCircle}>
            <Text style={{ fontSize: 24, fontWeight: "700", color: "#3A643C" }}>JP</Text>
          </View>
          <Text style={styles.userNameSmall}>You</Text>
        </View>

        {/* CALL CONTROLLERS */}
        <View style={styles.controlsRow}>
          {/* Mute/Unmute Toggle */}
          <TouchableOpacity
            style={[styles.controlBtn, isMuted && styles.controlBtnActive]}
            onPress={toggleMute}
            activeOpacity={0.7}
          >
            <Image 
              source={isMuted ? require("../assets/mute.png") : require("../assets/mic.png")} 
              style={styles.icon} 
            />
            <Text style={styles.controlLabel}>
              {isMuted ? "Unmute" : "Mute"}
            </Text>
          </TouchableOpacity>

          {/* Speaker */}
          <TouchableOpacity
            style={[styles.controlBtnWhite, isSpeaker && styles.controlBtnWhiteActive]}
            onPress={toggleSpeaker}
            activeOpacity={0.7}
          >
            <Image 
              source={require("../assets/speaker.png")} 
              style={isSpeaker ? styles.iconBlack : styles.icon} 
            />
            <Text style={[styles.controlLabel, { color: isSpeaker ? "#000" : "#fff" }]}>
              Speaker
            </Text>
          </TouchableOpacity>

          {/* End Call */}
          <TouchableOpacity
            style={styles.controlBtnEnd}
            onPress={endCall}
            activeOpacity={0.7}
          >
            <Image source={require("../assets/end.png")} style={styles.icon} />
            <Text style={styles.controlLabel}>End</Text>
          </TouchableOpacity>
        </View>

        {/* NAME TAG */}
        <View style={styles.nameTag}>
          <Text style={styles.nameText}>Dr. Prem</Text>
          <View style={[styles.micIndicator, !isMuted && styles.micIndicatorActive]}>
            <Image
              source={require("../assets/mic.png")}
              style={{ width: 16, height: 16, tintColor: "#fff" }}
            />
          </View>
        </View>

        {/* DEBUG INFO - Remove in production */}
        {__DEV__ && (
          <View style={styles.debugContainer}>
            <Text style={styles.debugText}>Call ID: {callID || "N/A"}</Text>
            <Text style={styles.debugText}>User: {userName || "Guest"} ({userID})</Text>
            <Text style={styles.debugText}>
              Status: {isCallActive ? "🟢 Active" : "🟡 Initializing"}
            </Text>
          </View>
        )}
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  whiteOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255,255,255,0.15)",
  },
  statusContainer: {
    position: "absolute",
    top: 60,
    alignItems: "center",
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#FFA500",
    marginBottom: 8,
  },
  statusDotActive: {
    backgroundColor: "#00FF00",
  },
  ringingText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  timerText: {
    color: "#fff",
    fontSize: 16,
    marginTop: 5,
    fontWeight: "500",
  },
  doctorImg: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginTop: -30,
    borderWidth: 4,
    borderColor: "rgba(255,255,255,0.3)",
  },
  userPreview: {
    position: "absolute",
    bottom: 200,
    right: 30,
    width: 100,
    height: 130,
    backgroundColor: "#FFF",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  userCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FFEEDD",
    justifyContent: "center",
    alignItems: "center",
  },
  userNameSmall: {
    marginTop: 10,
    fontWeight: "700",
    color: "#333",
    fontSize: 14,
  },
  controlsRow: {
    flexDirection: "row",
    position: "absolute",
    bottom: 110,
    width: "85%",
    justifyContent: "space-around",
  },
  controlBtn: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  controlBtnActive: {
    backgroundColor: "#555",
  },
  controlBtnWhite: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  controlBtnWhiteActive: {
    backgroundColor: "#f0f0f0",
  },
  controlBtnEnd: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#ff3b30",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#ff3b30",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
    elevation: 5,
  },
  controlLabel: {
    color: "#fff",
    fontSize: 10,
    marginTop: 4,
    fontWeight: "600",
  },
  icon: { 
    width: 28, 
    height: 28, 
    tintColor: "#fff" 
  },
  iconBlack: { 
    width: 28, 
    height: 28 
  },
  nameTag: {
    position: "absolute",
    bottom: 50,
    paddingHorizontal: 22,
    paddingVertical: 12,
    backgroundColor: "#00000080",
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  nameText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  micIndicator: {
    marginLeft: 10,
    opacity: 0.5,
  },
  micIndicatorActive: {
    opacity: 1,
  },
  debugContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: 8,
    borderRadius: 8,
  },
  debugText: {
    color: "#fff",
    fontSize: 10,
    fontFamily: "monospace",
  },
});