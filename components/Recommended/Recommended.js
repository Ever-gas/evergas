import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SIZES } from '../../assets/Constants/SIZES';
import { Calendar } from 'iconsax-react-native';
import Svg, { Path } from "react-native-svg"
import { recommendations } from '../../lib/data';


const Recommended = ({onPress}) => { 
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Recommended</Text>
            <View style={{ flex: 1 }}>
                {
                    recommendations.map((el, idx) => {
                        return (
                            <View key={el.id} style={styles.wrapper}>
                                <View style={styles.topView}>
                                    <View style={styles.imageWrapper}>
                                        <Image source={el.image} style={styles.image} />
                                    </View>
                                    <View style={styles.textWrapper}>
                                        <Text style={styles.name}>{el.name}</Text>
                                        <Text style={styles.address}>{el.address}</Text>
                                    </View>
                                </View>
                                <View style={styles.bottomView}>
                                    <View>
                                        <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', marginBottom: 8 }}>
                                            <Calendar size="16" color="#9EA3AE" />
                                            <Text style={styles.closingTime}>Closes {el.closingTime}</Text>
                                        </View>
                                        <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', marginBottom: 8 }}>
                                            <Svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="none" 
                                            >
                                                <Path
                                                    stroke="#9EA3AE"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={1.5}
                                                    d="M14.053 5.72v4.56c0 .747-.4 1.44-1.046 1.82l-3.96 2.287a2.109 2.109 0 0 1-2.1 0L2.987 12.1a2.1 2.1 0 0 1-1.047-1.82V5.72c0-.746.4-1.44 1.047-1.82l3.96-2.287a2.109 2.109 0 0 1 2.1 0l3.96 2.287a2.108 2.108 0 0 1 1.046 1.82Z"
                                                />
                                                <Path
                                                    stroke="#9EA3AE"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={1.5}
                                                    d="M8 7.333a1.553 1.553 0 1 0 0-3.106 1.553 1.553 0 0 0 0 3.106ZM10.667 11.106c0-1.2-1.194-2.173-2.667-2.173-1.473 0-2.667.973-2.667 2.173"
                                                />
                                            </Svg>
                                            <Text style={styles.price}>1kg = N{el.pricePerKG}</Text>
                                        </View>
                                    </View>
                                     <TouchableOpacity style={styles.button} onPress={() => onPress()}>
                                        <Text style={styles.buttonText}>View</Text>
                                     </TouchableOpacity>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default Recommended;


const styles = StyleSheet.create({
    container: {
        marginTop: 42,
        flex: 1,
        paddingHorizontal: 12,
        paddingBottom: 51
    },
    header: {
        fontFamily: 'satoshi-bold',
        color: '#192126',
        fontSize: 20,
        lineHeight: 24,
        marginBottom: 16
    },
    wrapper: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E5E6EB',
        padding: 16,
        marginBottom: 16
    },
    topView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#F4F4F6',
        paddingBottom: 16
    },
    imageWrapper: {
        height: 56,
        width: 56,
        borderRadius: 100,
        marginEnd: 16
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 100
    },
    textWrapper: {
        width: 220,
        display: 'flex'
    },
    name: {
        fontFamily: 'satoshi-bold',
        fontSize: 18,
        lineHeight: 24,
        color: '#192126',
        marginBottom: 8
    },
    address: {
        fontFamily: 'satoshi-medium',
        fontSize: 12,
        lineHeight: 16,
        color: '#6C727F',
    },
    bottomView: {
        paddingTop: 17,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    closingTime: {
        fontFamily: 'satoshi-medium',
        fontSize: 12,
        lineHeight: 16,
        color: '#192126',
        marginLeft: 8
    },
    price: {
        fontFamily: 'satoshi-black',
        fontSize: 12,
        lineHeight: 16,
        color: '#192126',
        marginLeft: 8
    },
    button: {
        paddingVertical: 6,
        // paddingHorizontal: 32,
        borderRadius: 4,
        backgroundColor: '#022C22',
        height: 32,
        width: 70
    },
    buttonText: {
        fontFamily: 'satoshi-bold',
        fontSize: 14,
        lineHeight: 20,
        textAlign: 'center',
        color: '#FFFFFF'
    }
})