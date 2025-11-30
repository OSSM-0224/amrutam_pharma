import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// ⭐ NO external file — types defined HERE itself
type RootStackParamList = {
  CallEndedScreen: {
    duration?: string;
    amountDeducted?: number;
    balance?: number;
  };
  SelectConcern: undefined;
};

type NavProp = NativeStackNavigationProp<
  RootStackParamList,
  'CallEndedScreen'
>;

const CallEndedScreen = () => {
  const navigation = useNavigation<NavProp>();
  const route = useRoute();

  const { duration = "05:56", amountDeducted = 369, balance = 150 } =
    (route.params as any) || {};

  const handleDone = () => {
    navigation.navigate('SelectConcern'); // ✔ Correct screen name
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View style={styles.topBar}>
        <View style={styles.balanceContainer}>
          <Image source={require('../assets/pocket.png')} style={styles.pocketIcon} />
          <Text style={styles.balanceText}>₹ {balance}</Text>
        </View>
      </View>

      <View style={styles.profileSection}>
        <Image source={require('../assets/doctor.png')} style={styles.doctorImage} />
        <View style={styles.nameContainer}>
          <Text style={styles.doctorName}>Dr. Prem</Text>
          <View style={styles.onlineDot} />
        </View>
      </View>

      <Text style={styles.callEndedText}>Call Ended</Text>

      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Image source={require('../assets/doctor.png')} style={styles.phoneIcon} />
          <Text style={styles.detailLabel}>Consultation Duration</Text>
          <Text style={styles.detailValue}>{duration}</Text>
        </View>

        <View style={styles.detailItem}>
          <Image source={require('../assets/doctor.png')} style={styles.moneyIcon} />
          <Text style={styles.detailLabel}>Total Amount Deducted</Text>
          <Text style={styles.detailValue}>₹ {amountDeducted}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.callAgainButton}>
          <Text style={styles.callAgainText}>Call Again</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
          <Text style={styles.doneText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 12,
    paddingBottom: 20,
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  pocketIcon: {
    width: 16,
    height: 16,
    marginRight: 6,
  },
  balanceText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333333',
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 40,
  },
  doctorImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginBottom: 16,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  doctorName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginRight: 6,
  },
  onlineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4CAF50',
  },
  callEndedText: {
    fontSize: 16,
    color: '#757575',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 40,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 60,
  },
  detailItem: {
    alignItems: 'center',
  },
  phoneIcon: {
    width: 24,
    height: 24,
    marginBottom: 8,
    tintColor: '#757575',
  },
  moneyIcon: {
    width: 24,
    height: 24,
    marginBottom: 8,
    tintColor: '#757575',
  },
  detailLabel: {
    fontSize: 12,
    color: '#757575',
    marginBottom: 8,
    textAlign: 'center',
  },
  detailValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    left: 16,
    right: 16,
  },
  callAgainButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#3A643C',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  callAgainText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3A643C',
  },
  doneButton: {
    backgroundColor: '#3A643C',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  doneText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default CallEndedScreen;