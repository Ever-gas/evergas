import { View, Text, StyleSheet, ScrollView } from "react-native"
import { SIZES } from "../../assets/Constants/SIZES"
import { LinearGradient } from 'expo-linear-gradient'
import AuthBtn from "../../components/AuthBtn/AuthBtn"
import UserPictures from "../../components/UserPictures/UserPictures"


const Onboarding = ({ navigation }) => {

    const Navigate = (screen) => navigation.navigate(screen)


    return (
        <ScrollView style={styles.container} >
            <View >
                <LinearGradient
                    colors={['#022c22', '#079271']}
                    start={{ x: 0, y: 1 }}
                    style={styles.onboardBox}
                    end={{ x: 1, y: 1 }}

                >
                    <Text style={styles.linearText} >An intuitive and seamless app that let’s you <Text style={styles.innerText} >easily order gas </Text> and get access to gas accessories, and handymen</Text>
                </LinearGradient>
                <View style={styles.bottomSectionContainer} >
                    <UserPictures />
                    <Text style={styles.startedText} >Join over 2k users to easily order gas. Get started in 3 mins.</Text>
                    <AuthBtn action={() => Navigate('SignIn')} title='Get Started' />
                </View>

            </View>
        </ScrollView>


    )
}

export default Onboarding

const styles = StyleSheet.create({
    container: {

        paddingHorizontal: 20,
        paddingTop: 60,
        backgroundColor: 'white',
        height: '100%'
    },
    onboardBox: {
        height: 450,
        width: '100%',
        borderRadius: SIZES.medium,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        padding: 20
    },
    linearText: {
        fontWeight: '700',
        fontSize: 37,
        lineHeight: 48,
        fontFamily: 'satoshi-bold',
        color: 'rgba(244, 245, 246, 0.48)'
    },
    innerText: {
        color: 'rgba(190, 242, 100, 1)',
    },
    startedText: {
        color: 'rgba(18, 18, 18, 1)',
        fontSize: 16,
        fontFamily: 'satoshi-bold',
        fontWeight: '500',
        marginVertical: SIZES.large
    },
    bottomSectionContainer: {
        backgroundColor: 'rgba(242, 245, 235, 1)',
        padding: 20,
        marginTop: 20,
        borderRadius: SIZES.medium,
    }
})