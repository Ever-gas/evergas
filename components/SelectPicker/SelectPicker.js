import { View, Text, StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { ArrowDown2, ArrowUp2 } from 'iconsax-react-native';

const SelectPicker = ({ lableText, placeholder, data }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{lableText}</Text>
            <SelectDropdown
                data={data}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem);
                    // Handle the selected item
                }}
                renderButton={(selectedItem, isOpened) => { 
                    return (
                        <View style={styles.dropdownButtonStyle}>
                            <Text style={styles.dropdownButtonTxtStyle}>
                                {(selectedItem && selectedItem) || `${placeholder}`}
                            </Text>
                            <Text style={styles.dropdownButtonArrowStyle}>
                                {isOpened ? <ArrowUp2 color='#9EA3AE' size="16" /> : <ArrowDown2 color='#9EA3AE' size="16" />}
                            </Text>
                        </View>
                    )
                }}
                renderItem={(item, index, isSelected) => (
                    <View
                        style={{
                            ...styles.dropdownItemStyle,
                            ...(isSelected && { backgroundColor: '#D2D9DF' }),
                        }}
                    >
                        <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
                    </View>
                )}
                showsVerticalScrollIndicator={false}
                dropdownStyle={styles.dropdownMenuStyle}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    label: {
        lineHeight: 20,
        fontSize: 14,
        fontFamily: 'satoshi-medium',
        color: '#19212680',
        marginBottom: 8
    },
    dropdownButtonStyle: { 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E5E6EB',
        borderRadius: 8,
        padding: 16
    },
    dropdownButtonTxtStyle: {
        lineHeight: 24,
        fontSize: 16,
        fontFamily: 'satoshi-medium',
        color: '#192126',
    },
    dropdownButtonArrowStyle: {
        // width: 24,
        // height: 24,
        // borderWidth: 1.5,
        // borderColor: '#9EA3AE', 
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    dropdownItemTxtStyle: {
        lineHeight: 24,
        fontSize: 16,
        fontFamily: 'satoshi-medium',
        color: '#192126',
    },
    dropdownItemStyle: {
        padding: 16,
        maxHeight: 'auto'
    },
    dropdownMenuStyle: {
        // top: 150
    }
});

export default SelectPicker;
