import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";


export default function ScheduleScreen({ navigation }: any) {
  const [selected, setSelected] = useState("");

  return (
    <View style={styles.container}>
      {/* HEADER BACKGROUND */}
<View style={styles.headerBg} />

{/* BACK BUTTON */}
<TouchableOpacity
  style={styles.backBtn}
  onPress={() => navigation.goBack()}
>
  <Text style={styles.backArrow}>←</Text>
</TouchableOpacity>

{/* HEADER TITLE */}
<Text style={styles.headerTitle}>Choose Consultation</Text>


      {/* DOCTOR CARD */}
      <View style={styles.doctorCard}>
        <Image source={require("../assets/doctor.png")} style={styles.docImg} />
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.docName}>Dr. Prem</Text>
          <Text style={styles.docDept}>Male Fertility • Infertility</Text>
        </View>
      </View>

      {/* OPTIONS ROW */}
      <View style={styles.optionRow}>
        
        {/* PHONE CONSULTATION */}
        <TouchableOpacity
          style={styles.optionCard}
          onPress={() => setSelected("phone")}
        >
          <Text style={styles.optionTitle}>Phone Consultation</Text>
          <Text style={styles.optionPrice}>₹15/min</Text>
          <Text style={styles.optionSub}>20 min</Text>

          <View style={styles.checkboxContainer}>
  <View
    style={[
      styles.checkbox,
      selected === "phone" && styles.checkboxActive,
    ]}
  >
    {selected === "phone" && <Text style={styles.tick}>✔</Text>}
  </View>
</View>

        </TouchableOpacity>

        {/* VIDEO CONSULTATION */}
        <TouchableOpacity
          style={styles.optionCard}
          onPress={() => setSelected("video")}
        >
          <Text style={styles.optionTitle}>Video Consultation</Text>
          <Text style={styles.optionPrice}>₹35/min</Text>
          <Text style={styles.optionSub}>20 min</Text>

          <View style={styles.checkboxContainer}>
  <View
    style={[
      styles.checkbox,
      selected === "video" && styles.checkboxActive,
    ]}
  >
    {selected === "video" && <Text style={styles.tick}>✔</Text>}
  </View>
</View>




        </TouchableOpacity>
      </View>

      {/* CHAT CONSULTATION */}
      <TouchableOpacity
        style={styles.chatCard}
        onPress={() => setSelected("chat")}
      >
        <Text style={styles.optionTitle}>Chat Consultation</Text>
        <Text style={styles.optionPrice}>₹50</Text>
        <Text style={styles.optionSub}>30 conversation texts</Text>
        <Text style={styles.validText}>Valid: 72 hours</Text>

        <View style={styles.checkboxContainer}>
  <View
    style={[
      styles.checkbox,
      selected === "chat" && styles.checkboxActive,
    ]}
  >
    {selected === "chat" && <Text style={styles.tick}>✔</Text>}
  </View>
</View>

      </TouchableOpacity>

      {/* PROCEED BUTTON */}
<TouchableOpacity
  style={styles.proceedBtn}
  onPress={() => {
    if (!selected) {
      alert("Please select a consultation type first!");
    } else {
      navigation.navigate('ChooseDateScreen');
    }
  }}
>
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
  paddingBottom: 20,  
  borderBottomRightRadius: 40,
  position: "absolute",
  top: 0,
},

backBtn: {
  marginTop: 55,
  marginLeft: 20,
  zIndex: 10,
},

backArrow: {
  fontSize: 26,
  color: "#2E4128",
},

headerTitle: {
  fontSize: 28,
  fontWeight: "700",
  marginTop: 10,
  marginLeft: 20,
  color: "black",
  marginBottom: 50,
},


  doctorCard: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    marginTop: 10,
  },

  docImg: { width: 70, height: 70, borderRadius: 15 },
  docName: { fontSize: 18, fontWeight: "700", color: "#2E4128" },
  docDept: { color: "#444", marginTop: 4 },

  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 10,
  },

  optionCard: {
    width: "48%",
    borderWidth: 1,
    borderColor: "#D4D4D4",
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 8,
    backgroundColor: "#fff",
  },

  optionTitle: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 12,
    color: "#2E4128",
  },

  optionPrice: {
    textAlign: "center",
    marginTop: 5,
    fontSize: 24,
    fontWeight: "700",
    color: "#2C6E32",
  },

  optionSub: {
    textAlign: "center",
    marginTop: 2,
    color: "#555",
    fontSize: 12,
  },

  tick:{
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },

  checkboxContainer: {
    alignItems: "center",
    marginTop: 10,
  },

  checkbox: {
    width: 28,
    height: 28,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#999",
  },

  checkboxActive: {
    backgroundColor: "#2C6E32",
    borderColor: "#2C6E32",
  },

  chatCard: {
    marginTop: 20,
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: "#D4D4D4",
    borderRadius: 14,
    padding: 15,
    backgroundColor: "#fff",
  },

  validText: {
    textAlign: "center",
    marginTop: 4,
    color: "#444",
    fontSize: 12,
  },

  proceedBtn: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: "#2C6E32",
    width: "90%",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
  },

  proceedText: { color: "#fff", fontSize: 17, fontWeight: "700" },
});
