import { View, Text, Image, StyleSheet, PanResponder, Animated } from 'react-native'

import React, { useRef } from 'react';

const AuthSuccessPopUp = ({ mainText, subText }) => {

    const translateX = useRef(new Animated.Value(0)).current;

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event(
                [null, { dx: translateX }],
                { useNativeDriver: false }
            ),
            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dx > 150) {
                    // If swiped to the right, animate off the screen
                    Animated.timing(translateX, {
                        toValue: 500, // You can adjust this value to control how far it swipes
                        duration: 200,
                        useNativeDriver: false,
                    }).start();
                } else {
                    // Otherwise, spring back to the original position
                    Animated.spring(translateX, {
                        toValue: 0,
                        duration: 200,
                        useNativeDriver: false,
                    }).start();
                }
            },
        })
    ).current;


    return (

        <Animated.View
            style={[
                styles.swipeableItem,
                { transform: [{ translateX }] }
            ]}
            {...panResponder.panHandlers}
        >
            <View style={styles.popUpContainer}>
                <Image style={styles.popUpImage} source={require('../../assets/Group 14087.png')} />
                <View style={styles.mainContainer} >
                    <Image style={styles.popUpMainImage} source={require('../../assets/image2.png')} />
                    <View>
                        <Text style={styles.mainText} >{mainText}</Text>
                        <Text style={styles.subText} >{subText}</Text>
                        <Text style={styles.swipeText} >Swipe to close</Text>
                    </View>
                </View>

            </View>
        </Animated.View>

    )
}

export default AuthSuccessPopUp

const styles = StyleSheet.create({
    swipeableItem: {
        zIndex: 89,
    },
    popUpContainer: {
        height: 120,
        width: '100%',
        backgroundColor: 'rgba(2, 44, 34, 1)',
        borderRadius: 8,
        padding: 15,
        position: 'absolute',
        top: 0,

    },

    popUpImage: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    mainContainer: {
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        alignItems: 'center',

    },
    popUpMainImage: {
        marginRight: 20,
        alignSelf: 'center'
    },
    mainText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'satoshi-bold',
    },
    subText: {
        color: 'rgba(158, 163, 174, 1)',
        fontSize: 14,
        width: 250,
        lineHeight: 16,
        fontFamily: 'satoshi-regular',
        marginVertical: 8
    },
    swipeText: {
        color: 'rgba(187, 242, 70, 1)',
        fontSize: 12,
        textDecorationLine: 'underline',
        fontFamily: 'satoshi-regular',
    }
})