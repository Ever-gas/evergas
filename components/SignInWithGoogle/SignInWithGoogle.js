import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function SignInWithGoogle() {
    return (
        <TouchableOpacity style={styles.googleContainer} >
            <View style={styles.googleBox} >
                <Image source={require('../../assets/Google.png')} />
                <Text style={styles.googleText} >Sign in with Google</Text>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    googleContainer: {
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
    googleBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    googleText: {
        fontSize: 16,
        color: 'background: rgba(25, 33, 38, 1)',
        fontFamily: 'satoshi-bold',
        marginLeft: 20
    }

})