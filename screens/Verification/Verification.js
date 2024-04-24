import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, } from 'react-native'
import { useState } from 'react'
import { OtpInput } from "react-native-otp-entry";
import AuthBtn from '../../components/AuthBtn/AuthBtn'
import { SIZES } from '../../assets/Constants/SIZES';
import AuthSuccessPopUp from '../../components/AuthSuccessPopUp/AuthSuccessPopUp';

const Verification = (props) => {

    // const [otp, setOtp] = useState('');

    // to show success modal
    const [showModal, setShowModal] = useState(false)


    const goBack = () => props.navigation.goBack()

    const Navigate = (screen) => props.navigation.navigate(screen)

    const move = () => {
        setShowModal(true)
        setTimeout(() => {
            Navigate('ResetPassword')
        }, 3000)
    }

    return (

        <SafeAreaView style={styles.wrapper} >
            {showModal && <AuthSuccessPopUp mainText={'OTP Sent!'} subText={'OTP was successfully sent'} />}
            {/**<ScrollView>*/}
            <TouchableOpacity onPress={goBack} style={styles.iconBox} >
                <Image source={require('../../assets/Combined-Shape.png')} />
            </TouchableOpacity>

            <View style={styles.header} >
                <Text style={styles.heading}>Verification Code</Text>
                <Text style={styles.subHeading}>Enter code that we have sent to your email <Text style={styles.email} >hamxxxxx@email.com</Text> </Text>
            </View>

            <View>
                <OtpInput numberOfDigits={5} onTextChange={(text) => console.log(text)} />
            </View>
            <AuthBtn title='Verify OTP' action={move} />
            <TouchableOpacity><Text style={styles.resendCodeText} >Resend Code</Text></TouchableOpacity>


            {/**</ScrollView>*/}
        </SafeAreaView>

    )
}

export default Verification

const styles = StyleSheet.create({
    wrapper: {
        paddingVertical: 60,
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: 'white',
        position: 'relative',


    },
    header: {
        marginBottom: 40,
    },
    heading: {
        fontFamily: 'satoshi-bold',
        fontSize: SIZES.extraLarge
    },
    subHeading: {
        fontFamily: 'satoshi-regular',
        fontSize: SIZES.large,
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
    email: {
        fontFamily: 'satoshi-bold',
        fontSize: SIZES.medium,
        color: 'rgba(25, 33, 38, 1)',
    },
    resendCodeText: {
        textAlign: 'center',
        fontFamily: 'satoshi-bold',
        marginTop: 20,
        fontSize: SIZES.medium,
        color: 'rgba(56, 64, 70, 1)',
    }

})