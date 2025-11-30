import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
  ToastAndroid,
  Image,
} from "react-native";

export default function BasicInfoScreen({ navigation }: any) {
  const [gender, setGender] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const genderList = ["Male", "Female", "Prefer not to say"];

  const handleConfirm = () => {
    if (!gender) {
      ToastAndroid.show("Please select gender!", ToastAndroid.SHORT);
      return;
    }
    if (!age) {
      ToastAndroid.show("Please enter your age!", ToastAndroid.SHORT);
      return;
    }
    if (!height) {
      ToastAndroid.show("Please enter your height!", ToastAndroid.SHORT);
      return;
    }
    if (!weight) {
      ToastAndroid.show("Please enter your weight!", ToastAndroid.SHORT);
      return;
    }

    // ✅ Navigate to AppointmentConfirm screen with all details
    navigation.navigate("AppointmentConfirm", {
      gender,
      age,
      height,
      weight,
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerBg} />
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Basic Info</Text>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Doctor Card */}
        <View style={styles.doctorCard}>
          <Image
            source={require("../assets/doctor.png")}
            style={styles.docImg}
          />
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.docName}>Dr. Prem</Text>
            <Text style={styles.docDept}>Gynecology + 2 others</Text>
            <Text style={styles.docRate}>Instant Call - ₹ 15/min</Text>
          </View>
        </View>

        <Text style={styles.infoLabel}>Please confirm your basic information</Text>

        {/* Gender Dropdown */}
        <Text style={styles.label}>Gender</Text>
        <TouchableOpacity
          style={styles.dropdownBox}
          onPress={() => setDropdownOpen(!dropdownOpen)}
        >
          <Text style={[styles.dropdownText, { color: gender ? "#111" : "#999" }]}>
            {gender || "Select Gender"}
          </Text>
          <Text style={styles.dropdownArrow}>⌄</Text>
        </TouchableOpacity>
        {dropdownOpen && (
          <View style={styles.dropdownList}>
            {genderList.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.dropdownItem}
                onPress={() => {
                  setGender(item);
                  setDropdownOpen(false);
                }}
              >
                <Text style={styles.dropdownItemText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Age */}
        <Text style={styles.label}>Age</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter your age"
          keyboardType="numeric"
          value={age}
          onChangeText={setAge}
        />

        {/* Height */}
        <Text style={styles.label}>Height</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter your height (e.g., 170 cm)"
          value={height}
          onChangeText={setHeight}
        />

        {/* Weight */}
        <Text style={styles.label}>Weight</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter your weight (e.g., 65 kg)"
          value={weight}
          onChangeText={setWeight}
        />
      </ScrollView>

      {/* Confirm Button */}
      <TouchableOpacity style={styles.confirmBtn} onPress={handleConfirm}>
        <Text style={styles.confirmText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  headerBg: {
    height: 160,
    width: "100%",
    backgroundColor: "#DDE8D8",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    position: "absolute",
  },
  backBtn: { marginTop: 50, marginLeft: 20, zIndex: 10 },
  backArrow: { fontSize: 26, color: "#2E4128" },
  headerTitle: { fontSize: 28, fontWeight: "700", marginTop: 10, marginLeft: 20, color: "#111" },

  doctorCard: {
    marginTop: 25,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderRadius: 12,
    alignItems: "center",
    marginHorizontal: 15,
  },
  docImg: { width: 60, height: 60, borderRadius: 12 },
  docName: { fontSize: 18, fontWeight: "700", color: "#2E4128" },
  docDept: { marginTop: 3, color: "#444" },
  docRate: { marginTop: 3, color: "#2C6E32", fontWeight: "600" },

  infoLabel: { marginLeft: 20, marginTop: 20, fontWeight: "600", color: "#333", fontSize: 15 },
  label: { marginTop: 20, marginLeft: 20, fontWeight: "600", color: "#333", fontSize: 15 },

  dropdownBox: {
    borderWidth: 1,
    borderColor: "#D4D4D4",
    marginHorizontal: 18,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  dropdownText: { fontSize: 16 },
  dropdownArrow: { fontSize: 22, color: "#666" },
  dropdownList: {
    marginHorizontal: 18,
    borderWidth: 1,
    borderColor: "#D4D4D4",
    borderRadius: 12,
    marginTop: 5,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  dropdownItem: { paddingVertical: 12, paddingHorizontal: 15, borderBottomWidth: 1, borderColor: "#eee" },
  dropdownItemText: { fontSize: 15, color: "#333" },

  inputBox: {
    borderWidth: 1,
    borderColor: "#D4D4D4",
    marginHorizontal: 18,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 12,
    marginTop: 8,
    fontSize: 16,
  },

  confirmBtn: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "#2C6E32",
    width: "90%",
    alignSelf: "center",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  confirmText: { color: "#fff", fontSize: 17, fontWeight: "700" },
});
