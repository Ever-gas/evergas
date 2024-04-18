import { View, TextInput, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import AuthBtn from '../../components/AuthBtn/AuthBtn'
import { SIZES } from '../../assets/Constants/SIZES'

const ForgotPassword = (props) => {

    const goBack = () => props.navigation.goBack()

    const Navigate = (screen) => props.navigation.navigate(screen)

    return (

        <SafeAreaView style={styles.wrapper} >

            <TouchableOpacity onPress={goBack} style={styles.iconBox} >
                <Image source={require('../../assets/Combined-Shape.png')} />
            </TouchableOpacity>

            <View style={styles.header} >
                <Text style={styles.heading}>Forgot Your Password?</Text>
                <Text style={styles.subHeading}>Type your email address and we will send the verification code.</Text>
            </View>
            <View style={styles.textInput}>
                <Text style={styles.textEmail} >EMAIL</Text>
                <TextInput placeholder='Email Address' />

            </View>
            <AuthBtn title='Send OTP' action={() => Navigate('Verification')} />
        </SafeAreaView>
    )
}

export default ForgotPassword


const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 60,
        // marginBottom: 10,
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: 'white'

    },
    header: {
        marginBottom: 40
    },
    heading: {
        fontFamily: 'satoshi-bold',
        fontSize: SIZES.extraLarge
    },
    subHeading: {
        fontFamily: 'satoshi-regular',
        fontSize: SIZES.medium,
        color: 'rgba(25, 33, 38, 1)',
        marginTop: 8

    },
    iconBox: {
        borderColor: 'rgba(192, 193, 206, 0.5)',
        borderWidth: 1,
        borderStyle: 'solid',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 32,
        borderRadius: 8,
        marginBottom: 30
    },
    textInput: {
        borderColor: 'rgba(229, 230, 235, 1)',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 18,
        borderRadius: 8,
        fontFamily: 'satoshi-regular',
        fontSize: SIZES.medium,
        // paddingLeft: 8
    },
    textEmail: {
        color: 'rgba(158, 163, 174, 1)',
        fontFamily: 'satoshi-regular',
        fontSize: SIZES.small

    }
})