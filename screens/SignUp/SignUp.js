import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
// import { CheckBox } from 'react-native-elements';
import SignInWithApple from '../../components/SignInWithApple/SignInWithApple'
import SignInWithGoogle from '../../components/SignInWithGoogle/SignInWithGoogle'
import AuthBtn from '../../components/AuthBtn/AuthBtn'
import { SIZES } from '../../assets/Constants/SIZES'

const SignUp = (props) => {

    const [showPassword, setShowPassword] = useState(false)

    // Handle Navigation
    const goBack = () => props.navigation.goBack()

    const Navigate = () => props.navigation.navigate('SignIn')

    // Toggle show and hide password
    const togglePasswordView = () => {
        setShowPassword(!showPassword)
    }

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckBoxToggle = () => {
        setIsChecked(!isChecked);
    };


    return (
        <SafeAreaView style={styles.wrapper} showsVerticalScrollIndicator={false}>
            <ScrollView>
                <TouchableOpacity onPress={goBack} style={styles.iconBox} >
                    <Image source={require('../../assets/Combined-Shape.png')} />
                </TouchableOpacity>

                <View style={styles.header} >
                    <Text style={styles.heading}>Sign Up</Text>
                    <Text style={styles.subHeading}>Let’s start with some facts about you</Text>
                </View>
                <SignInWithGoogle />
                <SignInWithApple />
                <View style={styles.lineContainer} >
                    <View style={styles.line} ></View>
                    <View style={styles.orTextBox} >
                        <Text style={styles.orText} >OR</Text>
                    </View>
                </View>
                <View style={styles.namesContainer} >
                    <TextInput style={styles.textInput} placeholder='First Name' />
                    <TextInput style={styles.textInput} placeholder='Last Name' />
                </View>
                <View style={styles.inputBox} >
                    <TextInput style={styles.input} placeholder='Phone Number'

                        textContentType={'telephoneNumber'} />
                    <Image source={require('../../assets/call-outgoing.png')} />

                </View>
                <View style={styles.inputBox} >
                    <TextInput style={styles.input} placeholder='Email Address'

                        textContentType={'emailAddress'} />
                    <Image source={require('../../assets/notif.png')} />

                </View>
                <View style={styles.inputBox} >
                    <TextInput style={styles.input} placeholder='Password' tautoCorrect={false}
                        secureTextEntry={!showPassword}
                        textContentType={'password'} />
                    <TouchableOpacity onPress={togglePasswordView} >
                        {!showPassword ?
                            <Image source={require('../../assets/eye.png')} /> :
                            <Image source={require('../../assets/eye-close.png')} />}
                    </TouchableOpacity>

                </View>
                <View style={styles.check} >
                    {/*<CheckBox
                        title='Click Here'
                        checked={isChecked}
                        onPress={() => setIsChecked(!isChecked)}
                        />*/}
                    <Text style={styles.checkText} >By creating an account, you agree to our <Text style={styles.terms} >Terms</Text> and <Text style={styles.terms}  >Conditions</Text></Text>
                </View>
                <AuthBtn title='Sign In' />
                <TouchableOpacity onPress={Navigate} style={styles.NoAcct} >
                    <Text style={styles.NoAcctText} >Already have an account?</Text>
                    <Text style={styles.AuthText} >Sign In</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 60,
        // marginBottom: 10,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        flex: 1

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
    lineContainer: {
        position: 'relative',
        marginVertical: 15,
        marginBottom: 30,
        width: '100%',
        // backgroundColor: 'red',
        height: 10
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: 'rgba(229, 230, 235, 1)',

    },
    orTextBox: {
        position: 'absolute',
        top: '-220%',  // Place the box 50% from the top
        left: '43%', // Place the box 50% from the left
        // Offset by half of the box height
        // Offset by half of the box width
        backgroundColor: '#fff',
        padding: 10
    },
    orText: {
        fontFamily: 'satoshi-bold',
        fontSize: SIZES.medium
    },
    namesContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    textInput: {
        borderColor: 'rgba(229, 230, 235, 1)',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 18,
        borderRadius: 8,
        fontFamily: 'satoshi-regular',
        fontSize: SIZES.medium,
        marginBottom: 20,
        width: '48%'

    },
    input: {
        width: '90%'
    },
    inputBox: {
        marginBottom: 10,
        borderColor: 'rgba(229, 230, 235, 1)',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 18,
        borderRadius: 8,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    check: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkText: {
        alignItems: 'center',

    },
    NoAcct: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'center'
    },
    NoAcctText: {
        fontFamily: 'satoshi-regular',
        fontSize: SIZES.medium,
        marginRight: 3
    },
    AuthText: {
        fontFamily: 'satoshi-bold',
        fontSize: SIZES.medium,
    },
    terms: {
        fontFamily: 'satoshi-bold',
    }
})