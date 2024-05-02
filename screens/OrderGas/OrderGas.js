import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Platform, NativeModules, FlatList } from 'react-native'
import { useState } from 'react';
import { SIZES } from '../../assets/Constants/SIZES';
import { SearchNormal1 } from 'iconsax-react-native';
import { gasStations } from '../../lib/data';
import GasStation from '../../components/GasStation/GasStation';
import StationCards from '../../components/StationCards/StationCards'; 

const OrderGas = (props) => {
    const { StatusBarManager } = NativeModules;
    const {navigation} = props;
    // console.log(props)

    return (

        <SafeAreaView style={[styles.container, {}]} >
            <ScrollView  decelerationRate="fast" showsVerticalScrollIndicator={false}  style={{ flex: 1, paddingTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0, }}>
                <View style={styles.screenHeader}>
                    <View style={styles.innerView}>
                        <Text style={styles.headerText}>Gas Stations</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('SearchStation')} style={{ padding: 4 }}>
                            <SearchNormal1 size="20" color="#565560" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.flatListWrapper}>
                    <Text style={styles.flatlistText}>Favourite/Closest to you</Text>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={gasStations}
                        keyExtractor={station => station.id}
                        renderItem={({ item }) => {
                            return (
                                <GasStation
                                    image={item.image}
                                    name={item.name}
                                    address={item.address}
                                    onPress={() => navigation.navigate('PurchaseGas')}
                                />
                            )
                        }}
                    />
                </View>
                <StationCards title='Recommended' onPress={() => navigation.navigate('PurchaseGas')}/>

            </ScrollView>
        </SafeAreaView>

    )
}

export default OrderGas;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    screenHeader: {
        paddingVertical: 16,
        // paddingHorizontal: 14,
        borderBottomWidth: 1,
        borderBottomColor: "#F0F0F0",
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
    },
    innerView: { 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerText: {
        fontFamily: 'satoshi-bold',
        color: '#192126',
        fontSize: 20,
        lineHeight: 24
    },
    flatListWrapper: {
        marginTop: 16,
        paddingVertical: 12,
        marginBottom: 42
    },
    flatlistText: {
        fontFamily: 'satoshi-bold',
        color: '#192126',
        fontSize: SIZES.medium,
        lineHeight: 19,
        marginBottom: 16
    }

})