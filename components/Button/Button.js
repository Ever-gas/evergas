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
        padding: 18,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(2, 44, 34, 1)',
        borderWidth: 1,
        borderStyle: 'solid',
        marginTop: 20,
        borderRadius: 8
    },
    textButton: {
        color: 'rgba(190, 242, 100, 1)',
        fontFamily: 'satoshi-bold',
        fontSize: 15
    }
})