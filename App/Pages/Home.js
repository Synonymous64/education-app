import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import Services from '../Shared/Services';
import { AuthContext } from '../Context/AuthContext';
import WelcomeHeader from '../Components/WelcomeHeader';
import SearchBar from '../Components/SearchBar';

const Home = () => {
    const { userData, setUserData } = useContext(AuthContext);
    return (
        <View style={{ padding: 20 }}>
            {/* <Button title='Logout' onPress={() => { Services.Logout(); setUserData(null); }} /> */}
            <WelcomeHeader />
            <SearchBar />
        </View>
    )
}

export default Home;