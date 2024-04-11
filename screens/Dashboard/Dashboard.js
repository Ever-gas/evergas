import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity,  ScrollView, StatusBar, Platform, NativeModules } from 'react-native'
import { useState } from 'react'
import { SIZES } from '../../assets/Constants/SIZES'
import { MessageNotif } from 'iconsax-react-native'
import GasLevelEstimation from '../../components/GasLevelEstimation/GasLevelEstimation'

const Dashboard = (props) => {
    const { StatusBarManager } = NativeModules;
    //   console.log(props)
    return (

        <SafeAreaView style={[styles.wrapper, {}]} >
            {/* <StatusBar translucent
                    backgroundColor="transparent"
                /> */}
            <ScrollView style={{backgroundColor: '#FFFFFF', paddingTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0,}}>
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <TouchableOpacity style={styles.imageWrapper}>
                            <Image style={styles.image} source={require('../../assets/evergas-user-img.png')} />
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.greetings}>Good Morning,</Text>
                            <Text style={styles.username}>Brayde</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.iconWrapper}>
                        <MessageNotif size="24" color="#017737" variant="Bold" />
                    </TouchableOpacity>
                </View>
                <GasLevelEstimation/>
            </ScrollView>
        </SafeAreaView>

    )
}

export default Dashboard;

const styles = StyleSheet.create({
    wrapper: {
        // paddingVertical: 60,
        paddingHorizontal: 15,
        flex: 1, 
        backgroundColor: '#FFFFFF'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 25
    },
    headerLeft: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imageWrapper: {
        // flex: 1,
        width: 40,
        height: 40,
        marginRight: 13,
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 94, 
        borderColor: 'linear-gradient(180deg, #FFFFFF 0%, rgba(209, 213, 219, 0.9) 45.37%, #E5E5E5 100%)',
        borderImageSlice: 1,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 94
    },
    greetings: {
        fontFamily: 'satoshi-regular',
        fontSize: 14,
        lineHeight: 21, 
    },
    username: {
        fontFamily: 'satoshi-bold',
        fontSize: SIZES.medium,
        lineHeight: 21
    },
    iconWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F4F5F6',
        height: 44,
        width: 44,
        borderRadius: 100
    }
})