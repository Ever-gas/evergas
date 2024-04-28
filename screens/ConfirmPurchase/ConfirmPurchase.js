import { useState } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View, Text, ImageBackground, StyleSheet } from 'react-native';
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
        <View style={{marginTop: 29}}>
          <Text style={{fontFamily: 'satoshi-black', fontSize: 32}}>Coming soon</Text>
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
  }

});

export default ConfirmPurchase;
