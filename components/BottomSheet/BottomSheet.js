import { useRef, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { CloseCircle } from "iconsax-react-native";


const BottomSheet = ({ title, sheetRef, height, dragDown, pressMask, sheetcontent }) => {

  return (
    <RBSheet
      ref={sheetRef}
      closeOnDragDown={dragDown} 
      closeOnPressMask={pressMask}
      height={height} 
      openDuration={700}
      closeDuration={700}
      customStyles={{
        wrapper: {
          backgroundColor: "rgba(0, 0, 9, 0.7)",
        },
        draggableIcon: {
          backgroundColor: "#E5E7EB",
        },
        container: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}
      customModalProps={{
        animationType: 'slide',
        statusBarTranslucent: true,
      }}
      customAvoidingViewProps={{
        enabled: false,
      }}
    >
      {
        <View style={styles.sheetContentWrapper}>
          <View style={styles.sheetHead}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={() => sheetRef.current.close()} >
              <Text><CloseCircle size="40" color="#9EA3AE" variant="Bold"/></Text>
            </TouchableOpacity>
          </View>
          <View>{sheetcontent}</View>
        </View>
      }
    </RBSheet>
  );
};
const styles = StyleSheet.create({
  sheetContentWrapper: {
    paddingHorizontal: 12,
    paddingTop: 28
  },
  sheetHead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }, 
  title: {
    fontSize: 20,
    fontFamily: "satoshi-black",
    color: "#192126",
    lineHeight: 24,
  },

});

export default BottomSheet;
