import { useState } from 'react';
import { SafeAreaView, Image, ScrollView, TouchableOpacity, View, Text, ImageBackground, StyleSheet } from 'react-native';
import { ArrowLeft } from 'iconsax-react-native'; 

const PurchaseGas = ({ navigation }) => {

  return (
    <View style={styles.screenView}>
      <ImageBackground source={require("../../assets/Images/station-bg1.jpeg")} resizeMode="cover" style={styles.image} >
        <View style={styles.nav}>
          <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
            <ArrowLeft size="19" color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <ScrollView style={styles.container}>
        {/* <View style={styles.}>

        </View> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenView: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  image: { 
    height: 220,
  },
  nav: {
    paddingTop: 60,
    paddingLeft: 24,
    height: 100,
    width: "auto"
  }, 
  goBack: {
    height: 30,
    width: 30,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
   paddingVertical: 50,
   paddingHorizontal: 12
  },

});

export default PurchaseGas;
