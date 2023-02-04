import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';
import Icon from "react-native-dynamic-vector-icons";

export default function NewItem({ submitHandler }) {
    const [text, setText] = useState('');
    const changeHandler = (val) => {
        setText(val);
    }

    const [modalOpen, setModalOpen] = React.useState(false);
    return (
        <View style={styles.container}>
            <Modal visible={modalOpen} animationType='slide' style={styles.modalBox} transparent={true}>
                <TouchableOpacity style={styles.modalBox} onPress={() => setModalOpen(false)}>
                    <View style={styles.modalContent}>
                        <Icon
                            style={styles.cross}
                            name="cross"
                            type="Entypo"
                            size={40}
                            color="#c4c4c4"
                            onPress={() => setModalOpen(false)}
                        />
                        <Text style={styles.textHeading}>Add New Item</Text>
                        <TextInput style={styles.input} placeholder='New Item...' onChangeText={changeHandler} />
                        <TouchableOpacity style={styles.button} onPress={() => { submitHandler(text); setModalOpen(false) }}>
                            <Text style={styles.buttonText}>Add Item</Text>
                        </TouchableOpacity>
                    </View>

                </TouchableOpacity >

            </Modal >

            <Icon
                name="pluscircle"
                type="AntDesign"
                size={60}
                color="#54a0b8"
                onPress={() => { setModalOpen(true) }}
            />

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBox: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        justifyContent: 'center'
    },
    modalContent: {
        height: 600,
        width: 400,
        alignSelf: 'center',
        marginTop: 300,
        backgroundColor: "white",
        padding: 90,
        borderRadius: 40,
    },
    cross: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    input: {
        marginLeft: -40,
        width: 300,
        marginTop: 70,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold',
        color: '#41436A'
    },
    button: {
        height: 60,
        borderRadius: 40,
        backgroundColor: '#54a0b8',
        padding: 20,
        marginTop: 20,
        width: 200,
        alignSelf: 'center'
    },
    buttonText: {
        marginTop: -7,
        color: 'white',
        fontSize: 23,
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold'
    },
    textHeading: {
        marginTop: -40,
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'Pacifico',
        color: '#41436A'
    }
});
