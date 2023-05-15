import { View, Text } from "react-native/types";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/Home";
import Second from "./src/second";
import Third from "./src/third";


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{
          headerShown: false
        }} />
         <Stack.Screen name='Second' component={Second} options={{
          headerShown: false
        }} />
         <Stack.Screen name='Third' component={Third} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App