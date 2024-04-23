import { View, Image, Text, StyleSheet } from "react-native"
import React from 'react'
import { SIZES } from "../../assets/Constants/SIZES"


const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageBox}>
                <View style={styles.bigBox} >
                    <View style={styles.smallBox}>
                        <Image source={require('../../assets/logo_002.png')} />
                    </View>
                </View>
            </View>
            <View>
                <Text style={styles.splashText} >evergas</Text>
                <Text style={styles.splashLink}>https://www.evergas.com</Text>
            </View>



        </View>
    )
}

export default SplashScreen


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center', alignItems: "center", height: '100%'
    },
    imageBox: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '80%'
    },

    smallBox: {
        height: 200,
        width: 200,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgba(217, 217, 217, 1)',
        borderStyle: 'solid',
        borderWidth: 1
    },

    bigBox: {
        height: 450,
        width: 450,
        borderRadius: 1000,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgba(217, 217, 217, 1)',
        borderStyle: 'solid',
        borderWidth: 1
    },

    splashText: {
        fontSize: SIZES.extraLarge,
        fontWeight: '700',
        textAlign: 'center',
        fontFamily: 'satoshi-bold',
    },
    splashLink: {
        color: 'rgba(101, 110, 122, 1)',
        fontSize: SIZES.small,
        marginTop: 5,
        textAlign: 'center',
        fontFamily: 'satoshi-bold',
    }
})