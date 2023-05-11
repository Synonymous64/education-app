import AsyncStorage from '@react-native-async-storage/async-storage';

const setUserAuth = async (value) => {
    await AsyncStorage.setItem('userData', JSON.stringify(value));
}

const getUserAuth = async () => {
    const data = await AsyncStorage.getItem('userData');
    return JSON.parse(data);
}

const Logout = () => {
    AsyncStorage.clear();
}

export default { setUserAuth, getUserAuth, Logout };