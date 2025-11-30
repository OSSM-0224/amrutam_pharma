import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  ToastAndroid,
} from "react-native";

const { width } = Dimensions.get("window");

type Props = {
  navigation: any;
};

export default function ChooseTimeSlot({ navigation }: Props) {
  const sessions = [
    { title: "Morning", slots: ["09:00 AM", "09:35 AM", "10:05 AM"] },
    { title: "Afternoon", slots: ["12:00 PM", "12:35 PM", "01:05 PM"] },
    { title: "Evening", slots: ["06:00 PM", "07:00 PM", "08:05 PM"] },
  ];

  const defaultSelected = "10:05 AM";
  const [selectedSlot, setSelectedSlot] = useState<string>(defaultSelected);

  const handleConfirm = () => {
    if (!selectedSlot) {
      ToastAndroid.show("Please select a time slot!", ToastAndroid.SHORT);
      return;
    }
    navigation.navigate("YourConcernScreen", { selectedSlot });

  };

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER BG */}
      <View style={styles.headerBg} />

      {/* BACK BUTTON */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      {/* HEADER TITLE */}
      <Text style={styles.headerTitle}>Choose Time Slot</Text>

      {/* 3-step horizontal progress bar (lines only) */}
      <View style={styles.progressRow}>
        {[0, 1, 2].map((step) => {
          const active = step === 0 || step === 1; 
          return (
            <View
              key={step}
              style={[
                styles.progressLineStep,
                active
                  ? styles.progressLineActive
                  : styles.progressLineInactive,
              ]}
            />
          );
        })}
      </View>

      {/* DOCTOR CARD */}
      <View style={styles.doctorCard}>
        <Image
          source={require("../assets/doctor.png")}
          style={styles.docImg}
          resizeMode="cover"
        />
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.docName}>Dr. Prem</Text>
          <Text style={styles.docDept}>Male-Female Infertility</Text>
          <Text style={styles.docExtra}>Chat Consultation - Free</Text>
        </View>
      </View>

      <Text style={styles.pickTitle}>Pick a time slot</Text>

      {/* Scrollable slots */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {sessions.map((session) => (
          <View key={session.title} style={styles.sessionBlock}>
            <Text style={styles.sessionTitle}>{session.title}</Text>
            <View style={styles.grid}>
              {session.slots.map((s) => {
                const normalized = s.replace(/\s+/g, " ").trim();
                const isActive = normalized === selectedSlot;

                return (
                  <TouchableOpacity
                    key={s}
                    style={[styles.slotCard, isActive && styles.slotCardActive]}
                    onPress={() => setSelectedSlot(normalized)}
                    activeOpacity={0.8}
                  >
                    <Text
                      style={[styles.slotText, isActive && styles.slotTextActive]}
                    >
                      {s}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        ))}

        <View style={{ height: 120 }} />
      </ScrollView>

      {/* Bottom confirm button */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.confirmBtn} onPress={handleConfirm}>
          <Text style={styles.confirmText}>Confirm Appointment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  // === HEADER ===
  headerBg: {
    height: 160,
    width: "100%",
    backgroundColor: "#DDE8D8",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    position: "absolute",
    top: 0,
  },

  backBtn: { marginTop: 55, marginLeft: 20, zIndex: 10 },
  backArrow: { fontSize: 26, color: "#2E4128" },
  headerTitle: {
    fontSize: 26,
    fontWeight: "700",
    marginTop: 12,
    marginLeft: 20,
    color: "#111827",
  },

  progressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 8,
  },
  progressLineStep: {
    flex: 1,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 4,
  },
  progressLineActive: { backgroundColor: "#2C6E32" },
  progressLineInactive: { backgroundColor: "#E5E7EB" },

  doctorCard: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginTop: 6,
  },
  docImg: { width: 64, height: 64, borderRadius: 12 },
  docName: { fontSize: 16, fontWeight: "700", color: "#2E4128" },
  docDept: { color: "#444", marginTop: 4 },
  docExtra: { color: "#6B7280", marginTop: 4, fontSize: 12 },

  pickTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 6,
    marginLeft: 20,
    color: "#111827",
  },

  scroll: { flex: 1, marginTop: 8, paddingHorizontal: 12 },
  scrollContent: { paddingBottom: 120 },
  sessionBlock: { marginTop: 12 },
  sessionTitle: { marginLeft: 6, marginBottom: 8, fontSize: 13, color: "#333", fontWeight: "600" },
  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", paddingHorizontal: 4 },
  slotCard: {
    width: (width - 48) / 3,
    height: 72,
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    marginBottom: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E6E7E9",
  },
  slotCardActive: { backgroundColor: "#2C6E32", borderColor: "#2C6E32" },
  slotText: { fontSize: 14, fontWeight: "600", color: "#111827" },
  slotTextActive: { color: "#fff" },

  bottomBar: {
    position: "absolute",
    bottom: 14,
    left: 12,
    right: 12,
    alignItems: "center",
  },
  confirmBtn: {
    backgroundColor: "#2C6E32",
    width: "100%",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  confirmText: { color: "#fff", fontWeight: "700", fontSize: 16 },
});
