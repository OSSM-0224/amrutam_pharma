import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

export default function ConsultDoctorScreen({ navigation }: any) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Hair", "Diabetes", "Dental", "Skin", "Mental"];

  return (
    <View style={styles.container}>
      
      {/* ---------- HEADER BAR ---------- */}
      <View style={styles.topBar}>

        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ fontSize: 26 }}>←</Text>
        </TouchableOpacity>


        <View style={styles.rightIcons}>
          <Image
            source={require("../assets/pocket.png")}
            style={styles.walletIcon}
          />
          <Text style={styles.walletText}>₹ 150</Text>
        </View>
      </View>

    
<View style={styles.filterRow}>

  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{ alignItems: "center" }}
    style={{ flexGrow: 0, maxWidth: "78%" }}
  >
    {filters.map((item, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => setActiveFilter(item)}
        style={[
          styles.concernBtn,
          activeFilter === item && styles.concernBtnActive,
        ]}
      >
        <Text
          style={[
            styles.concernText,
            activeFilter === item && styles.concernTextActive,
          ]}
        >
          {item}
        </Text>
      </TouchableOpacity>
    ))}
  </ScrollView>

  <TouchableOpacity style={styles.fixedFilterBtn}>
    <Image
      source={require("../assets/filter.png")}
      style={styles.fixedFilterIcon}
    />
    <Text style={styles.fixedFilterText}>Filter</Text>
  </TouchableOpacity>

</View>



      {/* DOCTOR LIST */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {[1, 2, 3].map((i) => (
          <View key={i} style={styles.card}>
            <View style={styles.row}>
              <Image
                source={require("../assets/doctor.png")}
                style={styles.docImage}
              />

              <View style={{ flex: 1, marginLeft: 10 }}>
                <View style={styles.rowBetween}>
                  <Text style={styles.docName}>Dr. Prem</Text>

                  <View style={styles.ratingBox}>
                    <Image
                      source={require("../assets/star.png")}
                      style={styles.starIcon}
                    />
                    <Text style={styles.ratingText}>4.5</Text>
                  </View>
                </View>

                <Text style={styles.docSmall}>Gynecology • 2 others</Text>
                <Text style={styles.docSmall}>Hindi, English, Telugu</Text>
                <Text style={styles.docSmall}>Exp: 7 years</Text>

                <Text style={styles.priceLine}>
                  ₹ 15/min <Text style={styles.freeText}>Free (5 min)</Text>
                </Text>
              </View>
            </View>

            <View style={styles.actionRow}>
              <TouchableOpacity style={styles.scheduleBtn} onPress={() => navigation.navigate("ScheduleScreen")}>
                <Text style={styles.scheduleText}>Schedule</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.callBtn}>
                <Text style={styles.callText}>Free Call</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },

  topBar: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },

  backBtn: {
    padding: 5,
  },

  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },

  walletIcon: {
    width: 15,
    height: 15,
    marginRight: 6,
    padding: 5,
  },

  walletText: {
    fontSize: 16,
    fontWeight: "700",
  },

  concernScroll: {
    paddingHorizontal: 10,
    marginTop: 10,
  },

  concernBtn: {
    paddingVertical: 7,
    paddingHorizontal: 16,
    borderRadius: 18,
    backgroundColor: "#EDEDED",
    marginRight: 8,
  },

  concernBtnActive: {
    backgroundColor: "#CDE6C6",
  },

  concernText: {
    fontSize: 13,
    color: "#333",
  },

  concernTextActive: {
    color: "#225A2A",
    fontWeight: "700",
  },

  filterBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F3EE",
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderRadius: 18,
    marginLeft: 10,
  },

  filterIcon: {
    width: 18,
    height: 18,
    marginRight: 6,
  },

  filterText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
  },
  filterEndBtn: {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: 8,
  paddingHorizontal: 14,
  backgroundColor: "#EDEDED",
  borderRadius: 18,
  marginLeft: 8,
},

filterIconSmall: {
  width: 18,
  height: 18,
  marginRight: 6,
},

filterEndText: {
  fontSize: 13,
  fontWeight: "700",
  color: "#333",
},
filterRow: {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 10,
  marginTop: 10,
  justifyContent: "space-between",
},

fixedFilterBtn: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#EDEDED",
  paddingVertical: 7,
  paddingHorizontal: 14,
  borderRadius: 18,
  marginLeft: 8,
},

fixedFilterIcon: {
  width: 18,
  height: 18,
  marginRight: 6,
},

fixedFilterText: {
  fontSize: 13,
  fontWeight: "700",
  color: "#333",
},


  /* ---------- DOCTOR CARD ---------- */
  card: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 15,
    marginTop: 15,
    padding: 15,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  row: { flexDirection: "row" },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  docImage: { width: 80, height: 80, borderRadius: 15 },

  docName: { fontSize: 16, fontWeight: "700" },

  docSmall: { color: "#555", fontSize: 13, marginTop: 2 },

  priceLine: { marginTop: 4, fontSize: 13 },

  freeText: { color: "red", fontWeight: "700" },

  ratingBox: { flexDirection: "row", alignItems: "center" },

  starIcon: { width: 18, height: 18 },

  ratingText: { marginLeft: 5, fontSize: 14, fontWeight: "600" },

  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  scheduleBtn: {
    width: "45%",
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#6D6D6D",
    justifyContent: "center",
    alignItems: "center",
  },

  scheduleText: { color: "#000", fontWeight: "700" },

  callBtn: {
    width: "45%",
    height: 40,
    borderRadius: 10,
    backgroundColor: "#2C6E32",
    justifyContent: "center",
    alignItems: "center",
  },

  callText: { color: "white", fontWeight: "700" },
});
