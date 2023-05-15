
import React, { useEffect } from 'react';
import Countdown from 'react-native-countdown-component';
import {
    Text,
    View,
    Image,
    StyleSheet,
} from 'react-native';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Home = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Second')
        }, 5000)

    }, [])
    const win = Dimensions.get('window');
    const ratio = win.width / 200;
    var styles = StyleSheet.create({
        image: {
            flex: 1,
            position: "absolute",
            width: 130,
            height: 220,
            marginLeft: 100,
            resizeMode: 'contain'
        }
    })
    return (
        <View>
            <Image source={require('../assets/award_bg.png')} style={{
                width: win.width,
                height: 390 * ratio,
            }} />
            <Image source={require('../assets/awardPlatform.png')} style={{ position: 'absolute', width: win.width, marginTop: 665 }} />
            <Image source={require('../assets/girlClap.png')} style={{ position: 'absolute', width: 200, marginTop: 300, marginLeft: 87, height: 400 }} />
            <Text style={{ position: 'absolute', marginTop: 230, marginLeft: 70, fontSize: 32, color: 'yellow' }}>The Result R In</Text>
            <Image source={require('../assets/castingLogo.png')} style={styles.image} />
            <View style={{ position: 'absolute', marginTop: 120, marginLeft: 120, transform: [{ rotate: '-20deg' }] }}>
                <Countdown size={12}
                    until={17580}
                    digitStyle={{ backgroundColor: 'tranprent' }}

                    timeToShow={['H', 'M', 'S']}
                    timeLabels={{ m: '', s: '' }}
                    digitTxtStyle={{ color: 'white' }}
                    showSeparator
                    separatorStyle={{ color: 'white' }} />
            </View>
            <View style={{ shadowColor: '#FF0099', position: 'absolute', transform: [{ rotate: '-15deg' }] }}>
                <Text style={{
                    marginTop: 165, marginLeft: 50, fontSize: 32, color: '#FF0099', textShadowOffset: { width: 2, height: 2 },
                    textShadowRadius: 1,
                    textShadowColor: 'pink',
                }}>𝘊𝘈𝘚𝘛𝘐𝘕𝘎 𝘊𝘈𝘓𝘓</Text>
            </View>
        </View>

    );
}


export default Home;
