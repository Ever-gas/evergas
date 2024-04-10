import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { useState } from 'react' 
import { SIZES } from '../../assets/Constants/SIZES'
import { MessageNotif } from 'iconsax-react-native'

const Dashboard = ({navigate}) => {
    // console.log(navigate)
 
    return (

        <SafeAreaView style={styles.wrapper} >
            <ScrollView> 
                <View>
                    
                </View>
                {/* <MessageNotif  size="32" color="#FF8A65"/> */}
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