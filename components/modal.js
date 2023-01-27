import React from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import Icon from "react-native-dynamic-vector-icons";
export default function NewItem() {
    const [modalOpen, setModalOpen] = React.useState(false);
    return (
        <View style={styles.container}>
            <Modal visible={modalOpen} animationType='slide' style={styles.modalBox} transparent={true}>
                <View style={styles.modalContent}>
                    <Text>Modal Content</Text>

                    <Icon
                        style={styles.cross}
                        name="circle-with-cross"
                        type="Entypo"
                        size={50}
                        color="#ff5050"
                        onPress={() => setModalOpen(false)}
                    />
                </View>
            </Modal >

            <Icon
                name="pluscircle"
                type="AntDesign"
                size={60}
                color="#54a0b8"
                onPress={() => setModalOpen(true)}
            />

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#606070',
    },
    modalContent: {
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',

    },
    cross: {
        position: 'absolute',
        top: 0,
        right: 0,

    },
    btn: {
        height: 70,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 70,
        elevation: 3,
        backgroundColor: '#54a0b8',
    },
});
