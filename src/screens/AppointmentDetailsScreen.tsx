import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  AppointmentDetailsScreen: {
    doctorName?: string;
    appointmentId?: string;
    appointmentType?: string;
    appointmentFee?: string;
    duration?: string;
    appointmentDate?: string;
    appointmentTime?: string;
    bookingStatus?: string;
    routineStatus?: string;
    symptoms?: string;
    symptomsDescription?: string;
    severity?: string;
    symptomsDuration?: string;
    sleepPattern?: string;
    couponCode?: string;
    couponDiscount?: string;
    discountAmount?: string;
    bookedBy?: string;
    bookingDate?: string;
    bookingTime?: string;
    paymentDate?: string;
    paymentTime?: string;
  };
};

type Props = NativeStackScreenProps<RootStackParamList, 'AppointmentDetailsScreen'>;

export default function AppointmentDetailsScreen({ route, navigation }: Props) {
  const {
    doctorName = "Dr. Prem",
    appointmentId = "APPLF10247B16",
    appointmentType = "Freeaudio",
    appointmentFee = "0 INR",
    duration = "1 min",
    appointmentDate = "19 Nov. 2024",
    appointmentTime = "01:51 PM",
    bookingStatus = "Completed",
    routineStatus = "Not assigned",
    symptoms = "Anxiety",
    symptomsDescription = "N/A",
    severity = "Moderate",
    symptomsDuration = "weeks",
    sleepPattern = "N/A",
    couponCode = "N/A",
    couponDiscount = "N/A",
    discountAmount = "0",
    bookedBy = "Patient",
    bookingDate = "19 Nov. 2024",
    bookingTime = "01:51 PM",
    paymentDate = "29 Jan. 2025",
    paymentTime = "01:58 PM",
  } = route?.params || {};

  const [expandedSections, setExpandedSections] = useState({
    appointment: true,
    symptoms: false,
    coupons: false,
    booking: false,
    medical: false,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleAttachReport = () => {
    console.log("Attach report pressed");
    // Add your file picker logic here
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Appointment Details</Text>
      </View>

      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Doctor Card */}
        <View style={styles.doctorCard}>
          <Image 
            source={require('../assets/doctor.png')}
            style={styles.doctorImage}
          />
          <View style={styles.doctorInfo}>
            <Text style={styles.doctorLabel}>Doctor name</Text>
            <Text style={styles.doctorName}>{doctorName}</Text>
          </View>
        </View>

        {/* Appointment Details Section */}
        <TouchableOpacity 
          style={styles.section}
          onPress={() => toggleSection('appointment')}
          activeOpacity={0.7}
        >
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Appointment Details</Text>
            <Text style={styles.chevron}>{expandedSections.appointment ? '︿' : '﹀'}</Text>
          </View>
          
          {expandedSections.appointment && (
            <View style={styles.sectionContent}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Appointment ID</Text>
                <Text style={styles.detailValue}>{appointmentId}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Appointment type</Text>
                <Text style={styles.detailValue}>{appointmentType}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Appointment fee</Text>
                <Text style={styles.detailValue}>{appointmentFee}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Duration</Text>
                <Text style={styles.detailValue}>{duration}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Appointment date</Text>
                <Text style={styles.detailValue}>{appointmentDate}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Appointment time</Text>
                <Text style={styles.detailValue}>{appointmentTime}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Booking Status</Text>
                <Text style={styles.detailValue}>{bookingStatus}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Routine status</Text>
                <Text style={styles.detailValue}>{routineStatus}</Text>
              </View>
            </View>
          )}
        </TouchableOpacity>

        {/* Symptoms Details Section */}
        <TouchableOpacity 
          style={styles.section}
          onPress={() => toggleSection('symptoms')}
          activeOpacity={0.7}
        >
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Symptoms Details</Text>
            <Text style={styles.chevron}>{expandedSections.symptoms ? '︿' : '﹀'}</Text>
          </View>
          
          {expandedSections.symptoms && (
            <View style={styles.sectionContent}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Symptoms</Text>
                <Text style={styles.detailValue}>{symptoms}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Description</Text>
                <Text style={styles.detailValue}>{symptomsDescription}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Severity</Text>
                <Text style={styles.detailValue}>{severity}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>symptoms Duration</Text>
                <Text style={styles.detailValue}>{symptomsDuration}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>sleep pattern</Text>
                <Text style={styles.detailValue}>{sleepPattern}</Text>
              </View>
            </View>
          )}
        </TouchableOpacity>

        {/* Coupons Details Section */}
        <TouchableOpacity 
          style={styles.section}
          onPress={() => toggleSection('coupons')}
          activeOpacity={0.7}
        >
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Coupons Details</Text>
            <Text style={styles.chevron}>{expandedSections.coupons ? '︿' : '﹀'}</Text>
          </View>
          
          {expandedSections.coupons && (
            <View style={styles.sectionContent}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Coupon Code</Text>
                <Text style={styles.detailValue}>{couponCode}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Coupon Discount</Text>
                <Text style={styles.detailValue}>{couponDiscount}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Discount amount</Text>
                <Text style={styles.detailValue}>{discountAmount}</Text>
              </View>
            </View>
          )}
        </TouchableOpacity>

        {/* Booking Details Section */}
        <TouchableOpacity 
          style={styles.section}
          onPress={() => toggleSection('booking')}
          activeOpacity={0.7}
        >
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Booking Details</Text>
            <Text style={styles.chevron}>{expandedSections.booking ? '︿' : '﹀'}</Text>
          </View>
          
          {expandedSections.booking && (
            <View style={styles.sectionContent}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Booked by</Text>
                <Text style={styles.detailValue}>{bookedBy}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Booking date</Text>
                <Text style={styles.detailValue}>{bookingDate}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Booking time</Text>
                <Text style={styles.detailValue}>{bookingTime}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Payment date</Text>
                <Text style={styles.detailValue}>{paymentDate}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Payment Time</Text>
                <Text style={styles.detailValue}>{paymentTime}</Text>
              </View>
            </View>
          )}
        </TouchableOpacity>

        {/* Medical Report Section */}
        <TouchableOpacity 
          style={styles.section}
          onPress={() => toggleSection('medical')}
          activeOpacity={0.7}
        >
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Medical Report</Text>
            <Text style={styles.chevron}>{expandedSections.medical ? '︿' : '﹀'}</Text>
          </View>
        </TouchableOpacity>

        {/* Attach Report Button */}
        <TouchableOpacity 
          style={styles.attachButton}
          onPress={handleAttachReport}
          activeOpacity={0.8}
        >
          <Text style={styles.attachButtonText}>Attach report</Text>
        </TouchableOpacity>

        {/* Bottom spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: 24,
    color: '#000000',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
    marginTop: 8,
  },
  scrollView: {
    flex: 1,
  },
  doctorCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 16,
    padding: 16,
    flexDirection: 'column',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  doctorImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  doctorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  doctorLabel: {
    fontSize: 14,
    color: '#666666',
    marginRight: 8,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  section: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
  chevron: {
    fontSize: 16,
    color: '#666666',
  },
  sectionContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  detailLabel: {
    fontSize: 14,
    color: '#666666',
    flex: 1,
  },
  detailValue: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '500',
    flex: 1,
    textAlign: 'right',
  },
  attachButton: {
    backgroundColor: '#3A643C',
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 16,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#3A643C',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  attachButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomSpacing: {
    height: 20,
  },
});