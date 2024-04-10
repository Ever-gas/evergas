import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { useState } from 'react'
import SignInWithGoogle from '../../components/SignInWithGoogle/SignInWithGoogle'
import SignInWithApple from '../../components/SignInWithApple/SignInWithApple'
import AuthBtn from '../../components/AuthBtn/AuthBtn'
import { SIZES } from '../../assets/Constants/SIZES'

const SignIn = (props) => {

    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordView = () => {
        setShowPassword(!showPassword)
    }

    const Navigate = (screen) => props.navigation.navigate(screen)




    return (

        <SafeAreaView style={styles.wrapper} >
            {/**<ScrollView>*/}
            <TouchableOpacity style={styles.iconBox} >
                <Image source={require('../../assets/Combined-Shape.png')} />
            </TouchableOpacity>

            <View style={styles.header} >
                <Text style={styles.heading}>Sign In</Text>
                <Text style={styles.subHeading}>It's nice to see you again</Text>
            </View>
            <SignInWithGoogle />
            <SignInWithApple />
            <View style={styles.lineContainer} >
                <View style={styles.line} ></View>
                <View style={styles.orTextBox} >
                    <Text style={styles.orText} >OR</Text>
                </View>
            </View>
            <View>
                <TextInput style={styles.textInput} placeholder='Email Address' />
                <View style={styles.inputBox} >
                    <TextInput style={styles.input} placeholder='Password' autoCorrect={false}
                        secureTextEntry={!showPassword}
                        textContentType={'password'} />
                    <TouchableOpacity onPress={togglePasswordView} >
                        {!showPassword ?
                            <Image source={require('../../assets/eye.png')} /> :
                            <Image source={require('../../assets/eye-close.png')} />}
                    </TouchableOpacity>

                </View>
            </View>
            <TouchableOpacity onPress={() => Navigate('ForgotPassword')}  >
                <Text style={styles.fgtPword} >Forgot Password?</Text>
            </TouchableOpacity>
            <AuthBtn title='Sign In' action={() => Navigate('Dashboard')}/>
            <TouchableOpacity onPress={() => Navigate('SignUp')} style={styles.NoAcct} >
                <Text style={styles.NoAcctText} >Don’t have an account?</Text>
                <Text style={styles.AuthText} >Sign Up</Text>
            </TouchableOpacity>
            {/**</ScrollView>*/}
        </SafeAreaView>

    )
}

export default SignIn

const styles = StyleSheet.create({
    wrapper: {
        paddingVertical: 60,
        paddingHorizontal: 20,
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
    textInput: {
        borderColor: 'rgba(229, 230, 235, 1)',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 18,
        borderRadius: 8,
        fontFamily: 'satoshi-regular',
        fontSize: 15,
        marginBottom: 20
        // paddingLeft: 8
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
    fgtPword: {
        alignSelf: 'flex-end',
        fontFamily: 'satoshi-bold',
        fontSize: SIZES.medium,
        color: 'rgba(25, 33, 38, 1)'
    },
    NoAcct: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
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
    }
})