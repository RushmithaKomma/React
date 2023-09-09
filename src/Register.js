import {
    Text,
    SafeAreaView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

export default function Register() {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [address, setAddress] = useState('');
    const [profileSummary, setProfileSummary] = useState('');
    const [website, setWebsite] = useState('');

    // Length
    // Email Validation
    // Password Validation (8 Characters, 1 Capital, 1 small, 1 digit , 1 speical character)
    // Website Validation
    // Phone Numbers

    // Regex for

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.textContainer}>Full Name</Text>
            <TextInput
                style={styles.textInputContainer}
                placeholder={'* Full Name'}
                placeholderTextColor={'gray'}
                value={firstName}
                maxLength={20}
                editable={true}
                spellCheck={true}
                onChangeText={(text) => {
                    setFirstName(text);
                }}></TextInput>

            <Text style={styles.textContainer}>Email ID</Text>
            <TextInput
                style={styles.textInputContainer}
                placeholder={'* Email ID'}
                placeholderTextColor={'gray'}
                value={email}
                keyboardType={'email-address'}
                onChangeText={(text) => {
                    setEmail(text);
                }}></TextInput>

            <Text style={styles.textContainer}>Phone Number</Text>
            <TextInput
                style={styles.textInputContainer}
                placeholder={'* Phone Number'}
                keyboardType={'phone-pad'}
                placeholderTextColor={'gray'}
                value={phoneNo}
                onChangeText={(text) => {
                    setPhoneNo(text);
                }}></TextInput>
            <Text style={styles.textContainer}>WebSite</Text>
            <TextInput
                style={styles.textInputContainer}
                placeholder={'* WebSite'}
                keyboardType={'url'}
                keyboardAppearance={'light'}
                placeholderTextColor={'gray'}
                value={website}
                onChangeText={(text) => {
                    setWebsite(text);
                }}></TextInput>

            <Text style={styles.textContainer}>Address</Text>
            <TextInput
                style={styles.textInputContainer}
                placeholder={'* Address'}
                placeholderTextColor={'gray'}
                value={address}
                onChangeText={(text) => {
                    setAddress(text);
                }}></TextInput>

            <Text style={styles.textContainer}>Profile Summary</Text>
            <TextInput
                style={[styles.textInputContainer, { height: 100, paddingTop: 15 }]}
                placeholder={'* Profile Summary'}
                placeholderTextColor={'gray'}
                multiline={true}
                value={profileSummary}
                onChangeText={(text) => {
                    setProfileSummary(text);
                }}></TextInput>

            <TouchableOpacity
                style={{
                    backgroundColor: 'red',
                    height: 45,
                    margin: 30,
                    borderRadius: 30,
                }}
                onPress={() => {
                    if (firstName.length === 0) {
                        alert('Please enter your name');
                    } else if (firstName.length <= 3) {
                        alert('Name should contain atleast 3 characters');
                    }
                }}>
                <Text
                    style={{
                        textAlign: 'center',
                        marginTop: 10,
                        fontSize: 20,
                        color: 'white',
                    }}>
                    Sign Up
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 8,
    },
    textInputContainer: {
        height: 45,
        marginLeft: 20,
        marginRight: 20,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        color: 'black',
        borderRadius: 30,
    },
    textContainer: { marginLeft: 20, marginBottom: 2, marginTop: 15 },
});
