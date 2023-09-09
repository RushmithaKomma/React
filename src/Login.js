import { Text, SafeAreaView, StyleSheet, View, ImageBackground, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';

function Login({ navigation }) {

    return (
        <View style={{ flex: 1, backgroundColor: 'orange', justifyContent: 'space-evenly', margin: 10 }}>

            <TouchableOpacity onPress={
                () => { navigation.navigate('Register') }}>
                <Text>
                    Login 
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={
                () => { navigation.navigate('Task1') }}>
                <Text>
                    Task 
                </Text>
            </TouchableOpacity>
        </View>
    );
}
export default Login;