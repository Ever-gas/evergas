import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  StatusBar,
  Platform,
  NativeModules,
} from "react-native";
import { useState } from "react";
import { SIZES } from "../../assets/Constants/SIZES";
import { MessageNotif } from "iconsax-react-native";
import GasLevelEstimation from "../../components/GasLevelEstimation/GasLevelEstimation";
import RefillList from "../../components/RefillList/RefillList";
import Svg, { Path } from "react-native-svg";

const Dashboard = (props) => {
  const { StatusBarManager } = NativeModules;
  return (
    <SafeAreaView style={[styles.wrapper, {}]}>
      {/* <StatusBar translucent
                    backgroundColor="transparent"
                /> */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        decelerationRate="fast"
        onTouchEnd={() => {
          console.log(props.ref);
        }}
        // onTouchMove={() => props.ref.current?.scrollResponderHandleMoveShouldSetResponders()}
        // onTouchEnd={() => props.ref.current?.scrollResponderHandleEndShouldSetResponders()}
        // nestedScrollEnabled={true}
        style={{
          flex: 1,
          backgroundColor: "#FFFFFF",
          paddingTop: Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
        }}
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View>
            <View style={styles.header}>
              <View style={styles.headerLeft}>
                <TouchableOpacity style={styles.imageWrapper}>
                  <Image
                    style={styles.image}
                    source={require("../../assets/Images/evergas-user-img.png")}
                  />
                </TouchableOpacity>
                <View>
                  <Text style={styles.greetings}>Good Morning,</Text>
                  <Text style={styles.username}>Brayde</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.iconWrapper}>
                <MessageNotif size="24" color="#017737" variant="Bold" />
              </TouchableOpacity>
            </View>
            <GasLevelEstimation />
            <View style={styles.actionsWrapper}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("OrderGas")}
                style={[styles.actions, { backgroundColor: "#022C22" }]}
              >
                <View style={styles.actionIconWrapper}>
                  <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={9}
                    height={12}
                    fill="none"
                  >
                    <Path
                      stroke="#081D34"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4.5 5.667C5.667 3.94 4.5 1.583 3.917 1c0 1.772-1.035 2.766-1.75 3.5C1.452 5.235 1 6.39 1 7.417a3.5 3.5 0 0 0 7 0c0-.894-.616-2.299-1.167-2.917C5.791 6.25 5.205 6.25 4.5 5.667Z"
                    />
                  </Svg>
                </View>
                <Text style={styles.actionText}>Order gas</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.actions, { backgroundColor: "#38C076" }]}
              >
                <View style={styles.actionIconWrapper}>
                  <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={12}
                    fill="none"
                  >
                    <Path
                      stroke="#081D34"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4.585 2.355 1.535 8.15c-.725 1.375.74 2.87 2.13 2.175l1.62-.81a1.6 1.6 0 0 1 1.43 0l1.62.81c1.39.695 2.85-.8 2.13-2.175l-3.05-5.795c-.6-1.14-2.23-1.14-2.83 0Z"
                    />
                  </Svg>
                </View>
                <Text style={styles.actionText}>Gas accessories</Text>
              </TouchableOpacity>
            </View>
            <RefillList />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  wrapper: {
    // paddingVertical: 60,
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 25,
  },
  headerLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageWrapper: {
    // flex: 1,
    width: 40,
    height: 40,
    marginRight: 13,
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 94,
    borderColor:
      "linear-gradient(180deg, #FFFFFF 0%, rgba(209, 213, 219, 0.9) 45.37%, #E5E5E5 100%)",
    borderImageSlice: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 94,
  },
  greetings: {
    fontFamily: "satoshi-regular",
    fontSize: 14,
    lineHeight: 21,
  },
  username: {
    fontFamily: "satoshi-bold",
    fontSize: SIZES.medium,
    lineHeight: 21,
  },
  iconWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F4F5F6",
    height: 44,
    width: 44,
    borderRadius: 100,
  },
  actionsWrapper: {
    marginTop: 10,
    marginBottom: 30,
    display: "flex",
    flexDirection: "row",
    width: "auto",
    gap: 8,
    paddingEnd: 9,
  },
  actions: {
    paddingHorizontal: 17,
    paddingVertical: 22,
    width: "50%",
    borderRadius: 12,
  },
  actionIconWrapper: {
    backgroundColor: "#FFFFFF",
    width: 24,
    height: 24,
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 13,
  },
  actionText: {
    fontFamily: "satoshi-bold",
    color: "#FFFFFF",
    fontSize: 14,
    lineHeight: 21,
  },
});
