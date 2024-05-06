import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import Svg, { Mask, Path, Circle } from "react-native-svg"
import { Alarm } from 'iconsax-react-native'
import { SIZES } from '../../assets/Constants/SIZES'

const GasLevelEstimation = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.pattern}>
                <Image source={require('../../assets/Images/pattern.png')} />
            </View>
            <Text style={styles.header}>Gas level Estimation</Text>
            <View style={styles.estimate}>
                <View>
                    <Svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={175}
                        height={175}
                        fill="none"
                    // {...props}
                    >
                        <Mask id="a" fill="#fff">
                            <Path d="M157.401 87.401c0 38.66-31.34 70-70 70s-70-31.34-70-70 31.34-70 70-70 70 31.34 70 70Zm-129.5 0c0 32.861 26.64 59.5 59.5 59.5 32.861 0 59.5-26.639 59.5-59.5 0-32.86-26.639-59.5-59.5-59.5-32.86 0-59.5 26.64-59.5 59.5Z" />
                        </Mask>
                        <Path
                            stroke="#384046"
                            strokeWidth={24}
                            d="M157.401 87.401c0 38.66-31.34 70-70 70s-70-31.34-70-70 31.34-70 70-70 70 31.34 70 70Zm-129.5 0c0 32.861 26.64 59.5 59.5 59.5 32.861 0 59.5-26.639 59.5-59.5 0-32.86-26.639-59.5-59.5-59.5-32.86 0-59.5 26.64-59.5 59.5Z"
                            mask="url(#a)"
                        />
                        <Mask id="b" fill="#fff">
                            <Path d="M154.345 66.944a70 70 0 1 1-65.713-49.532l-.308 17.498a52.5 52.5 0 1 0 49.285 37.148l16.736-5.114Z" />
                        </Mask>
                        <Path
                            stroke="#BBF246"
                            strokeWidth={32}
                            d="M154.345 66.944a70 70 0 1 1-65.713-49.532l-.308 17.498a52.5 52.5 0 1 0 49.285 37.148l16.736-5.114Z"
                            mask="url(#b)"
                        />
                        <Mask id="c" fill="#fff">
                            <Path d="M129.401 87.401c0 23.196-18.804 42-42 42-23.195 0-42-18.804-42-42s18.804-42 42-42 42 18.804 42 42Zm-83.16 0c0 22.732 18.428 41.16 41.16 41.16 22.732 0 41.16-18.428 41.16-41.16 0-22.732-18.428-41.16-41.16-41.16-22.732 0-41.16 18.428-41.16 41.16Z" />
                        </Mask>
                        <Path
                            stroke="#394150"
                            strokeWidth={4}
                            d="M129.401 87.401c0 23.196-18.804 42-42 42-23.195 0-42-18.804-42-42s18.804-42 42-42 42 18.804 42 42Zm-83.16 0c0 22.732 18.428 41.16 41.16 41.16 22.732 0 41.16-18.428 41.16-41.16 0-22.732-18.428-41.16-41.16-41.16-22.732 0-41.16 18.428-41.16 41.16Z"
                            mask="url(#c)"
                        />
                        <Circle
                            cx={89.433}
                            cy={86.475}
                            r={15.143}
                            fill="#384046"
                            stroke="#192126"
                            strokeWidth={4}
                            transform="rotate(70.566 89.433 86.475)"
                        />
                        <Path
                            fill="#fff"
                            d="M133.922 72.852c1.18-.177 1.623 1.49.511 1.921L91.334 91.517a6.137 6.137 0 1 1-3.135-11.79l45.723-6.875Z"
                        />
                        <Circle
                            cx={88.977}
                            cy={86.09}
                            r={2.571}
                            fill="#192126"
                            transform="rotate(123.228 88.977 86.09)"
                        />
                    </Svg>
                </View>
                <Text style={styles.numberOfDays}>28-30<Text style={styles.days}>/days</Text></Text>
            </View>
            <View style={styles.reminderWrapper}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.head}>Reminder</Text>
                    <Text style={styles.description}>Set a weekly or monthly reminder for when to refill your gas</Text>
                </View>
                <View style={styles.iconWrapper}>
                    <Alarm size="24" color="#FFFFFF" variant="Bold" />
                </View>
            </View>
        </View>

    )
}

export default GasLevelEstimation;

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 25,
        // height: 358,
        backgroundColor: '#192126',
        borderRadius: 14,
        position: 'relative',
        padding: 12
    },
    pattern: {
        position: 'absolute',
        left: 200,
    },
    header: {
        color: '#FFFFFF',
        fontFamily: 'satoshi-bold',
        fontSize: SIZES.large,
        paddingStart: 12,
        paddingTop: 12
    },
    estimate: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginTop: 15
    },
    numberOfDays: {
        fontFamily: 'satoshi-bold',
        color: '#FFFFFF',
        lineHeight: 48,
        fontSize: 24,
        // paddingEnd: 15,
        marginBottom: 20
    },
    days: {
        fontSize: SIZES.medium,
        lineHeight: 48
    },
    reminderWrapper: {
        height: 90,
        backgroundColor: '#384046',
        marginTop: 30,
        borderRadius: 8,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    head: {
        fontFamily: 'satoshi-medium',
        color: '#9EA3AE',
        lineHeight: 16,
        fontSize: 12,
        marginBottom: 4
    },
    description: {
        fontFamily: 'satoshi-medium',
        color: '#FFFFFF',
        lineHeight: 19,
        fontSize: 14,

    },
    iconWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4D5461',
        height: 40,
        width: 40,
        borderRadius: 100,
        marginTop: 15
    },
})