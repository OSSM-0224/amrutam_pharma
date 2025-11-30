import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  CallDisconnectedScreen: {
    doctorName?: string;
    duration?: string;
    amountDeducted?: number;
    balance?: number;
    minRechargeAmount?: number;
  };
  RechargeScreen: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'CallDisconnectedScreen'>;

export default function CallDisconnectedScreen({ navigation, route }: Props) {
  const { 
    doctorName = "Dr. Prem",
    duration = "05:56",
    amountDeducted = 369,
    balance = 150,
    minRechargeAmount = 25
  } = route?.params || {};

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#F0FDF4', '#FFFFFF']}
        style={styles.gradient}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeBtn}>
            <Text style={styles.closeIcon}>✕</Text>
          </TouchableOpacity>
          <View style={styles.balanceCard}>
            <Text style={styles.walletIcon}>💰</Text>
            <Text style={styles.balanceText}>₹ {balance}</Text>
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          {/* Doctor Image */}
          <View style={styles.doctorImageContainer}>
            <Image
              source={require('../assets/doctor.png')}
              style={styles.doctorImage}
            />
            <View style={styles.onlineIndicator} />
          </View>

          {/* Doctor Name */}
          <Text style={styles.doctorName}>{doctorName}</Text>

          {/* Call Disconnected Status */}
          <View style={styles.statusContainer}>
            <View style={styles.signalBars}>
              <View style={[styles.bar, styles.barRed]} />
              <View style={[styles.bar, styles.barRed]} />
              <View style={[styles.bar, styles.barRed]} />
            </View>
            <Text style={styles.statusText}>Call Disconnected</Text>
          </View>

          {/* Call Stats */}
          <View style={styles.statsContainer}>
            <View style={styles.statBox}>
              <Text style={styles.statIcon}>📞</Text>
              <Text style={styles.statLabel}>Consultation Duration</Text>
              <Text style={styles.statValue}>{duration}</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statIcon}>💳</Text>
              <Text style={styles.statLabel}>Total Amount Deducted</Text>
              <Text style={styles.statValue}>₹ {amountDeducted}</Text>
            </View>
          </View>

          {/* Low Balance Warning Card */}
          <View style={styles.warningCard}>
            <Text style={styles.warningTitle}>Low Balance</Text>
            <Text style={styles.warningText}>
              Your call ended due to low balance. Add at least{' '}
              <Text style={styles.warningBold}>₹{minRechargeAmount}</Text> to continue speaking with Dr. Prerna.
            </Text>
            <TouchableOpacity 
              style={styles.rechargeButton}
              onPress={() => navigation.navigate('RechargeScreen')}
            >
              <Text style={styles.rechargeButtonText}>Recharge now</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Bottom Safe Area */}
        <View style={styles.bottomSpacer} />
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FDF4',
  },
  gradient: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  closeBtn: {
    padding: 8,
  },
  closeIcon: {
    fontSize: 24,
    color: '#374151',
  },
  balanceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
  },
  walletIcon: {
    fontSize: 14,
  },
  balanceText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 20,
  },
  doctorImageContainer: {
    position: 'relative',
    marginBottom: 24,
  },
  doctorImage: {
    width: 112,
    height: 112,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: -8,
    left: '50%',
    marginLeft: -8,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#22C55E',
    borderWidth: 4,
    borderColor: '#FFFFFF',
  },
  doctorName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 24,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
    gap: 8,
  },
  signalBars: {
    flexDirection: 'row',
    gap: 2,
  },
  bar: {
    width: 4,
    height: 16,
  },
  barRed: {
    backgroundColor: '#F87171',
  },
  statusText: {
    color: '#EF4444',
    fontSize: 16,
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginBottom: 32,
    gap: 32,
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
  },
  statIcon: {
    fontSize: 20,
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },
  warningCard: {
    backgroundColor: '#FEF3C7',
    borderWidth: 1,
    borderColor: '#FCD34D',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  warningTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
  },
  warningText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
    marginBottom: 24,
  },
  warningBold: {
    fontWeight: '600',
    color: '#111827',
  },
  rechargeButton: {
    backgroundColor: '#3A643C',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#3A643C',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  rechargeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomSpacer: {
    height: 32,
  },
});