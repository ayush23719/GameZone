import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>
                <Text style={styles.greet}>Hello, </Text>
                <Text style={styles.name}>Ayush </Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 190,
        paddingTop: 38,
        backgroundColor: '#FFC872',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40
    },
    title: {
        paddingTop: 20,
        textAlign: 'center',
        color: 'black',
        fontSize: 30,

    },
    greet: {
        textAlign: 'center',
        c
    },
    name: {
        paddingTop: 50,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Nunito',
    }
});