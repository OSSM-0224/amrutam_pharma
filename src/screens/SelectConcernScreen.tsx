import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigations/AppNavigator";


const concerns = [
  { id: 1, name: "Hypertension", icon: require("../assets/icon1.png") },
  { id: 2, name: "Anxiety", icon: require("../assets/icon2.png") },
  { id: 3, name: "Obesity", icon: require("../assets/icon3.png") },
  { id: 4, name: "Diabetes", icon: require("../assets/icon10.png") },
  { id: 5, name: "Obesity", icon: require("../assets/icon4.png") },
  { id: 6, name: "Hypertension", icon: require("../assets/icon6.png") },
  { id: 7, name: "Rubella", icon: require("../assets/icon5.png") },
  { id: 8, name: "Hypothermia", icon: require("../assets/icon8.png") },
  { id: 9, name: "Frostbite", icon: require("../assets/icon6.png") },
  { id: 10, name: "Diabetes", icon: require("../assets/icon10.png") },
  { id: 11, name: "Acne", icon: require("../assets/icon11.png") },
  { id: 12, name: "Eczema", icon: require("../assets/icon12.png") },
];
type NavProps = NativeStackNavigationProp<
  RootStackParamList,
  "SelectConcern"
>;
export default function SelectConcernScreen() {
  const navigation = useNavigation<NavProps>();
  const [selected, setSelected] = useState(1);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerBg} />

      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Select Concern</Text>
      <Text style={styles.subTitle}>Top Concerns</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.grid}>
          {concerns.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              onPress={() => {
                setSelected(item.id);
                navigation.navigate("ConsultDoctorScreen");
              }}
            >
              <View
                style={[
                  styles.outerCircle,
                  selected === item.id && styles.outerCircleActive,
                ]}
              >
                <View style={styles.iconCircle}>
                  <Image source={item.icon} style={styles.icon} />
                </View>
              </View>

              <Text
                style={[
                  styles.cardText,
                  selected === item.id && styles.cardTextActive,
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Moved OUTSIDE grid — now centered properly */}
        <Text style={styles.viewAllText}>View All Concerns</Text>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navBtn}>
          <Image
            source={require("../assets/Home.png")}
            style={styles.navIcon}
          />
          <Text style={styles.navItem}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBtn}>
          <Image
            source={require("../assets/Group.png")}
            style={styles.navIcon}
          />
          <Text style={styles.navItem}>Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBtn}>
          <Image
            source={require("../assets/Consult.png")}
            style={styles.navIcon}
          />
          <Text style={styles.navItemActive}>Consult</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBtn}>
          <Image
            source={require("../assets/Forum.png")}
            style={styles.navIcon}
          />
          <Text style={styles.navItem}>Forum</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBtn}>
          <Image
            source={require("../assets/Bulletin.png")}
            style={styles.navIcon}
          />
          <Text style={styles.navItem}>Bulletin</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },

  headerBg: {
    height: 160,
    width: "100%",
    backgroundColor: "#DDE8D8",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    position: "absolute",
    top: 0,
  },

  backBtn: {
    marginTop: 55,
    marginLeft: 20,
  },

  backArrow: {
    fontSize: 26,
    color: "#2E4128",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 50,
    marginTop: 10,
    marginLeft: 20,
    color: "black",
  },

  subTitle: {
    fontSize: 17,
    fontWeight: "500",
    marginLeft: 20,
    marginTop: 15,
    color: "#3C4A3A",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 20,
  },

  card: {
    width: "30%",
    alignItems: "center",
    marginVertical: 15,
  },

  outerCircle: {
    height: 90,
    width: 90,
    borderRadius: 45,
    backgroundColor: "#EEF5EA",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0,
  },

  outerCircleActive: {
    borderWidth: 2,
    borderColor: "#2E6E2A",
  },

  iconCircle: {
    height: 75,
    width: 75,
    borderRadius: 40,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  icon: { width: 40, height: 40, resizeMode: "contain" },

  cardText: {
    marginTop: 6,
    color: "#6C6C6C",
    fontSize: 14,
    textAlign: "center",
  },

  cardTextActive: {
    color: "#2E6E2A",
    fontWeight: "600",
  },

  viewAllText: {
    marginTop: 10,
    marginBottom: 140,
    fontSize: 16,
    color: "#2E6E2A",
    fontWeight: "600",
    textAlign: "center",
    width: "100%",
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#0f500fff",
    height: 100,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  navBtn: { alignItems: "center" },

  navIcon: { width: 24, height: 24, marginBottom: 2 },

  navItem: { color: "#D0E1D0", fontSize: 12 },

  navItemActive: { color: "white", fontSize: 13, fontWeight: "700" },
});
