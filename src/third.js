import React , { useEffect, useState } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    Animated, 
    TouchableOpacity
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions } from 'react-native';
import Home from './Home';
import { useNavigation } from '@react-navigation/native';
const Third = () => {
  const navigation = useNavigation();
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
        <Image source={require('../assets/award_bg.png')} style={{
            width: win.width,
            height: 390 * ratio,
        }} />
        <Image source={require('../assets/awardPlatform.png')} style={{ position: 'absolute', width: win.width, marginTop: 665 }} />
        <Image source={require('../assets/girlClap.png')} style={{ position: 'absolute', width: 200, marginTop: 300, marginLeft: 87, height: 400 }} />
        <Image source={require('../assets/main-heart.png')} style={styles.image} />
        <Image source={require('../assets/congrats.png')} style={{
            flex: 1,
            position: "absolute",
            width: 90,
            height: 650,
            marginLeft: 245,
            resizeMode: 'contain'}} />
        <View style={{ shadowColor: '#FF0099', position: 'absolute'}}>
            <Text style={{
                marginTop: 70, marginLeft: 50, fontSize: 32, color: 'yellow', textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 1,
                textShadowColor: 'gray',
            }}>4 Friends Gave U </Text>
             <Text style={{
                marginTop: 0, marginLeft: 100, fontSize: 32, color: 'yellow', textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 1,
                textShadowColor: 'gray',
            }}>Some Love</Text>
        </View>
        <View>
      <Text style={{ fontSize: 24,color:"yellow",position:"absolute",marginTop:-480,marginLeft:140, textShadowOffset: { width: 1, height: 1 },textShadowRadius: 1,textShadowColor: 'lightyellow', }}>{Math.floor(count)}</Text>
      {animationComplete }
    </View>
    <TouchableOpacity onPress={handleGoBack} style={{flex: 1,
                position: "absolute",
                marginTop:450,
                marginLeft: 270,
                resizeMode: 'contain',}}>
       <Image source={require('../assets/arrow.png')} style={{width: 60,height: 70}}/>
      </TouchableOpacity>
    </View>
    )
}
export default Third