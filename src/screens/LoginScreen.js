import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Image, Text } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'isal' && password === '1234') {
            console.log('Login Successful');
            console.log('Username:', username);
            console.log('Password:', password); 

            navigation.navigate('Home'); 
        } else {
            Alert.alert('Login Failed', 'Username or password is incorrect.');
        }
    };

    const goToRegister = () => {
        navigation.navigate('Register'); 
    };

    return (
        <View style={styles.container}>
            <Image 
                source={require('../assets/logo.png')} 
                style={styles.logo}
            />
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Login" onPress={handleLogin} color="blue" />
            <Text style={styles.linkText} onPress={goToRegister}>
                Don't have an account? Register here
            </Text>
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
    logo: {
        width: 200, 
        height: 200,
        marginBottom: 20, 
        alignSelf: 'center', 
        marginTop: 0, 
    },
    linkText: {
        marginTop: 20,
        color: 'blue',
        textDecorationLine: 'underline',
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

export default LoginScreen;
