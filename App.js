import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/Login';
import Register from './src/Register';
import Task1 from './src/Task1';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style ={{ flex:1, backgroundColor:'#8bc292 '}}>
 <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login} />
  <Stack.Screen name="Register" component={Register} />
  <Stack.Screen name="Task1" component={Task1} />
  </Stack.Navigator>
 </NavigationContainer>
</View>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
