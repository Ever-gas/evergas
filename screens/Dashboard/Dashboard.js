import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { useState } from 'react' 
import { SIZES } from '../../assets/Constants/SIZES'

const Dashboard = ({navigate}) => {
    // console.log(navigate)
 
    return (

        <SafeAreaView style={styles.wrapper} >
            <ScrollView>
                <Text>Contents coming soon</Text>
            </ScrollView>
        </SafeAreaView>

    )
}

export default Dashboard;

const styles = StyleSheet.create({
    wrapper: {
        paddingVertical: 60,
        paddingHorizontal: 20,
        flex: 1

    },
})