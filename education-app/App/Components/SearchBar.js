import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../Shared/Colors';
const SearchBar = () => {
    return (
        <View style={styles.container}>
            <FontAwesome name="search" size={24} color={Colors.gray} style={{ marginRight: 10 }} />
            <TextInput placeholder='Search' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        elevation: 2,
        marginTop: 10,
        alignItems: 'center',
    }
})

export default SearchBar;