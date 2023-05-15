import { View, Text, Button } from 'react-native'
import React, { useContext, useEffect } from 'react'
import Services from '../Shared/Services';
import { AuthContext } from '../Context/AuthContext';
import WelcomeHeader from '../Components/WelcomeHeader';
import SearchBar from '../Components/SearchBar';
import GlobalAPI from '../Shared/GlobalAPI';

const Home = () => {
    const { userData, setUserData } = useContext(AuthContext);

    useEffect(() => {
        getMySlider();
    }, [])


    const getMySlider = async () => {
        const result = (await GlobalAPI.getSlider()).data;
        console.log("RESUILT", result);
    }

    return (
        <View style={{ padding: 20 }}>
            {/* <Button title='Logout' onPress={() => { Services.Logout(); setUserData(null); }} /> */}
            <WelcomeHeader />
            <SearchBar />
        </View>
    )
}

export default Home;