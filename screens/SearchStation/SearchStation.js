import { useState } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View, Text, FlatList, StyleSheet, TextInput } from 'react-native';
import { gasStations } from '../../lib/data';
import RecentSearch from '../../components/RecentSearch/RecentSearch';
import StationCards from '../../components/StationCards/StationCards'
import { ArrowLeft } from 'iconsax-react-native';

const SearchStation = ({ navigation }) => {
    const [number, onChangeNumber] = useState('');
    return (
        <SafeAreaView style={[styles.container]} >
            <ScrollView decelerationRate="fast" showsVerticalScrollIndicator={false}  style={{flex: 1}}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
                        <ArrowLeft size="19" color="#2B2A30" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Search for Stations</Text>
                </View>
                {/* search engine */}
                <View style={{flex: 1, marginTop: 25,}}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="Enter Location"
                        keyboardType="default"
                        placeholderTextColor='#9EA3AE'
                    />
                </View>
                {/* recent search area */}
                <View style={styles.flatListWrapper}>
                    <Text style={styles.flatListTitle}>Recent Search</Text>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={gasStations}
                        keyExtractor={station => station.id}
                        renderItem={({ item }) => {
                            return (
                                <RecentSearch
                                    image={item.image}
                                    address={item.address}
                                    onPress={() => navigation.navigate('PurchaseGas')}
                                />
                            )
                        }}
                    />
                </View>
                <StationCards title='Search results' onPress={() => navigation.navigate('PurchaseGas')} />
            </ScrollView>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: 50,
        paddingHorizontal: 12
    },
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
        paddingBottom: 18
    },
    input: { 
        width: "100%",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#C0C1CE80',  
        fontSize: 16,
        fontFamily: "satoshi-regular",
        padding: 16,
        lineHeight: 24
    },
    headerText: {
        marginLeft: 20,
        color: '#161518',
        fontFamily: 'satoshi-bold',
        fontSize: 18,
        lineHeight: 24,
        letterSpacing: -0.2
    },
    infoWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 30
    },
    infoTitle: {
        fontFamily: 'satoshi-regular',
        color: '#6C727F',
        fontSize: 12,
        lineHeight: 16,
    },
    infoValue: {
        fontFamily: 'satoshi-black',
        // color: '#656E7A',
        fontSize: 16,
        lineHeight: 24,
    },
    steps: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 42,
        // paddingHorizontal: 13
    },
    step: {
        height: 5,
        width: 48,
        borderRadius: 20,
        backgroundColor: '#D9D9D9',
        marginRight: 10
    },
    completed: {
        backgroundColor: '#38C076'
    },
    flatListWrapper: {
        marginTop: 25,
        height: 100,
        marginBottom: 35
    },
    flatListTitle: { fontSize: 14, fontFamily: "satoshi-black", lineHeight: 18, }

})

export default SearchStation;
