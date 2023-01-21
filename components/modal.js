import React from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';

export default function Modal() {
    const [modalOpen, setModalOpen] = React.useState(false);
    return (
        <View style={styles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <View style={styles.modalContent}>
                    <Text>Modal Content</Text>
                    <Button title='Close' onPress={() => setModalOpen(false)} />
                </View>
            </Modal>
            <Button title='Open Modal' onPress={() => setModalOpen(true)} />
        </View>
    );
}