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
  NoAnswerScreen: {
    doctorName?: string;
    specialty?: string;
    balance?: number;
  };
  ExpertsList: undefined;
  ChatScreen: undefined;
  SelectConcernScreen: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'NoAnswerScreen'>;

export default function NoAnswerScreen({ navigation, route }: Props) {
  const { 
    doctorName = "Dr. Prem", 
    specialty = "Male-Female Infertility", 
    balance = 150 
  } = route?.params || {};

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#F0FDF4', '#FFFFFF']}
        style={styles.gradient}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('SelectConcernScreen')} 
            style={styles.closeBtn}
          >
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

          {/* Doctor Info */}
          <Text style={styles.doctorName}>{doctorName}</Text>
          <Text style={styles.specialty}>{specialty}</Text>

          {/* No Answer Status */}
          <View style={styles.statusCard}>
            <Text style={styles.statusText}>No Answer</Text>
          </View>

          {/* Bell Notification Card */}
          <View style={styles.notificationCard}>
            <View style={styles.bellIcon}>
              <Text style={styles.bellEmoji}>🔔</Text>
            </View>
            <Text style={styles.notificationText}>
              Tap on the bell icon to get notified when Dr. Prema is online
            </Text>
          </View>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.dividerLine} />
          </View>
        </ScrollView>

        {/* Bottom Action Card */}
        <View style={styles.bottomCard}>
          <Text style={styles.bottomText}>
            Start a Chat Consultation with Dr. Prerna or consult another expert now.
          </Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity 
              style={styles.secondaryButton}
              onPress={() => navigation.navigate('ExpertsList')}
            >
              <Text style={styles.secondaryButtonText}>See More Experts</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.primaryButton}
              onPress={() => navigation.navigate('ChatScreen')}
            >
              <Text style={styles.primaryButtonText}>Start Chat</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    paddingTop: 48,
    paddingBottom: 20,
  },
  doctorImageContainer: {
    position: 'relative',
    marginBottom: 24,
  },
  doctorImage: {
    width: 128,
    height: 128,
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
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  specialty: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 24,
  },
  statusCard: {
    backgroundColor: '#FEE2E2',
    borderWidth: 1,
    borderColor: '#FECACA',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 32,
  },
  statusText: {
    color: '#DC2626',
    fontWeight: '600',
    fontSize: 16,
  },
  notificationCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FEF3C7',
    borderWidth: 1,
    borderColor: '#FDE68A',
    borderRadius: 16,
    padding: 16,
    marginBottom: 32,
    gap: 12,
  },
  bellIcon: {
    backgroundColor: '#3A643C',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bellEmoji: {
    fontSize: 20,
  },
  notificationText: {
    flex: 1,
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
    paddingTop: 2,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 32,
    gap: 16,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#D1D5DB',
  },
  dividerText: {
    color: '#9CA3AF',
    fontSize: 14,
  },
  bottomCard: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  bottomText: {
    fontSize: 14,
    color: '#374151',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#3A643C',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#3A643C',
    fontSize: 15,
    fontWeight: '600',
  },
  primaryButton: {
    flex: 1,
    backgroundColor: '#3A643C',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
});