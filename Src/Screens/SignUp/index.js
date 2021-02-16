import React, { Component } from 'react';
import {
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import moment from 'moment';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../Styles/Images';
import styles from './styles';
import Colors from '../../Styles/Colors';
import { updateUser } from '../../Redux/Actions/updateProfile';
import DatePicker from '../../Components/DatePicker';
import * as Constants from '../../Constants';
import Loading from '../../Components/Loader';
import {launchImageLibrary,launchCamera} from 'react-native-image-picker';
import { ScrollView } from 'react-native-gesture-handler';

const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: '',
      Dob: '',
      fullName: '',
      city: '',
      aboutMe: '',
      ImageSource: '',
      isDatePickerVisible: false,
      emailError: false,
      invalidEmailError: false,
      fullNameError: false,
      cityError: false,
      aboutMeError: false,
      DobError: false,
      userID: '',
      setPhoto: false
    };
  }
  componentDidMount = () => {
    const user = this.props.auth?.user?.user;
    this.setState({
      userID: user?._id,
      email: user?.email,
      fullName: user?.fullName,
      aboutMe: user?.aboutMe,
      city: user?.city,
      ImageSource: user?.userAvatar,
      Dob: user?.dateOfBirth,
    })
  }
  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };
    launchImageLibrary(options, response => {
      console.log('chala')
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {

        const uri = response.uri;
        const type = response.type;
        const name = response.fileName;
        const source = {
          uri,
          type,
          name,
        }
        const source1 = {
          uri: response.uri.replace("file://", ""),
          type: response.type,
          name: response.type,
        }
        if (Platform.OS == 'android') {
          this.cloudinaryUpload(source)
        }
        else {
          this.cloudinaryUpload(source1)
        }
        // this.setState({
        //   ImageSource: source,
        // });
      }
    });
  }
  cloudinaryUpload = async (photo) => {
    this.setState({ setPhoto: true })
    const data = new FormData()
    data.append('file', photo)
    data.append('upload_preset', 'HeliosHolding')
    data.append("cloud_name", "dag6nhf1d")
    fetch("https://api.cloudinary.com/v1_1/dag6nhf1d/image/upload", {
      method: 'post',
      body: data
    })
      .then(res => res.json())
      .then(data => {
        console.log("The Data is: ", data)
        this.setState({
          ImageSource: data.url,
        });
        this.setState({ setPhoto: false })
      })
      .catch(err => {
        console.log('NO THE ERRO', err)
        this.setState({ setPhoto: false })

      })
    // let data = {
    //   file: photo,
    //   upload_preset: 'HeliosHolding',
    //   cloud_name: "dag6nhf1d"
    // }

  }
  submit = () => {
    const user = this.props.auth?.user?.user;
    const { email, fullName, city, Dob, aboutMe } = this.state;
    if (fullName === '') this.setState({ fullNameError: true });
    else if (email === '') this.setState({ emailError: true });
    else if (reg.test(email) === false) this.setState({ invalidEmailError: true });
    else if (city === '') this.setState({ cityError: true });
    else if (aboutMe === '') this.setState({ aboutMeError: true });
    else if (Dob === '') this.setState({ DobError: true });
    else {
      const user = {
        fullName: fullName,
        email: email,
        dateOfBirth: moment.utc(Dob,).format('YYYY-MM-DD'),
        city: city,
        aboutMe: aboutMe,
        userAvatar: this.state.ImageSource,
        id: this.state.userID,
        valueChange: "first"
      };
      this.props.updateUserProfile(user);
    }
  }
  dobChange = () => {
    this.setState({ isDatePickerVisible: !this.state.isDatePickerVisible })
  }
  dateSet = (value) => {
    console.log("ayayayayaya", value)
    this.setState({ Dob: value })
  }
  render() {
    const { loading } = this.props.updateProfile;
    const { emailError, invalidEmailError, fullNameError, cityError, aboutMeError, DobError } = this.state;

    console.log("this.state.Dob", this.state.Dob)
    return (
      <>
        <ImageBackground source={Images.backgroundThird} style={styles.imageBackgroundWrapper} >
          <LinearGradient colors={[Colors.overlayColor, Colors.overlayColor]} style={styles.gradient} >
            <View style={styles.backIcon}>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('Login') }}>
                <Image source={Images.back} style={styles.backImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                <Image source={Images.add_photo} />
              </TouchableOpacity>
            </View>
            {this.state.ImageSource == '' ?
              < Image source={Images.avatar} style={styles.avatar} />
              :
              <Image source={{ uri: this.state.ImageSource }} style={styles.avatar1} />
            }
          </LinearGradient>
          <View style={styles.mainContainer}>
            {/* <View style={styles.logoWrapper}>
              <Image source={Images.logo} style={styles.logoFront} />
            </View> */}
            <ScrollView>
              <View style={styles.textInputContainer}>
                <View style={styles.emailWrapper}>
                  <Image source={Images.name} style={{ marginBottom: 10 }} />
                  <TextInput
                    style={styles.emailInput}
                    value={this.state.fullName}
                    placeholder={'Full Name'}
                    placeholderTextColor={"#9C9C9C"}
                    onChangeText={(value) => {
                      this.setState({ fullName: value })
                    }}
                  />
                </View>
                {fullNameError && (<Text style={styles.errorMessageStyle}>Full Name is required</Text>)}

                <View style={styles.emailWrapper}>
                  <Image source={Images.email} style={{ marginBottom: 10 }} />
                  <TextInput
                    style={styles.emailInput}
                    placeholder={'Email'}
                    value={this.state.email}
                    editable={false}
                    placeholderTextColor={"#9C9C9C"}
                  />
                </View>
                {emailError && (<Text style={styles.errorMessageStyle}>Email is required</Text>)}
                {invalidEmailError && (<Text style={styles.errorMessageStyle}>Email is not valid</Text>)}

                <View style={styles.emailWrapper}>
                  <Image source={Images.name} style={{ marginBottom: 10 }} />
                  <TextInput
                    style={styles.emailInput}
                    placeholder={'City'}
                    value={this.state.city}
                    placeholderTextColor={"#9C9C9C"}
                    onChangeText={(value) => {
                      this.setState({ city: value, cityError: false })
                    }}
                  />
                </View>
                {cityError && (<Text style={styles.errorMessageStyle}>City is required</Text>)}

                <View style={styles.aboutInputWrapper}>
                  <Image source={Images.name} style={{ marginBottom: 10 }} />
                  <TextInput
                    style={styles.aboutInput}
                    placeholder={'About Me'}
                    multiline={true}
                    value={this.state.aboutMe}
                    numberOfLines={10}
                    placeholderTextColor={"#9C9C9C"}
                    onChangeText={(value) => {
                      this.setState({ aboutMe: value, aboutMeError: false })
                    }}
                  />
                </View>
                {aboutMeError && (<Text style={styles.errorMessageStyle}>About is required</Text>)}

                <TouchableOpacity onPress={this.dobChange}>
                  <View style={styles.emailWrapper}>
                    <TouchableOpacity onPress={this.dobChange}>
                      <Image source={Images.name} style={{ marginBottom: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.dobChange}>
                      <TextInput
                        style={styles.emailInput}
                        value={this.state.Dob && moment.utc(this.state.Dob).format('YYYY-MM-DD')}
                        editable={false}
                        placeholder={'Date of Birth'}
                        placeholderTextColor={"#9C9C9C"}
                      />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
                {DobError && (<Text style={styles.errorMessageStyle}>Date of Birth is required</Text>)}

                {
                  this.state.isDatePickerVisible == true &&
                  <DatePicker isDatePickerVisible={this.state.isDatePickerVisible}
                    hideDate={this.dobChange}
                    getdate={this.dateSet}
                  />
                }
                <TouchableOpacity onPress={this.submit}>
                  <View style={[styles.buttonWrapper, {
                    borderColor: this.state.email.length == 0 && this.state.fullName.length == 0 && this.state.password.length == 0 && this.state.city.length == 0 && this.state.aboutMe.length == 0 && this.state.Dob.length == 0 ? Colors.borderColor : Colors.appHeaderColor,
                    backgroundColor: this.state.email.length == 0 && this.state.fullName.length == 0 && this.state.password.length == 0 && this.state.city.length == 0 && this.state.aboutMe.length == 0 && this.state.Dob.length == 0 ? Colors.borderColor : Colors.appHeaderColor,
                  }]}>
                    <Text style={styles.continueText}>{Constants.CONTINUE}</Text>
                  </View>
                </TouchableOpacity>

              </View>
            </ScrollView>
            <Text style={styles.termCondition}>Terms & Conditions</Text>
          </View>
          {loading ? <Loading /> : null}
          {this.state.setPhoto ? <Loading /> : null}
        </ImageBackground>

      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    updateProfile: state.updateProfile
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateUserProfile: (user) => dispatch(updateUser(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);