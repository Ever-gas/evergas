import { useState } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import Button from '../../components/Button/Button';
import { ArrowLeft } from 'iconsax-react-native';

const OrderSteps = ({ navigation }) => {

  return (
    <SafeAreaView style={[styles.container]} >
      <View style={styles.header}>
        <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
          <ArrowLeft size="19" color="#2B2A30" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Order Steps</Text>
      </View>
      <View style={{ marginTop: 29 }}>
        <Text style={{ fontFamily: 'satoshi-black', fontSize: 20, lineHeight: 24, color: '#192126' }}>Delivery breakdown</Text>
        <View style={styles.infoWrapper}>
          <View>
            <Text style={styles.infoTitle}>Delivery status</Text>
            <Text style={[{ color: '#656E7A' }, styles.infoValue]}>In progress</Text>
          </View>
          <View>
            <Text style={[styles.infoTitle, { textAlign: 'right' }]}>Estimated Time</Text>
            <Text style={[{ color: '#022C22' }, styles.infoValue]}>14 mins</Text>
          </View>
        </View>
        <View style={styles.steps}>
            <View style={[styles.step, styles.completed]}></View>
            <View style={styles.step}></View>
            <View style={styles.step}></View>
            <View style={styles.step}></View>
            <View style={styles.step}></View>
            <View style={[styles.step, {marginRight: 0}]}></View>
        </View>
      </View>
      <View style={{flexDirection:"row",marginTop:23,marginBottom:350 }}>
        <View style={{height:32,width:32,}}>
        <Image source={require("../../assets/Images/station-img-5.jpg")}style={{borderRadius:100,width:"100%",height:"100%"}}/>
        </View>
        <View style={{left:10}}>
          <Text style={{fontFamily:"satoshi-black",fontSize:14,color:"#192435",lineHeight:19}}>Zacosem Petrol station</Text>
          <Text style={{ fontFamily:"satoshi-medium",fontSize:12,color:"#9EA3AE",lineHeight:16}}>Gas Station has received your orders</Text>
        </View>
      </View>
      
      
      <Button title='Purchase Gas' action={() => console.log('coming soon')} />
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
  },
  infoValue: {
    fontFamily: 'satoshi-black',
    // color: '#656E7A',
    fontSize: 16,
    lineHeight: 24,
  },
  steps: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 42,
    // paddingHorizontal: 13
  },
  step: {
    height: 5,
    width: 48,
    borderRadius: 20,
    backgroundColor: '#D9D9D9',
    marginRight: 10
  },
  completed: {
    backgroundColor: '#38C076'
  }
})

export default OrderSteps;