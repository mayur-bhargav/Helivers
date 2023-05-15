
import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Animated
} from 'react-native';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Second = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Third')
        }, 20000)

    }, [])
    const win = Dimensions.get('window');
    const ratio = win.width / 200;
    var styles = StyleSheet.create({
        image: {
            flex: 1,
            position: "absolute",
            width: 130,
            height: 490,
            marginLeft: 113,
            resizeMode: 'contain'
        }

    })
    const [isProfileVisible, setIsProfileVisible] = useState(false);
    const profileAnimation = useState(new Animated.Value(0))[0];

    const handleArrowPress = () => {
        setIsProfileVisible(!isProfileVisible);

        Animated.timing(profileAnimation, {
            toValue: isProfileVisible ? 0 : 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };

    const profileTranslateX = profileAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [500, 0],
    });

    const profileTranslateXReverse = profileAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 500],
    });


    return (

        <View>
            <Image source={require('../assets/award_bg.png')} style={{
                width: win.width,
                height: 390 * ratio,
            }} />
            <Image source={require('../assets/awardPlatform.png')} style={{ position: 'absolute', width: win.width, marginTop: 665 }} />
            <Image source={require('../assets/girlClap.png')} style={{ position: 'absolute', width: 200, marginTop: 300, marginLeft: 87, height: 400 }} />
            <Image source={require('../assets/main-heart.png')} style={styles.image} />
            <Text style={{
                marginTop: 220, marginLeft: 140, fontSize: 25, color: 'yellow',
                position: 'absolute',
               
            }}>15000</Text>
            <View style={{ shadowColor: '#FF0099', position: 'absolute' }}>
                <Text style={{
                    marginTop: 135, marginLeft: 50, fontSize: 32, color: 'yellow', textShadowOffset: { width: 1.1, height: 1.5 },
                    textShadowRadius: 1,
                    textShadowColor: 'gray',
                }}>Gave U Some Love</Text>
            </View>
            <TouchableOpacity style={{
                flex: 1,
                position: "absolute",
                marginTop: 450,
                marginLeft: 270,
                resizeMode: 'contain',
            }} onPress={handleArrowPress}>
                <Image source={require('../assets/arrow.png')} style={{ width: 60, height: 70 }} />
            </TouchableOpacity>
            <View style={styles.container}>

                <Animated.View
                    style={[
                        styles.profileContainer,
                        {
                            transform: [
                                {
                                    translateX: isProfileVisible ? profileTranslateX : profileTranslateXReverse,
                                },
                            ],
                        },
                    ]}
                >
                    <Image source={require('../assets/avtar2.png')} 
                    style={{ position: "absolute", 
                    marginTop: -650, 
                    marginLeft: 100, 
                    width: 60, 
                    height: 70, 
                    borderRadius: 2000, 
                    borderWidth: 2, 
                    borderColor: 'yellow' }} />
                    <Text style={{
                        position:"absolute",
                        marginTop: -650, 
                        marginLeft: 200,
                     fontSize: 32,
                      color: 'yellow', 
                      
                }}>D-Lister</Text>
                <Text style={{
                        position:"absolute",
                        marginTop: -610, 
                        marginLeft: 230,
                     fontSize: 20,
                      color: 'white', 
                }}>Sally</Text>
                </Animated.View>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrowButton: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: 'gray',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },

    profileContainer: {
        position: 'absolute',
        MarginTop: 100,
        right: 0,
        left: 0,
        height: 200,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileText: {
        fontSize: 24,
        textAlign: "center"
    },
});

export default Second;
