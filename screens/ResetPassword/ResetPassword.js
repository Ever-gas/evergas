import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import AuthBtn from '../../components/AuthBtn/AuthBtn'
import { SIZES } from '../../assets/Constants/SIZES'
import AuthSuccessPopUp from '../../components/AuthSuccessPopUp/AuthSuccessPopUp'

const ResetPassword = (props) => {

    const goBack = () => props.navigation.goBack()

    const [showPassword, setShowPassword] = useState(false)
    const [confirmPassword, setShowConfirmPassword] = useState(false)

    // to show success modal
    const [showModal, setShowModal] = useState(false)

    // Toggle password Icon viewer
    const togglePasswordView = () => {
        setShowPassword(!showPassword)
    }

    const toggleConfirmPasswordView = () => {
        setShowConfirmPassword(!confirmPassword)
    }

    // function to show modal
    const move = () => {
        setShowModal(true)
        // setTimeout(() => {
        //     Navigate('ResetPassword')
        // }, 3000)
    }

    return (
        <SafeAreaView style={styles.wrapper} >
            {showModal && <AuthSuccessPopUp mainText={'Password Changed!'} subText={'You successfully changed your password'} />}
            <TouchableOpacity onPress={goBack} style={styles.iconBox} >
                <Image source={require('../../assets/Combined-Shape.png')} />
            </TouchableOpacity>

            <View style={styles.header} >
                <Text style={styles.resetHeading}>New Password</Text>
                <Text style={styles.resetSubHeading}>Create your new password to login</Text>
            </View>
            <View>

                <View style={styles.inputBox} >
                    <Text style={styles.textEmail} >New Password</Text>
                    <View style={styles.innerInputBox} >
                        <TextInput style={styles.input} placeholder='New Password' autoCorrect={false}
                            secureTextEntry={!showPassword}
                            textContentType={'password'} />
                        <TouchableOpacity onPress={togglePasswordView} >
                            {!showPassword ?
                                <Image source={require('../../assets/eye.png')} /> :
                                <Image source={require('../../assets/eye-close.png')} />}
                        </TouchableOpacity>
                    </View>


                </View>
                <View style={styles.inputBox} >
                    <Text style={styles.textEmail} >Confirm Password</Text>
                    <View style={styles.innerInputBox} >
                        <TextInput style={styles.input} placeholder='Confirm Password' autoCorrect={false}
                            secureTextEntry={!confirmPassword}
                            textContentType={'password'} />
                        <TouchableOpacity onPress={toggleConfirmPasswordView} >
                            {!confirmPassword ?
                                <Image source={require('../../assets/eye.png')} /> :
                                <Image source={require('../../assets/eye-close.png')} />}
                        </TouchableOpacity>

                    </View>
                </View>
            </View>

            <AuthBtn title='Set new password' action={move} />


        </SafeAreaView>
    )
}

export default ResetPassword



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
    resetHeading: {
        fontFamily: 'satoshi-bold',
        fontSize: SIZES.extraLarge,
        textAlign: 'center'
    },
    resetSubHeading: {
        fontFamily: 'satoshi-regular',
        fontSize: SIZES.large,
        color: 'rgba(25, 33, 38, 1)',
        marginTop: 8,
        textAlign: 'center'

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
        fontSize: SIZES.small,

    },
    inputBox: {
        marginBottom: 10,
        borderColor: 'rgba(229, 230, 235, 1)',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 18,
        borderRadius: 8,
        justifyContent: 'space-between',

    },
    innerInputBox: {
        flexDirection: 'row',
    },
    input: {
        width: '90%'
    },
    textEmail: {
        color: 'rgba(158, 163, 174, 1)',
        fontFamily: 'satoshi-regular',
        fontSize: SIZES.small,

    }
})