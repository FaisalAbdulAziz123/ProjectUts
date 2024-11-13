import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const RegisterScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Logika register
        console.log('Register Successful');
        console.log('Username:', username);
        console.log('Password:', password); // Hanya untuk tujuan demonstrasi

        // Navigasi kembali ke halaman login setelah berhasil register
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />
            <Button title="Register" onPress={handleRegister} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#FAF6E3',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 5,
        marginBottom: 15,
        paddingLeft: 10,
        backgroundColor: '#fff',
    },
});

export default RegisterScreen;
