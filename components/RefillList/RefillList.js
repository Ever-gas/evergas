import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { SIZES } from '../../assets/Constants/SIZES'


const RefillList = () => {
    const data = [
        {
            img: require(`../../assets/Images/station-img-1.jpg`),
            name: 'Yemsonat Filling Station',
            date: 'Mar 17, 2024',
            quantity: 31
        },
        {
            img: require(`../../assets/Images/station-img-5.jpg`),
            name: 'Zacosem Petrol',
            date: 'Mar 17, 2024',
            quantity: 10
        },
        {
            img: require(`../../assets/Images/station-img-2.jpg`),
            name: 'Nipco Filling Station',
            date: 'Mar 17, 2024',
            quantity: 16
        },
        {
            img: require(`../../assets/Images/station-img-3.jpg`),
            name: 'JP Gas Enterprise',
            date: 'Mar 17, 2024',
            quantity: 5
        },
        {
            img: require(`../../assets/Images/station-img-4.jpg`),
            name: 'Restopark Oil & Gas',
            date: 'Mar 17, 2024',
            quantity: 25
        },
    ] 

    return (
        <View style={styles.listWrapper}>
            <View style={{ marginBottom: 15 }}>
                <Text style={styles.listHeader}>Refill</Text>
                <Text style={styles.listDesc}>Recent gas refills</Text>
            </View>
            <View style={styles.listItems}>
                {
                    data.map((el, idx) => { 
                        return (
                            <View key={idx} style={styles.listItem}>
                                <View style={styles.leftItems}>
                                    <View style={styles.imageWrapper}>
                                        <Image source={el.img} style={styles.image} />
                                    </View>
                                    <View>
                                        <Text style={styles.refillStation}>{el.name}</Text>
                                        <Text style={styles.refillDate}>{el.date}</Text>
                                    </View>
                                </View>
                                <Text style={styles.refillQnty}>{el.quantity}kg</Text>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default RefillList;


const styles = StyleSheet.create({
    listWrapper: {
        paddingStart: 3
    },
    listHeader: {
        fontFamily: 'satoshi-bold',
        fontSize: 20,
        lineHeight: 26,
        color: '#121212'
    },
    listDesc: {
        fontFamily: 'satoshi-regular',
        fontSize: SIZES.medium,
        lineHeight: 24,
        color: '#121212'
    },
    listItems: {
        paddingBottom: 130,
        flex: 1,
        // gap: 16
    },
    listItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
        borderBottomWidth: 1,
        borderColor: '#F2F5EB',
        paddingVertical: 16
    },
    leftItems: {display: 'flex', flexDirection: 'row', alignItems: 'center'},
    imageWrapper: {
        height: 40,
        width: 40,
        borderRadius: 100,
        marginEnd: 13
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 100
    },
    refillStation: {
        fontFamily: 'satoshi-bold',
        fontSize: SIZES.medium,
        lineHeight: 24,
        color: '#192126'
    },
    refillDate: {
        fontFamily: 'satoshi-regular',
        fontSize: 12,
        lineHeight: 16,
        color: '#6C727F'
    },
    refillQnty: {
        fontFamily: 'satoshi-bold',
        fontSize: 16,
        lineHeight: 19,
        color: '#192126'
    }
})