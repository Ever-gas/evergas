import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";


const AboutServiceCharge = () => {
    return (
        <View style={{ marginTop: 40 }}>
            <View>
                <Text style={styles.subTitle}>What is the Evergas Service Fee?</Text>
                <Text style={styles.paragraph}>The service fee is the breakdown fee that appears at Evergas checkout section. We know this fee is high, so we capped it at a fair percentage.</Text>
            </View>
            <View style={{ marginTop: 38 }}>
                <Text style={styles.subTitle}>Why do we charge this?</Text>
                <View>
                    <Text style={styles.paragraph}>Having cooking gas delivered to you anytime, anywhere is so convenient, but it can be extremely costly to operate a delivery service. We need to cover technology costs, transaction processing fees, and  support to do this effectively.</Text>
                    <Text style={[{paddingTop: 15,}, styles.paragraph]}>The various fees on our checkout ensure  we stay ahead of these costs and continue serving you, our deserving  customer.</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    subTitle: {
        fontFamily: 'satoshi-black',
        fontSize: 14,
        lineHeight: 19,
        color: '#192435',
        marginBottom: 20,
    },
    paragraph: {
        color: '#9EA3AE',
        fontSize: 13,
        lineHeight: 16,
        fontFamily: 'satoshi-medium'
    }
});

export default AboutServiceCharge;
