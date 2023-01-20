import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>

            <Text style={styles.greet}>Hello, </Text>
            <Text style={styles.name}>Ayush </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 190,
        paddingTop: 30,
        backgroundColor: '#FFC872',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40
    },

    greet: {
        textAlign: 'center',
        color: 'black',
        fontSize: 40,
        textAlign: 'center',
        fontFamily: 'Pacifico',
    },
    name: {
        textAlign: 'center',
        color: 'black',
        fontSize: 45,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#41436A',
        fontFamily: 'Poppins-SemiBold',
    }
});