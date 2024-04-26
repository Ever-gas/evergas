import { useState } from 'react';
import { TextInput, Image, ScrollView, TouchableOpacity, View, Text, ImageBackground, StyleSheet } from 'react-native';
import { ArrowLeft, ArrangeVertical } from 'iconsax-react-native';

const PurchaseGas = ({ navigation }) => {
  const [value, onChangeValue] = useState('13,000')

  return (
    <ScrollView style={styles.screenView}>
      <ImageBackground source={require("../../assets/Images/station-bg1.jpeg")} resizeMode="cover" style={styles.image} >
        <View style={styles.nav}>
          <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
            <ArrowLeft size="19" color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.container}>
        <Text style={styles.headerText}>Buy/Refill Gas</Text>
        <View style={styles.quantityInputWrapper}>
          <View style={styles.amountWrapper}>
            <Text style={styles.unit}>₦</Text>
            <TextInput
              inputMode='numeric'
              cursorColor='#D9D9D9'
              onChangeValue={inputValue => onChangeValue(inputValue)}
              value={value}
              style={styles.input}
            />
          </View>
          <TouchableOpacity style={{display: 'flex', alignItems: 'center', }}>
            <Text style={{ fontSize: 10 }}>
              <ArrangeVertical size="24" color="#8C91A2" variant="Outline" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
  headerText: {
    lineHeight: 24,
    fontSize: 20,
    fontFamily: 'satoshi-bold',
    textAlign: 'center',
    color: '#192126'
  },
  quantityInputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 28
  },
  input: {
    fontFamily: 'satoshi-black',
    fontSize: 48,
    lineHeight: 65,
    width: 162
  },
  amountWrapper: {
    display: "flex",
    flexDirection: 'row',
  },
  unit: {
    lineHeight: 40,
    fontFamily: 'satoshi-black',
    color: '#979797',
    marginRight: 4
  }


});

export default PurchaseGas;
