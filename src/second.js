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
            <Image source={require('../assets/award_bg.png')} style={styles.awardbg} />
            <Image source={require('../assets/awardPlatform.png')} style={styles.awardplatform} />
            <Image source={require('../assets/girlClap.png')} style={styles.girlclap} />
            <Image source={require('../assets/main-heart.png')} style={styles.image} />
            <Text style={styles.textheart}>15000</Text>
            <View style={styles.viewheart}>
                <Text style={styles.text}>Gave U Some Love</Text>
            </View>
            <TouchableOpacity style={styles.arrowtouch} onPress={handleArrowPress}>
                <Image source={require('../assets/arrow.png')} style={styles.arrow} />
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
                    <Image source={require('../assets/avtar2.png')} style={styles.profileimg} />
                    <Text style={styles.profileText1}>D-Lister</Text>
                    <View>
                        <Text style={styles.profileText2}>Sally</Text></View>
                </Animated.View>
            </View>

        </View>

    );
}
const win = Dimensions.get('window');
const ratio = win.width / 200;
const styles = StyleSheet.create({
    image: {
        flex: 1,
        position: "absolute",
        width: 130,
        height: 490,
        marginLeft: 113,
        resizeMode: 'contain'
    },
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
        height: 200,
        justifyContent: 'center',
    },
    profileimg: {
        position: "absolute",
        marginLeft: 100,
        width: 60,
        height: 70,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'yellow'
    },
    profileText1: {
        position: "absolute",
        marginTop: -650,
        marginLeft: 200,
        fontSize: 32,
        color: 'yellow',
    },
    profileText2: {
        position: "absolute",
        marginTop: 110,
        marginLeft: 230,
        fontSize: 20,
        color: 'white',
    },
    arrow: {
        width: 60,
        height: 70
    },
    arrowtouch: {
        flex: 1,
        position: "absolute",
        marginTop: 450,
        marginLeft: 270,
        resizeMode: 'contain',
    },
    text: {
        marginTop: 135,
        marginLeft: 50,
        fontSize: 32,
        color: 'yellow',
        textShadowOffset: { width: 1.1, height: 1.5 },
        textShadowRadius: 1,
        textShadowColor: 'gray',
    },
    textheart: {
        marginTop: 220,
        marginLeft: 140,
        fontSize: 25,
        color: 'yellow',
        position: 'absolute',

    },
    girlclap: {
        position: 'absolute',
        width: 200,
        marginTop: 300,
        marginLeft: 87,
        height: 400
    },
    awardplatform: {
        position: 'absolute',
        width: win.width,
        marginTop: 665
    },
    awardbg: {
        width: win.width,
        height: 390 * ratio,
    },
    viewheart: {
        shadowColor: '#FF0099',
        position: 'absolute'
    }
})
export default Second;