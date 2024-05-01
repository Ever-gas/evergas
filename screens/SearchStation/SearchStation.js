import { useState } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View, Text, Image, StyleSheet, TextInput } from 'react-native';
import Button from '../../components/Button/Button';
import { ArrowLeft } from 'iconsax-react-native';

const SearchStation = ({ navigation }) => {
    const [number, onChangeNumber] = useState('');
    return (
        <SafeAreaView style={[styles.container]} >
            <View style={styles.header}>
                <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
                    <ArrowLeft size="19" color="#2B2A30" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Search for Stations</Text>
            </View>
            {/* search engine */}
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Enter Location"
                keyboardType="default"
                placeholderTextColor='#9EA3AE'
            />
            {/* recent search area */}
            <View style={{ marginTop: 26 }}>
                <Text style={{ fontSize: 14, fontFamily: "satoshi-black", lineHeight: 18, }}>Recent Search</Text>
                <ScrollView  horizontal='true'>
                    <View style={{ flexDirection: "row", marginTop: 12,height:68,width:247, gap:10 }}>
                        <View style={{ height: 32, width: 32, }}>
                            <Image source={require("../../assets/Images/station-img-5.jpg")} style={{ borderRadius: 6, width: 44, height: 44 }} />
                        </View>
                        <View style={{ left: 10 }}>
                            <Text style={{ fontFamily: "satoshi-black", fontSize: 12, color: "#192435", lineHeight: 16,width:170 }}>5C Rev.Ogunbiyi St, Ikeja GRA, Ikeja 121033</Text>
                            
                        </View>
                    </View>
                </ScrollView>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: 50,
        paddingHorizontal: 16
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
        paddingBottom: 18
    },
    input: {
        //   height: 56,
        width: "100%",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#C0C1CE80',
        borderRadius: 18,
        justifyContent: "center",
        alignContent: "center",
        marginTop: 40,
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
        display: 'flex',
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
        display: 'flex',
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
    }
})

export default SearchStation;
