import React from 'react';
import { StyleSheet, Text, View, Pressable, Modal } from 'react-native';
import Icon from "react-native-dynamic-vector-icons";
export default function NewItem() {
    const [modalOpen, setModalOpen] = React.useState(false);
    return (
        <View style={styles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <View style={styles.modalContent}>
                    <Text>Modal Content</Text>
                    <Pressable onPress={() => setModalOpen(false)}>
                        <Text>X</Text>
                    </Pressable>
                </View>
            </Modal>

            <Icon
                style={styles.plus}
                name="pluscircle"
                type="AntDesign"
                size={60}
                color="#54a0b8"
                onPress={() => setModalOpen(true)}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {

        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        flex: 1,
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
