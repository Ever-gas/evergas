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
})

export default OrderSteps;