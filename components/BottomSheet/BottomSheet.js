import { useRef, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet"; 


const BottomSheet = ({shareRefSheet,height,dragDown,pressMask,sheetcontent }) => {

    return (
      <RBSheet
        ref={shareRefSheet}
        closeOnDragDown={dragDown}
        closeOnPressMask={pressMask}
        height={height}
        draggable={true}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0, 0, 9, 0.7)",
          },
          draggableIcon: {
            backgroundColor: "#E5E7EB",
          },
          container: {
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
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
      {sheetcontent}
      </RBSheet>
    );
};
const styles = StyleSheet.create({
  iconContainer: {
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#EFEFEF",
    borderWidth: 0.72,
    borderRadius: 50,
  },
  icon: {
    height: 9,
    width: 9,
  },

  title: {
    fontSize: 18,
    fontFamily: "bold",
    color: "#111827",
    lineHeight: 24.3,
  },
});

export default BottomSheet;
