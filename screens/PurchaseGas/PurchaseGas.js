import React, { useState } from 'react';
import { SafeAreaView, Image, TouchableOpacity, View, Text, ImageBackground, StyleSheet } from 'react-native';


const PurchaseGas = ({ navigation }) => {
 
  return (
    <ImageBackground
      source={require("../../assets/Images/station-bg1.jpeg")}
      resizeMode="cover"
      style={styles.image}
    >
      <SafeAreaView style={styles.safeArea}>
       
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    }, 
    image: {
        flex: 1,
        width: '100%',
        height: 375,
    },

});

export default PurchaseGas;
