import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Button from "../Button/Button";


const PurchaseSummary = ({navigation}) => {
    return (
        <View style={{ marginTop: 40 }}>
            <View style={styles.infoWrapper}>
                <View>
                    <Text style={styles.infoTitle}>Payment status</Text>
                    <Text style={[{ color: '#017737' }, styles.infoValue]}>Successful</Text>
                </View>
                <View>
                    <Text style={[styles.infoTitle, { textAlign: 'right' }]}>Time</Text>
                    <Text style={[{ color: '#022C22' }, styles.infoValue]}>4:13pm - 17/03/24</Text>
                </View>
            </View>
            <View style={{}}>
                <Text style={styles.stationName}>Zacosem Petrol Station</Text>
                <View style={styles.stationInfo}>
                    <View style={styles.imageWrapper}>
                        <Image source={require('../../assets/Images/station-bg3.jpeg')} style={styles.image} />
                    </View>
                    <Text style={styles.address}>5C Rev. Ogunbiyi St, Ikeja GRA, Ikeja 101233, Port Harcourt, Rivers State.</Text>
                </View>
            </View>
            <View style={styles.purchaseWrapper}>
                <View style={[styles.borderRight, { paddingRight: 48 }]}>
                    <Text style={styles.purchaseTitle}>Amount</Text>
                    <Text style={styles.purchaseAmount}>N13,500</Text>
                </View>
                <View style={{ paddingLeft: 48 }}>
                    <Text style={styles.purchaseTitle}>Gas Quantity</Text>
                    <Text style={styles.purchaseAmount}>8.33 kg</Text>
                </View>
            </View>
            <Text style={styles.noteInfo}>Delivery fee included</Text>

            <View style={{marginTop: 40}}>
                <Button title='Purchase Again' action={() => navigation.navigate('OrderGas')}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    infoWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30
    },
    infoTitle: {
        fontFamily: 'satoshi-regular',
        color: '#6C727F',
        fontSize: 12,
        lineHeight: 16,
        // textAlign: 'center'
    },
    infoValue: {
        fontFamily: 'satoshi-black',
        fontSize: 16,
        lineHeight: 24,
    },
    stationName: {
        color: '#192435',
        lineHeight: 19,
        fontSize: 14,
        fontFamily: 'satoshi-black'
    },
    stationInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 17,
        maxWidth: 280
    },
    imageWrapper: {
        height: 32,
        width: 32,
        borderRadius: 100,
        marginEnd: 10
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 100
    },
    address: {
        fontFamily: 'satoshi-medium',
        fontSize: 12,
        lineHeight: 16,
        color: '#9EA3AE',
    },
    purchaseWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#F8F7F8',
        borderRadius: 8,
        paddingVertical: 18,
        marginTop: 20
    },
    borderRight: {
        borderRightWidth: 1,
        borderRightColor: '#D9D9D9',
    },
    purchaseTitle: {
        fontFamily: 'satoshi-regular',
        lineHeight: 16,
        fontSize: 12,
        color: '#6C727F',
        textAlign: 'center'
    },
    purchaseAmount: {
        fontFamily: 'satoshi-black',
        lineHeight: 24,
        fontSize: 16,
        color: '#022C22',
        textAlign: 'center'
    },
    noteInfo: {
        marginTop: 14,
        color: '#121212',
        fontFamily: 'satoshi-bold',
        fontSize: 12,
        lineHeight: 16
    }
});

export default PurchaseSummary;
