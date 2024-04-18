import { View, StyleSheet, Image, Text } from "react-native"
import { SIZES } from "../../assets/Constants/SIZES"

const UserPictures = () => {
    return (
        <View style={styles.userImages} >
            <Image source={require('../../assets/Ellipse 108.png')} />
            <Image style={styles.userImage} source={require('../../assets/Ellipse 109.png')} />
            <Image style={styles.userImage2} source={require('../../assets/Ellipse 110.png')} />
            <Image style={styles.userImage3} source={require('../../assets/Ellipse 111.png')} />
            <Image style={styles.userImage4} source={require('../../assets/Ellipse 112.png')} />
            <Image style={styles.userImage5} source={require('../../assets/Ellipse 113.png')} />
            <View style={styles.userImage6} ><Text style={styles.numberText} >+2k</Text></View>
        </View>
    )
}

export default UserPictures

const styles = StyleSheet.create({
    userImages: {
        flexDirection: 'row',

    },
    userImage: {
        position: 'absolute',
        left: 47
    },
    userImage2: {
        position: 'absolute',
        left: 95
    },
    userImage3: {
        position: 'absolute',
        left: 140
    },
    userImage4: {
        position: 'absolute',
        left: 185
    },
    userImage5: {
        position: 'absolute',
        left: 230
    },
    userImage6: {
        position: 'absolute',
        left: 275,
        backgroundColor: 'white',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: 60
    },
    numberText: {
        color: 'rgba(18, 18, 18, 1)',
        fontSize: SIZES.large,
        fontFamily: 'satoshi-bold',
        fontWeight: '500',
    }
})