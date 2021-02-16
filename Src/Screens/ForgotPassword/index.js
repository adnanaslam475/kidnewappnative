import React, { Component } from 'react';
import {
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';
import Loading from '../../Components/Loader/index';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../Styles/Images';
import styles from './styles';
import { forgotUser } from '../../Redux/Actions/forgotPassword';
import Colors from '../../Styles/Colors';
import * as Constants from '../../Constants';

const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailError: false,
      invalidEmailError: false,
    };
  }


  submit = async e => {
    e.preventDefault();
    const { email } = this.state;
    if (email === '') {
      this.setState({ emailError: true });
    }
    else if (reg.test(email) === false) this.setState({ invalidEmailError: true });
    else {
      const opt = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email, mobile: true })
      }
      const response = await fetch(`http://192.168.1.103:5000/user/forgot-password`, opt);
      const data = await response.json()
      if (data.msg === 'EXISTS') {
        this.props.navigation.navigate('NewPassword', { token: data.token })
      }
      if (data.msg === 'NOT_EXISTS') {
        Alert.alert(
          "ERROR!!",
          "Email Not exists",
          [
            { text: "OK" }
          ],
          { cancelable: false }
        );
      }
    }
  }

  render() {
    const { loading } = this.props.forgot;
    const { emailError, invalidEmailError } = this.state;
    return (
      <>
        <ImageBackground source={Images.backgroundThird} style={styles.imageBackgroundWrapper} >
          <LinearGradient colors={[Colors.overlayColor, Colors.overlayColor]} style={styles.gradient} >
            <View style={styles.backIcon}>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('Login') }}>
                <Image source={Images.back} style={styles.backImage} />
              </TouchableOpacity>
            </View>
            <View style={styles.forgotContainer}>
              <Text style={styles.forgotTitle}>{Constants.FORGOT_TITLE}</Text>
              <Text style={styles.forgotDescription}>{Constants.FORGOT_DESCRIPTION}</Text>
            </View>
            <View style={styles.fotgoTextInputWrapper}>
              <TextInput
                style={styles.input}
                placeholderTextColor={Colors.borderColor}
                placeholder={"EMAIL"}
                autoCapitalize='none'
                onChangeText={(value) => {
                  this.setState({ email: value, emailError: false, invalidEmailError: false })
                }}
              />
              {emailError && (<Text style={styles.errorMessageStyle}>Email is required</Text>)}
              {invalidEmailError && (<Text style={styles.errorMessageStyle}>Email is not valid</Text>)}
            </View>
            <TouchableOpacity onPress={this.submit}>
              <View style={[styles.buttonWrapper, {
                borderColor: this.state.email.length == 0 ? Colors.borderColor : Colors.White,
                backgroundColor: this.state.email.length == 0 ? Colors.borderColor : Colors.White,
              }]}>
                <Text style={styles.continueText}>{Constants.RECOVER_PASSWORD}</Text>
              </View>
            </TouchableOpacity>
          </LinearGradient>
          {loading ? <Loading /> : null}
        </ImageBackground>
      </>
    );
  }
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