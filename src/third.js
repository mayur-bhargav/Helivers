import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Third = () => {
  const navigation = useNavigation();
  const startCount = 15000;
  const endCount = 40000;
  const animationDuration = 10000; // 10 seconds
  const handleGoBack = () => {
    navigation.navigate('Home');
  };
  const increment = ((endCount - startCount) * 10) / animationDuration;
  const [count, setCount] = useState(startCount);
  const [animationComplete, setAnimationComplete] = useState(false);
  useEffect(() => {
    let animationTimer = null;
    let animationStartTime = null;

    const startAnimation = () => {
      animationStartTime = Date.now();
      animationTimer = setInterval(updateCount, 10);
    };

    const updateCount = () => {
      const elapsedTime = Date.now() - animationStartTime;
      const currentCount = startCount + increment * elapsedTime / 10;

      if (currentCount < endCount) {
        setCount(currentCount);
      } else {
        setCount(endCount);
        setAnimationComplete(true);
        clearInterval(animationTimer);
      }
    };

    startAnimation();

    return () => {
      clearInterval(animationTimer);
    };
  }, []);


  return (
    <View>
      <Image source={require('../assets/award_bg.png')} style={styles.awardbg} />
      <Image source={require('../assets/awardPlatform.png')} style={styles.awardplatform} />
      <Image source={require('../assets/girlClap.png')} style={styles.girlsclap} />
      <Image source={require('../assets/main-heart.png')} style={styles.image} />
      <Image source={require('../assets/congrats.png')} style={styles.congrats} />
      <View style={styles.view}>
        <Text style={styles.text1}>4 Friends Gave U </Text>
        <Text style={styles.text2}>Some Love</Text>
      </View>
      <View>
        <Text style={styles.textheart}>{Math.floor(count)}</Text>
        {animationComplete}
      </View>
      <TouchableOpacity onPress={handleGoBack} style={styles.arrowtouch}>
        <Image source={require('../assets/arrow.png')} style={styles.arrow} />
      </TouchableOpacity>
    </View>
  )
}
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
  },
  awardbg: {
    width: win.width,
    height: 390 * ratio,
  },
  awardplatform: { 
    position: 'absolute', 
    width: win.width, 
    marginTop: 665 
  },
  girlsclap: { 
    position: 'absolute', 
    width: 200, 
    marginTop: 300, 
    marginLeft: 87, 
    height: 400 },
  congrats: {
    flex: 1,
    position: "absolute",
    width: 90,
    height: 650,
    marginLeft: 245,
    resizeMode: 'contain'
  },
  text1: {
    marginTop: 70,
    marginLeft: 50, 
    fontSize: 32, 
    color: 'yellow', 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textShadowColor: 'gray'
  },
  text2: { 
    marginLeft: 100, 
    fontSize: 32, 
    color: 'yellow', 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textShadowColor: 'gray',
  },
  textheart: { 
    fontSize: 24, 
    color: "yellow", 
    position: "absolute", 
    marginTop: -480, 
    marginLeft: 140, 
    textShadowOffset: { width: 1, height: 1 }, 
    textShadowRadius: 1, 
    textShadowColor: 'lightyellow' 
  },
  arrowtouch: {
    flex: 1,
    position: "absolute",
    marginTop: 450,
    marginLeft: 270,
    resizeMode: 'contain',
  },
  arrow: { 
    width: 60, 
    height: 70 
  },
  view: { 
    shadowColor: '#FF0099', 
    position: 'absolute' 
  }
})
export default Third