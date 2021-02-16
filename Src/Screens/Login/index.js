import React, { Component } from 'react';
import {
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import Loading from '../../Components/Loader/index';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../Styles/Images';
import styles from './styles';
import Colors from '../../Styles/Colors';
import { loginUser } from '../../Redux/Actions/auth';
import * as Constants from '../../Constants';
import { ScrollView } from 'react-native-gesture-handler';
import { initalizeSocketService } from '../../Redux/Actions/get_user_conversations';

const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: '',
      emailError: false,
      passwordError: false,
      invalidEmailError: false,
    };
  }
  componentDidMount = () => {
    this.props.initalizeSocket()
  }
  submit = () => {
    const { email, password } = this.state;
    if (email === '') this.setState({ emailError: true });
    else if (reg.test(email) === false) this.setState({ invalidEmailError: true });
    else if (password === '') this.setState({ passwordError: true });
    else {
      const user = {
        email: email,
        password: password
      };
      this.props.login(user);
    }
  }
  render() {
    const { emailError, passwordError, invalidEmailError } = this.state;
    const { loading } = this.props.auth;

    return (
      <>
        <ImageBackground source={Images.backgroundThird} style={styles.imageBackgroundWrapper} >
          <LinearGradient colors={[Colors.overlayColor, Colors.overlayColor]} style={styles.gradient} />
          <View style={styles.mainContainer}>
            <View style={styles.logoWrapper}>
              <Image source={Images.logo} style={styles.logoFront} />
            </View>
            <ScrollView>
              <View style={styles.bottomLayout}>
                <Text style={styles.signText}>{Constants.SIGN_IN}</Text>
              </View>
              <View style={styles.textInputContainer}>
                <View style={styles.emailWrapper}>
                  <Image source={Images.email} style={{ marginBottom: 10 }} />
                  <TextInput
                    style={styles.emailInput}
                    value={this.state.email}
                    placeholder={'Email'}
                    placeholderTextColor={"#9C9C9C"}
                    autoCapitalize='none'
                    onChangeText={(value) => {
                      this.setState({ email: value, emailError: false, invalidEmailError: false })
                    }}
                  />
                </View>
                {emailError && (<Text style={styles.errorMessageStyle}>Email is required</Text>)}
                {invalidEmailError && (<Text style={styles.errorMessageStyle}>Email is not valid</Text>)}
                <View style={styles.passwordConstainer}>
                  <View style={styles.passwordWrapper}>
                    <Image source={Images.password} style={{ marginBottom: 10 }} />
                    <TextInput
                      style={styles.passwordInput}
                      secureTextEntry={true}
                      value={this.state.password}
                      placeholder={'Password'}
                      placeholderTextColor={"#9C9C9C"}
                      onChangeText={(value) => {
                        this.setState({ password: value, passwordError: false })
                      }}
                    />
                  </View>
                  <TouchableOpacity onPress={() => { this.props.navigation.navigate('ForgotPassword') }}>
                    <Text style={styles.forgotText}>{Constants.FORGOT_PASSOWRD}</Text>
                  </TouchableOpacity>
                </View>
                {passwordError && (<Text style={styles.errorMessageStyle}>Password is required</Text>)}
                <TouchableOpacity onPress={this.submit}>
                  <View style={[styles.buttonWrapper, {
                    borderColor: this.state.email.length == 0 || this.state.password.length == 0 ? Colors.borderColor : Colors.appHeaderColor,
                    backgroundColor: this.state.email.length == 0 || this.state.password.length == 0 ? Colors.borderColor : Colors.appHeaderColor,
                  }]}>
                    <Text style={styles.continueText}>{Constants.CONTINUE}</Text>
                  </View>
                </TouchableOpacity>
                <View
                  style={styles.seperatorContainer}>
                  <View
                    style={styles.leftSperator}
                  />
                  <Text
                    style={styles.orText}
                  >
                    Or
                        </Text>
                  <View
                    style={styles.rightSeperator}
                  />
                </View>
                <TouchableOpacity>
                  <View style={styles.buttonWrapperSocial}>
                    <Image source={Images.apple} />
                    <Text style={styles.continueText}>{Constants.APPLE}</Text>
                  </View>
                </TouchableOpacity>

              </View>
            </ScrollView>
            <Text style={styles.termCondition}>Terms & Conditions</Text>
          </View>
          {loading ? <Loading /> : null}
        </ImageBackground>

      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(loginUser(user)),
    initalizeSocket: () => dispatch(initalizeSocketService()),

  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);