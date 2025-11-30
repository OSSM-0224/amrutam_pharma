import React, { useState } from "react";
import Toast from "react-native-simple-toast";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  //Dimensions,
  SafeAreaView,
} from "react-native";

// const { width } = Dimensions.get("window"); // remove this line



type Props = {
  navigation?: any;
};

export default function ChooseDateScreen({ navigation }: Props) {
  const start = new Date(2025, 1, 6);
  const total = 27;

  const dates = Array.from({ length: total }).map((_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    const day = String(d.getDate()).padStart(2, "0");
    const monthShort = d.toLocaleString("en-US", { month: "short" });
    const monthLong = d.toLocaleString("en-US", { month: "long" });
    const year = d.getFullYear();
    return {
      id: i.toString(),
      label: `${day} ${monthShort}`,
      fullLabel: `${day} ${monthLong} ${year}`,
      dateObj: d,
    };
  });

  const [selectedId, setSelectedId] = useState<string>("0");
  const selectedItem = dates.find((x) => x.id === selectedId) || null;

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER BG */}
      <View style={styles.headerBg} />

      {/* BACK BUTTON */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation?.navigate("ScheduleScreen")}
      >
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      {/* HEADER TITLE */}
      <Text style={styles.headerTitle}>Choose Date</Text>

      {/* 3-step horizontal progress bar */}
      <View style={styles.progressRow}>
        {[0, 1, 2].map((step) => {
          const active = step === 0; // initial active step
          return (
            <View
              key={step}
              style={[
                styles.progressLineStep,
                active ? styles.progressLineActive : styles.progressLineInactive,
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
          <Text style={styles.docDept}>Male Fertility • Infertility</Text>
        </View>
      </View>

      {/* Title */}
      <Text style={styles.pickTitle}>Pick Appointment Date</Text>

      {/* Scrollable date grid */}
      <ScrollView
        style={styles.gridWrap}
        contentContainerStyle={styles.gridContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.grid}>
          {dates.map((item) => {
            const active = item.id === selectedId;
            return (
              <TouchableOpacity
                key={item.id}
                style={[styles.dateCard, active && styles.dateCardActive]}
                onPress={() => setSelectedId(item.id)}
                activeOpacity={0.8}
              >
                <Text style={[styles.dateDay, active && styles.dateDayActive]}>
                  {item.label.split(" ")[0]}
                </Text>
                <Text style={[styles.dateMonth, active && styles.dateMonthActive]}>
                  {item.label.split(" ")[1]}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      {/* Bottom selected date section */}
      <View style={styles.bottomBar}>
        <View style={styles.bottomDateRow}>
          <Image
            source={require("../assets/calendar.png")}
            style={styles.calIcon}
          />
          <Text style={styles.selectedDateText}>
            {selectedItem ? selectedItem.fullLabel : "Select a date"}
          </Text>
        </View>

        {/* Confirm button */}
        <TouchableOpacity
          style={styles.confirmBtnFull}
          onPress={() => {
            if (!selectedItem) {
              Toast.show("Please select a date first!", Toast.SHORT);
            } else {
              console.log("Selected date:", selectedItem.fullLabel);
              navigation?.navigate("ChooseTimeSlot", {
                selectedDate: selectedItem.fullLabel,
              });
            }
          }}
        >
          <Text style={styles.confirmText}>CONFIRM DATE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// -------------------------
// Styles
// -------------------------
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

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
  headerTitle: { fontSize: 26, fontWeight: "700", marginTop: 12, marginLeft: 20, color: "#111827" },

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

  pickTitle: { fontSize: 16, fontWeight: "700", marginTop: 6, marginLeft: 20, color: "#111827" },

  gridWrap: { flex: 1, marginTop: 8, paddingHorizontal: 12 },
  gridContent: { paddingBottom: 180 }, // extra space for bottom bar
  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },

  dateCard: {
    width: 90,
    height: 90,
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    marginBottom: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E6E7E9",
  },
  dateCardActive: { backgroundColor: "#2C6E32", borderColor: "#2C6E32" },
  dateDay: { fontSize: 16, fontWeight: "600", color: "#111827" },
  dateDayActive: { color: "#fff" },
  dateMonth: { fontSize: 14, color: "#666" },
  dateMonthActive: { color: "#fff" },

  // -------------------------
  // Bottom bar
  // -------------------------
  bottomBar: {
    position: "absolute",
    bottom: 10,
    left: 12,
    right: 12,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },

  bottomDateRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  calIcon: { width: 32, height: 32, marginRight: 10 },

  selectedDateText: {
    fontWeight: "700",
    color: "#2C6E32",
    fontSize: 16,
    textAlign: "center",
  },

  confirmBtnFull: {
    backgroundColor: "#2C6E32",
    paddingVertical: 14,
    width: "100%",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  confirmText: { color: "#fff", fontWeight: "700", fontSize: 16 },
});
