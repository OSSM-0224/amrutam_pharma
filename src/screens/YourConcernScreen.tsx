import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  ToastAndroid,
} from "react-native";
import Slider from "@react-native-community/slider";

export default function YourConcernScreen({ navigation, route }: any) {
  const selectedSlot = route?.params?.selectedSlot || "Not Selected";

  // === States ===
  const [concern, setConcern] = useState(""); // empty by default
  const [severity, setSeverity] = useState(50);
  const [duration, setDuration] = useState("28");
  const [durationType, setDurationType] = useState("Days");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const concernList = ["Diabetes", "Fever", "Headache", "Pain", "Allergy"];

  const handleProceed = () => {
    if (!concern) {
      ToastAndroid.show("Please select your concern!", ToastAndroid.SHORT);
      return;
    }
    navigation.navigate("BasicInfoScreen", {
      concern,
      severity,
      duration,
      durationType,
      selectedSlot,
    });
  };

  return (
    <View style={styles.container}>
      {/* HEADER BG */}
      <View style={styles.headerBg} />

      {/* BACK BUTTON */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      {/* TITLE */}
      <Text style={styles.headerTitle}>Your Concern</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* DOCTOR CARD */}
        <View style={styles.doctorCard}>
          <Image source={require("../assets/doctor.png")} style={styles.docImg} />
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.docName}>Dr. Prem</Text>
            <Text style={styles.docDept}>Gynecology + 2 others</Text>
            <Text style={styles.docRate}>Instant Call - ₹ 15/min</Text>
          </View>
        </View>

        {/* Selected Slot Display */}
        <Text style={[styles.label, { marginTop: 10 }]}>
          Selected Time Slot: {selectedSlot}
        </Text>

        {/* Concern Dropdown */}
        <TouchableOpacity
          onPress={() => setDropdownOpen(!dropdownOpen)}
          style={styles.dropdownBox}
        >
          <Text
            style={[
              styles.dropdownText,
              { color: concern ? "#111" : "#666" },
            ]}
          >
            {concern ? concern : "Please select a concern"}
          </Text>
          <Text style={styles.dropdownArrow}>⌄</Text>
        </TouchableOpacity>

        {dropdownOpen && (
          <View style={styles.dropdownList}>
            {concernList.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.dropdownItem}
                onPress={() => {
                  setConcern(item);
                  setDropdownOpen(false);
                }}
              >
                <Text style={styles.dropdownItemText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Severity */}
        <Text style={styles.label}>Select severity of your concern</Text>
        <Slider
          style={{ width: "92%", alignSelf: "center" }}
          minimumValue={0}
          maximumValue={100}
          value={severity}
          onValueChange={setSeverity}
          minimumTrackTintColor="#2C6E32"
          maximumTrackTintColor="#ccc"
          thumbTintColor="#2C6E32"
        />
        <View style={styles.severityRow}>
          <Text style={styles.severityText}>Mild</Text>
          <Text style={[styles.severityText, styles.activeSeverity]}>Moderate</Text>
          <Text style={styles.severityText}>Severe</Text>
        </View>

        {/* Duration Input */}
        <Text style={[styles.label, { marginTop: 20 }]}>
          How long have you been facing?
        </Text>
        <View style={styles.durationBox}>
          <TextInput
            value={duration}
            onChangeText={setDuration}
            keyboardType="numeric"
            style={styles.durationInput}
          />
          <TouchableOpacity onPress={() => console.log("open small dropdown")}>
            <Text style={styles.dropdownArrow}>⌄</Text>
          </TouchableOpacity>
        </View>

        {/* Duration Type */}
        <View style={styles.durationRow}>
          {["Days", "Weeks", "Months", "Year"].map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => setDurationType(item)}
              style={styles.durationOption}
            >
              <View
                style={[
                  styles.radioOuter,
                  durationType === item && styles.radioOuterActive,
                ]}
              >
                {durationType === item && <View style={styles.radioInner} />}
              </View>
              <Text style={styles.durationText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* PROCEED BUTTON */}
      <TouchableOpacity style={styles.proceedBtn} onPress={handleProceed}>
        <Text style={styles.proceedText}>PROCEED</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  headerBg: {
    height: 180,
    width: "100%",
    backgroundColor: "#DDE8D8",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    position: "absolute",
  },
  backBtn: { marginTop: 55, marginLeft: 20, zIndex: 10 },
  backArrow: { fontSize: 26, color: "#2E4128" },
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    marginTop: 10,
    marginLeft: 20,
    color: "black",
  },
  doctorCard: {
    marginTop: 30,
    flexDirection: "row",
    padding: 25,
    alignItems: "center",
  },
  docImg: { width: 60, height: 60, borderRadius: 15 },
  docName: { fontSize: 18, fontWeight: "700", color: "#2E4128" },
  docDept: { marginTop: 3, color: "#444" },
  docRate: { marginTop: 3, color: "#2C6E32", fontWeight: "600" },
  label: { marginTop: 20, marginLeft: 20, fontWeight: "600", color: "#333" },
  dropdownBox: {
    borderWidth: 1,
    borderColor: "#D4D4D4",
    marginHorizontal: 15,
    marginTop: 15,
    padding: 15,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dropdownText: { fontSize: 14 },
  dropdownArrow: { fontSize: 24, color: "#666" },
  dropdownList: {
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: "#D4D4D4",
    borderRadius: 12,
    marginTop: 5,
    backgroundColor: "#fff",
  },
  dropdownItem: { padding: 12, borderBottomWidth: 1, borderColor: "#eee" },
  dropdownItemText: { fontSize: 15, color: "#333" },
  severityRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 25,
    marginTop: 10,
  },
  severityText: { color: "#666" },
  activeSeverity: { color: "#2C6E32", fontWeight: "700" },
  durationBox: {
    borderWidth: 1,
    borderColor: "#D4D4D4",
    marginHorizontal: 15,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  durationInput: { fontSize: 16, width: "80%" },
  durationRow: { flexDirection: "row", justifyContent: "space-around", marginTop: 15 },
  durationOption: { flexDirection: "row", alignItems: "center" },
  radioOuter: {
    width: 18,
    height: 18,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#999",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 6,
  },
  radioOuterActive: { borderColor: "#2C6E32" },
  radioInner: { width: 10, height: 10, backgroundColor: "#2C6E32", borderRadius: 10 },
  durationText: { color: "#333", fontSize: 14 },
  proceedBtn: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "#2C6E32",
    width: "90%",
    alignSelf: "center",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  proceedText: { color: "#fff", fontSize: 17, fontWeight: "700" },
});
