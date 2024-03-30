import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function SignInWithApple() {
    return (
        <TouchableOpacity style={styles.appleContainer} >
            <View style={styles.appleBox} >
                <Image source={require('../../assets/Apple.png')} />
                <Text style={styles.appleText} >Sign in with Apple</Text>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    appleContainer: {
        width: '100%',
        padding: 18,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgba(108, 114, 127, 1)',
        borderWidth: 1,
        borderStyle: 'solid',
        marginBottom: 20,
        borderRadius: 8
    },
    appleBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    appleText: {
        fontSize: 16,
        color: 'background: rgba(25, 33, 38, 1)',
        fontFamily: 'satoshi-bold',
        marginLeft: 20
    }

})