import React, { useReducer, useState } from 'react';
import {
    View,
    ImageBackground,
    Text,
    TouchableOpacity,
    TextInput,
    Alert
} from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../Styles/Images';
import styles from './styles';
import { forgotUser } from '../../Redux/Actions/forgotPassword';
import Colors from '../../Styles/Colors';


const ForgotPassword = ({ navigation }) => {
    const [password, setnewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [match, setMatch] = useState('');

    const submit = async e => {
        e.preventDefault();
        const opt = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ password: password, token: navigation.state.params.token })
        }
        if (password !== confirmPassword) {
            setMatch('password dont match');
            return;
        }
        const response = await fetch(`http://192.168.1.103:5000/user/reset-password`, opt);
        const data = await response.json()
        if (data.msg === 'SUCCESS') {
            props.navigation.navigate('/login')
        }
        if (data.msg === 'EXPIRED') {
            Alert.alert(
                "ERROR!!",
                "SESSION expired",
                [
                    { text: "OK" }
                ],
                { cancelable: false }
            );
        }
    }


    return (
        <>
            <ImageBackground source={Images.backgroundThird} style={styles.imageBackgroundWrapper} >
                <LinearGradient colors={[Colors.overlayColor, Colors.overlayColor]} style={styles.gradient} >
                    <View style={styles.backIcon}>

                    </View>
                    <View style={styles.forgotContainer}>
                        <Text style={styles.forgotTitle}>Enter new password</Text>
                        {/* <Text style={styles.forgotDescription}>Enter confirm password</Text> */}
                    </View>
                    <View style={styles.fotgoTextInputWrapper}>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor={Colors.borderColor}
                            placeholder='Enter new password'
                            autoCapitalize='none'
                            value={password}
                            onChangeText={text => { setnewPassword(text) }}
                        />
                    </View>
                    <View style={styles.fotgoTextInputWrapper}>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor={Colors.borderColor}
                            placeholder='Confirm your password'
                            autoCapitalize='none'
                            value={confirmPassword}
                            onChangeText={text => { setConfirmPassword(text) }}
                        />
                    </View>
                    <Text>{match}</Text>
                    <TouchableOpacity onPress={submit}>
                        <View style={[styles.buttonWrapper, {
                            borderColor: password.length == 0 ? Colors.borderColor : Colors.White,
                            backgroundColor: Colors.White,
                        }]}>
                            <Text style={styles.continueText}>Submit</Text>
                        </View>
                    </TouchableOpacity>
                </LinearGradient>
            </ImageBackground>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        forgot: state.forgot,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        forgotPass: (user) => dispatch(forgotUser(user)),
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ForgotPassword);