import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native'
import { SIZES } from '../../assets/Constants/SIZES'

const RecentSearch = ({ image, address, onPress }) => {
    return (
        <TouchableOpacity onPress={() => onPress()} style={[styles.container]} >
            <View style={styles.imageWrapper}>
                <Image source={image} style={styles.image} />
            </View>
            <View style={{flex: 1}}>
                <Text style={styles.text}>{address}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: 'center',
        width: 274,
        height: 70,
        borderWidth: 1,
        borderColor: '#F9F9F9',
        borderRadius: 10,
        padding: 12,
        marginEnd: 10,
        marginVertical: 12
    },
    imageWrapper: { height: 45, width: 45, },
    image: { borderRadius: 6, width: '100%', height: '100%' },
    text: { fontFamily: "satoshi-medium", fontSize: 12, color: "#192435", lineHeight: 16, marginLeft: 9 }
})

export default RecentSearch