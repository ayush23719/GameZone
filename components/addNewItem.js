import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { useState } from 'react';
export default function NewItem({ submitHandler }) {
    const [text, setText] = useState('');
    const changeHandler = (val) => {
        setText(val);
    }
    return (
        <View>
            <TextInput style={styles.input} placeholder='New Item...' onChangeText={changeHandler} />
            <TouchableOpacity style={styles.button} onPress={() => submitHandler(text)}>
                <Text style={styles.buttonText}>Add Item</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold',
        color: '#41436A'
    },
    button: {
        borderRadius: 40,
        backgroundColor: '#54a0b8',
        padding: 20,
        marginTop: 20,
        width: 200,
        alignSelf: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold'
    }
});

