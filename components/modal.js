import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import Icon from "react-native-dynamic-vector-icons";
export default function NewItem() {
    const [modalOpen, setModalOpen] = React.useState(false);
    return (
        <View style={styles.container}>
            <Modal visible={modalOpen} animationType='slide' style={styles.modalBox} transparent={true}>
                {/* <View style={styles.modalContent}>
                    <Text>Modal Content</Text>

                    <Icon
                        style={styles.cross}
                        name="circle-with-cross"
                        type="Entypo"
                        size={50}
                        color="#ff5050"
                        onPress={() => setModalOpen(false)}
                    />
                </View> */}
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
                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#41436A', fontFamily: 'Pacifico', top: 0 }}>Add New Item</Text>
                    </View>
                </TouchableOpacity>
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

});
