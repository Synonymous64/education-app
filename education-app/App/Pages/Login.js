import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../Shared/Colors';
import { AuthContext } from '../Context/AuthContext';
import Services from '../Shared/Services';

export default function Login() {
    WebBrowser.maybeCompleteAuthSession();
    const [accessToken, setAccessToken] = useState();
    const [userInfo, setUserInfo] = useState();
    const { userData, setUserData } = useContext(AuthContext);
    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: '809331706150-ukgb615oju681ffta9b0jonisr3hf1nh.apps.googleusercontent.com',
        expoClientId: '809331706150-jrchcb7aeslbjdgmlj25kj5thg7d96ds.apps.googleusercontent.com'
    });

    useEffect(() => {
        if (response?.type == 'success') {
            setAccessToken(response.authentication.accessToken);
            console.log(response.authentication.accessToken);
            getUserData();
        }
    }, [response])

    const getUserData = async () => {
        try {
            const resp = await fetch(
                "https://www.googleapis.com/userinfo/v2/me",
                {
                    headers: { Authorization: `Bearer ${response.authentication.accessToken}` },
                }
            );

            const user = await resp.json();
            setUserInfo(user);
            console.log("User Details", user);
            setUserData(user);
            await Services.setUserAuth(user);
        } catch (error) {
            // Add your own error handler here
        }
    };
    return (
        <View>
            <Image source={require('../Assets/Images/login.png')} />
            <View style={styles.container}>
                <Text style={styles.welcomeText}>Welcome to EduApp</Text>
                <Text style={{ textAlign: 'center', marginTop: 80, fontSize: 20 }}>Login/Signup</Text>
                <TouchableOpacity style={styles.button}
                    onPress={() => promptAsync()}
                >
                    <AntDesign name="googleplus" size={24} color="white" style={{ marginRight: 10 }} />
                    <Text style={{ color: Colors.white }}>Sign in with Google</Text>
                </TouchableOpacity>
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
