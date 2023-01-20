import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function TodoItem({ item, pressHandler }) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    item: {
        fontWeight: 'bold',
        color: '#41436A',
        fontFamily: 'Poppins',
        fontSize: 27,
        height: 80,
        paddingLeft: 22,
        paddingTop: 20,
        marginTop: 16,
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        borderRadius: 40,
        backgroundColor: '#FFE4C7'
    }
});
