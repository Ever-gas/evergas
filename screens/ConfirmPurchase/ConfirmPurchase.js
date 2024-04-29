import { useState } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { ArrowLeft } from 'iconsax-react-native';

const ConfirmPurchase = ({ navigation }) => {

  return (
    <SafeAreaView style={[styles.container]} >
      <ScrollView >
        <View style={styles.header}>
          <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
            <ArrowLeft size="19" color="#2B2A30" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Confirm Purchase</Text>
        </View>
        <View style={{ marginTop: 29 }}>
          <Text style={{ fontFamily: 'satoshi-black', fontSize: 20, lineHeight: 24, color: '#192126' }}>Info</Text>
          <View style={styles.infoWrapper}>
            <View>
              <Text style={styles.infoTitle}>Payment status</Text>
              <Text style={[{ color: '#656E7A' }, styles.infoValue]}>To be paid</Text>
            </View>
            <View>
              <Text style={[styles.infoTitle, { textAlign: 'right' }]}>Time</Text>
              <Text style={[{ color: '#022C22' }, styles.infoValue]}>4:13pm - 17/03/24</Text>
            </View>
          </View>
          <View style={styles.stationDetailsWrapper}>
            <Text style={styles.stationName}>Zacosem Petrol Station</Text>
            <View style={styles.stationInfo}>
              <View style={styles.imageWrapper}>
                <Image source={require('../../assets/Images/station-bg3.jpeg')} style={styles.image} />
              </View>
              <Text style={styles.address}>5C Rev. Ogunbiyi St, Ikeja GRA, Ikeja 101233, Port Harcourt, Rivers State.</Text>
              {/* <View style={styles.textWrapper}> 
              </View> */}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 60,
    paddingHorizontal: 16
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row'
  },
  goBack: {
    height: 32,
    width: 32,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#C0C1CE80',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    marginLeft: 20,
    color: '#161518',
    fontFamily: 'satoshi-bold',
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: -0.2
  },
  infoWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 30
  },
  infoTitle: {
    fontFamily: 'satoshi-regular',
    color: '#6C727F',
    fontSize: 12,
    lineHeight: 16,
    // textAlign: 'center'
  },
  infoValue: {
    fontFamily: 'satoshi-black',
    color: '#656E7A',
    fontSize: 16,
    lineHeight: 24,
  },
  stationName: {
    color: '#192435',
    lineHeight: 19,
    fontSize: 14,
    fontFamily: 'satoshi-black'
  },
  stationInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 17, 
    maxWidth: 280
  },
  imageWrapper: {
    height: 32,
    width: 32,
    borderRadius: 100,
    marginEnd: 10
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 100
  },
  address: {
    fontFamily: 'satoshi-medium',
    fontSize: 12,
    lineHeight: 16,
    color: '#9EA3AE',

  },
  textWrapper: {
    width: 220,
    display: 'flex'
  },

});

export default ConfirmPurchase;
