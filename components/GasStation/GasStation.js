import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native'
import React from 'react' 
import { SIZES } from '../../assets/Constants/SIZES'

const GasStation = ({ image, name, address, onPress }) => {
    return (
        <TouchableOpacity onPress={() => onPress()} style={[styles.container]} >
            <ImageBackground
                source={image}
                imageStyle={{ borderRadius: 8 }}
                style={{height: '100%', width: '100%'}}
            >
                <View style={styles.textWrapper}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.address}>{address}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 320,
        // paddingHorizontal: 14,
        // paddingVertical: 28,
        marginRight: 14,
        flex: 1,
        resizeMode: "contain",
    },
    textWrapper: {
        height: '100%', 
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingHorizontal: 15,
        paddingBottom: 25
    },
    name: {
        fontFamily: 'satoshi-bold',
        fontSize: 18,
        lineHeight: 24,
        color: '#FFFFFF',
        marginBottom: 8
    },
    address: {
        fontFamily: 'satoshi-medium',
        fontSize: 12,
        lineHeight: 16,
        color: '#E5E6EB', 
    }
    
})

export default GasStation