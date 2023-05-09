import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../Shared/Colors';

export default function Login() {
    return (
        <View>
            <Image source={require('../Assets/Images/login.png')} />
            <View style={styles.container}>
                <Text style={styles.welcomeText}>Welcome to EduApp</Text>
                <Text style={{ textAlign: 'center', marginTop: 80, fontSize: 20 }}>Login/Signup</Text>
                <View style={styles.button}>
                    <AntDesign name="googleplus" size={24} color="white" style={{ marginRight: 10 }} />
                    <Text style={{ color: Colors.white }}>Sign in with Google</Text>
                </View>
            </View>
        </View>
    );
};

// rnss for styling below
const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        marginTop: -25,
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    welcomeText: {
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: Colors.primary,
        padding: 10,
        margin: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    }
});
