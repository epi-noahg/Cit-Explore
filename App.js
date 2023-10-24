import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, View} from 'react-native';
import {PaperProvider} from "react-native-paper";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import LoginScreen from "./screens/Login.screen";
import HomeScreen from "./screens/Home.screen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false, gestureEnabled: false}}/>
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false, gestureEnabled: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
);}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: "100%",
  },
});
