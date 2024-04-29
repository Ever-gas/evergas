import { StyleSheet, TouchableOpacity, Text } from 'react-native' 

const Button = ({ title, action }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={action}>
            <Text style={styles.textButton} >{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        width: '100%',
        paddingVertical: 16,
        paddingHorizontal: 48,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(2, 44, 34, 1)',
        borderWidth: 1,
        borderStyle: 'solid',
        // marginTop: 20,
        borderRadius: 8
    },
    textButton: {
        color: 'rgba(190, 242, 100, 1)',
        fontFamily: 'satoshi-black',
        fontSize: 16,
        lineHeight: 24
    }
})