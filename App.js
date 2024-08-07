// import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { StyleSheet, SafeAreaView, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import Navigator from './routes/AuthStack'
import AuthStack from './routes/AuthStack';
import MainStack from './routes/MainStack';
import { NavigationContainer } from '@react-navigation/native';

// const getFonts = () => Font.loadAsync({
//   'satoshi-regular': require('./assets/Fonts/OTF/Satoshi-Regular.otf')
// })

const App = () => {
  const [fontsLoaded] = useFonts({
    "satoshi-regular": require("./assets/Fonts/OTF/Satoshi-Regular.otf"),
    "satoshi-bold": require("./assets/Fonts/OTF/Satoshi-Bold.otf"),
    "satoshi-medium": require("./assets/Fonts/OTF/Satoshi-Medium.otf"),
    "satoshi-black": require("./assets/Fonts/OTF/Satoshi-Black.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <NavigationContainer>
          <AuthStack /> 
        </NavigationContainer>
      </View>
    // </TouchableWithoutFeedback>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
