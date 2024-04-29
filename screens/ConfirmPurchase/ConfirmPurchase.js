import { useState } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { ArrowLeft, Information, InfoCircle, Card } from 'iconsax-react-native';
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch';
import Button from '../../components/Button/Button';

const ConfirmPurchase = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const handleToggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={[styles.container]} >
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
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
          <View style={{}}>
            <Text style={styles.stationName}>Zacosem Petrol Station</Text>
            <View style={styles.stationInfo}>
              <View style={styles.imageWrapper}>
                <Image source={require('../../assets/Images/station-bg3.jpeg')} style={styles.image} />
              </View>
              <Text style={styles.address}>5C Rev. Ogunbiyi St, Ikeja GRA, Ikeja 101233, Port Harcourt, Rivers State.</Text>
            </View>
          </View>
          <View style={styles.purchaseWrapper}>
            <View style={[styles.borderRight, { paddingRight: 48 }]}>
              <Text style={styles.purchaseTitle}>Amount</Text>
              <Text style={styles.purchaseAmount}>N13,500</Text>
            </View>
            <View style={{ paddingLeft: 48 }}>
              <Text style={styles.purchaseTitle}>Gas Quantity</Text>
              <Text style={styles.purchaseAmount}>8.33 kg</Text>
            </View>
          </View>
          <View style={styles.chargesView}>
            <View style={styles.infoIconWrapper}>
              <Information size="20" color="#FFFFFF" variant="Bold" />
            </View>
            <View>
              <Text style={styles.fee}>Delivery Fee</Text>
              <Text style={styles.chargePurpose}><Text style={styles.spanText}>N500</Text> is charged for delivery for round trip</Text>
              <View style={{ width: '', display: 'flex', alignItems: 'flex-center', justifyContent: 'space-between', flexDirection: 'row', marginTop: 21, paddingBottom: 10 }}>
                <View>
                  <Text style={styles.fee}>Service Fee</Text>
                  <Text style={styles.chargePurpose}><Text style={styles.spanText}>N75</Text> is charged for each delivery</Text>
                </View>
                <TouchableOpacity style={{ marginTop: 18, paddingLeft: 85 }}>
                  <Text><InfoCircle size="15" color="#FFAD31" /></Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.totalAmount}>
            <Text style={styles.amountTitle}>Total Amount</Text>
            <View style={[styles.amountWrapper]}>
              <Text style={styles.unit}>₦</Text>
              <Text style={styles.figure}>13,575</Text>
            </View>
          </View>
          <View style={styles.switchWrapper}>
            <View style={styles.lableWrapper}>
              <Text style={{ paddingTop: 6 }}> <Card size="20" color="#38C076" variant="Bulk" /> </Text>
              <Text style={styles.switchLabel}>5670 **** **** **78</Text>
            </View>
            <ToggleSwitch isEnabled={isEnabled} handleToggleSwitch={handleToggleSwitch} />
          </View>
          <View style={styles.switchWrapper}>
            <View style={styles.lableWrapper}>
              <Text style={{ paddingTop: 6 }}> <Card size="20" color="#DD5555" variant="Bulk" /> </Text>
              <Text style={styles.switchLabel}>2256 **** **** **42</Text>
            </View>
            <ToggleSwitch isEnabled={isEnabled} handleToggleSwitch={handleToggleSwitch} />
          </View>

          <View style={{ marginVertical: 50 }}>
            <Button title='Purchase Gas' action={() => navigation.navigate('OrderSteps')} />
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
    paddingTop: 50,
    paddingHorizontal: 16
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    paddingBottom: 18
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
  purchaseWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#F8F7F8',
    borderRadius: 8,
    paddingVertical: 18,
    marginTop: 23
  },
  borderRight: {
    borderRightWidth: 1,
    borderRightColor: '#D9D9D9',
  },
  purchaseTitle: {
    fontFamily: 'satoshi-regular',
    lineHeight: 16,
    fontSize: 12,
    color: '#6C727F',
    textAlign: 'center'
  },
  purchaseAmount: {
    fontFamily: 'satoshi-black',
    lineHeight: 24,
    fontSize: 16,
    color: '#022C22',
    textAlign: 'center'
  },
  chargesView: {
    backgroundColor: '#F2F5EB',
    borderRadius: 8,
    padding: 15,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginTop: 15
  },
  infoIconWrapper: {
    marginRight: 10,
    width: 38,
    height: 38,
    backgroundColor: '#022C22',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100
  },
  fee: {
    color: "#121212",
    fontFamily: 'satoshi-black',
    fontSize: 12,
    lineHeight: 16,
    paddingBottom: 4
  },
  spanText: {
    fontFamily: 'satoshi-black',
    fontSize: 12,
    lineHeight: 16,
    color: '#121212'
  },
  chargePurpose: {
    color: '#121212',
    fontFamily: 'satoshi-regular',
    fontSize: 12,
    lineHeight: 16,
  },
  totalAmount: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 30,
    borderBottomWidth: 1,
    borderRadius: 8,
    borderBlockColor: '#F8F7F8',
    paddingBottom: 30
  },
  amountTitle: {
    color: '#979797',
    fontFamily: 'satoshi-medium',
    fontSize: 12,
    lineHeight: 16
  },
  amountWrapper: {
    display: "flex",
    flexDirection: 'row',
    paddingRight: 14
  },
  unit: {
    lineHeight: 22,
    fontFamily: 'satoshi-black',
    color: '#979797',
    marginRight: 3,
    fontSize: 16
  },
  figure: {
    color: '#192126',
    fontFamily: 'satoshi-black',
    lineHeight: 30,
    fontSize: 22,
    textAlign: 'right'
  },
  switchWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  switchLabel: {
    fontFamily: 'satoshi-medium',
    lineHeight: 21,
    fontSize: 14,
    color: '#192126',
    paddingLeft: 5
  },
  lableWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default ConfirmPurchase;
