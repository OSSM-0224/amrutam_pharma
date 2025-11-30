import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

export default function BookingScreen({ navigation }: any) {
  const [activeTab, setActiveTab] = useState("Appointments");
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerBg}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>My Bookings</Text>
      </View>

      {/* CONTENT */}
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* TOP TABS */}
        <View style={styles.topTabs}>
          <TouchableOpacity
            style={[
              styles.tabBtn,
              activeTab === "Appointments" && styles.activeTabBtn,
            ]}
            onPress={() => setActiveTab("Appointments")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "Appointments" && styles.activeTabText,
              ]}
            >
              Appointments
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tabBtn,
              activeTab === "Orders" && styles.activeTabBtn,
            ]}
            onPress={() => setActiveTab("Orders")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "Orders" && styles.activeTabText,
              ]}
            >
              Orders
            </Text>
          </TouchableOpacity>
        </View>

        {/* FILTER */}
        <View style={styles.filterFrame}>
          <Text style={styles.filterText}>Filter Appointments</Text>
          <Image
            source={require("../assets/filter1.png")}
            style={styles.filterIcon}
          />
        </View>

        {/* BOOKING CARDS */}
        <View style={styles.cardsContainer}>
          {[1, 2].map((item, index) => (
            <View key={index} style={styles.bookingCard}>
              
              {/* TOP ROW */}
              <View style={styles.topRow}>
                
                <View style={{ flex: 1 }}>

                  <Text style={styles.docName}>Dr. Prem</Text>

                  <View style={{ 
                    flexDirection: "row", 
                    alignItems: "center", 
                    marginTop: 4
                  }}>
                    
                    <Text style={styles.docSpec}>Orthodontist</Text>

                    <View style={styles.statusTag}>
                      <Text style={styles.statusText}>Upcoming</Text>
                    </View>

                  </View>
                </View>

                {/* DOC IMAGE RIGHT SIDE */}
                <Image
                  source={require("../assets/doctor.png")}
                  style={styles.docPhoto}
                />
              </View>

              {/* DATE + TIME */}
              <View style={styles.timeRow}>
                <View style={styles.rowLeft}>
                  <Image
                    source={require("../assets/calendar.png")}
                    style={styles.iconSmall}
                  />
                  <Text style={styles.dateText}>Tuesday, 13/09/2023</Text>
                </View>

                <View style={styles.rowLeft}>
                  <Image
                    source={require("../assets/clock.png")}
                    style={styles.iconSmall}
                  />
                  <Text style={styles.dateText}>10:30 AM</Text>
                </View>
              </View>

              {/* ACTION BUTTONS */}
              <View style={styles.actionRow}>
                
                {/* ⭐ UPDATED: VIEW DETAILS → AppointmentDetailsScreen */}
                <TouchableOpacity
                  style={styles.viewDetailsBtn}
                  onPress={() =>
                    navigation.navigate("AppointmentDetailsScreen", {
                      id: index + 1,
                    })
                  }
                >
                  <Text style={styles.viewText}>View Details</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.startCallBtn}
                  onPress={() => setShowDisclaimer(true)}
                >
                  <Text style={styles.startCallText}>Start Call</Text>
                </TouchableOpacity>

              </View>

              {/* PRESCRIPTION BOX */}
              <TouchableOpacity style={styles.prescriptionBox}>
                <View>
                  <Text style={styles.prescriptionTitle}>Check Prescription</Text>
                  <Text style={styles.prescriptionSub}>
                    Dr. Deepa has suggested some solution
                  </Text>
                </View>

                <Text style={styles.arrowIcon}>›</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>

      {/* DISCLAIMER POPUP */}
      {showDisclaimer && (
        <View style={styles.modalOverlay}>
          <View style={styles.disclaimerBox}>
            <View style={styles.topLine} />

            <View style={styles.disclaimerContent}>
              <Text style={styles.disclaimerTitle}>Disclaimer</Text>

              <Text style={styles.disclaimerMsg}>
                By continuing, you consent to this call being recorded for
                quality and support purposes.{" "}
                <Text style={styles.disclaimerBold}>
                  Read Terms & Conditions...
                </Text>
              </Text>
            </View>

            <View style={styles.disclaimerButtons}>
              <TouchableOpacity
                style={styles.continueBtn}
                onPress={() => {
                  setShowDisclaimer(false);
                  navigation.navigate("CustomCallScreen", {
                    userID: "101",
                    userName: "Om",
                    callID: "prem123",
                  });
                }}
              >
                <Text style={styles.continueText}>Continue Call</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => setShowDisclaimer(false)}
              >
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  headerBg: {
    height: 150,
    backgroundColor: "#EAF2EA",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingTop: 40,
    paddingLeft: 16,
    justifyContent: "flex-end",
    paddingBottom: 20,
  },

  backBtn: { position: "absolute", top: 45, left: 16 },
  backArrow: { fontSize: 26, color: "#2E4128" },

  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0C140C",
  },

  /* TABS */
  topTabs: {
    flexDirection: "row",
    width: "88%",
    alignSelf: "center",
    marginTop: 18,
    backgroundColor: "#F2F4F4",
    padding: 4,
    borderRadius: 10,
  },

  tabBtn: {
    width: "50%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  activeTabBtn: {
    backgroundColor: "#0D160E",
  },

  tabText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },

  activeTabText: {
    color: "#fff",
  },

  /* FILTER */
  filterFrame: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 12,
    marginRight: 20,
  },
  filterText: { fontSize: 15, fontWeight: "700", marginRight: 8 },
  filterIcon: { width: 15, height: 15 },

  /* CARD */
  cardsContainer: {
    paddingHorizontal: 16,
    paddingTop: 15,
  },

  bookingCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E6E7E9",
    padding: 14,
    marginBottom: 16,
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  docPhoto: {
    width: 52,
    height: 55,
    borderRadius: 10,
  },

  docName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
  },

  docSpec: {
    fontSize: 12,
    marginTop: 2,
    color: "#666",
  },

  statusTag: {
    marginTop: 2,
    backgroundColor: "#FDEAD2",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 50,
    alignSelf: "flex-start",
  },

  statusText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#B87015",
  },

  timeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14,
  },

  rowLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  iconSmall: { width: 16, height: 16 },

  dateText: { fontSize: 12, color: "#444" },

  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
  },

  viewDetailsBtn: {
    width: 140,
    height: 40,
    backgroundColor: "#3A643B",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  viewText: { color: "#fff", fontSize: 14, fontWeight: "700" },

  startCallBtn: {
    width: 140,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#3A643C",
    justifyContent: "center",
    alignItems: "center",
  },

  startCallText: {
    color: "#3A643C",
    fontSize: 14,
    fontWeight: "600",
  },

  prescriptionBox: {
    marginTop: 18,
    backgroundColor: "#CBBEDA80",
    borderRadius: 8,
    padding: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  prescriptionTitle: { fontSize: 14, fontWeight: "700" },
  prescriptionSub: { fontSize: 12, color: "#555", marginTop: 3 },

  arrowIcon: {
    fontSize: 30,
    marginRight: 5,
    color: "#2D2D2D",
  },

  /* MODAL */
  modalOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },

  disclaimerBox: {
    width: "100%",
    height: 290,
    backgroundColor: "#fff",
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    paddingHorizontal: 22,
    paddingTop: 18,
    paddingBottom: 26,
  },

  topLine: {
    width: 40,
    height: 4,
    backgroundColor: "#ccc",
    alignSelf: "center",
    borderRadius: 2,
    marginBottom: 12,
  },

  disclaimerContent: {
    alignItems: "center",
    marginBottom: 20,
  },

  disclaimerTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#2E2F2E",
    textAlign: "center",
    marginBottom: 10,
  },

  disclaimerMsg: {
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 20,
    color: "#444",
    width: 260,
  },

  disclaimerBold: {
    fontWeight: "700",
    color: "#000",
  },

  disclaimerButtons: {
    marginTop: 10,
    gap: 10,
  },

  continueBtn: {
    height: 42,
    borderRadius: 12,
    backgroundColor: "#3A643C",
    alignItems: "center",
    justifyContent: "center",
  },

  continueText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
  },

  cancelBtn: {
    height: 42,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#3A643B",
    alignItems: "center",
    justifyContent: "center",
  },

  cancelText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#3A643B",
  },
});
