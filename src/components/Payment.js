import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PaymentScreen = () => {
    const handlePayment = () => {
        // Logika pembayaran
        alert('Payment successful!');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Payment Screen</Text>
            <Button title="Pay Now" onPress={handlePayment} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default PaymentScreen;