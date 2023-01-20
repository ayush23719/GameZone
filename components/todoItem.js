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
        fontSize: 30,
        fontSize: 20,
        height: 50,
        paddingLeft: 22,
        paddingTop: 10,
        marginTop: 16,
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        borderRadius: 30,
        backgroundColor: '#FFE4C7'
    }
});
