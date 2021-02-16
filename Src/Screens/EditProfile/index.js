import React, { Component } from 'react';
import {
  View,
  ImageBackground,
  Text,
  Image,
  Platform,
  TouchableOpacity,

  TextInput
} from 'react-native';
import moment from 'moment';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../Styles/Images';
import styles from './styles';
import Colors from '../../Styles/Colors';
import Loading from '../../Components/Loader';
import DatePicker from '../../Components/DatePicker';
import * as Constants from '../../Constants';
import { updateUser } from '../../Redux/Actions/updateProfile';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { ScrollView } from 'react-native-gesture-handler';

const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userImage: '',
      email: '',
      city: '',
      fullName: '',
      isDatePickerVisible: false,
      Dob: '',
      aboutMe: '',
      interest: '',
      setPhoto: false,
      emailError: false,
      invalidEmailError: false,
      fullNameError: false,
      cityError: false,
      aboutMeError: false,
      DobError: false,
    };
  }
  componentDidMount = () => {
    const user = this.props.getProfile?.GetProfile?.userProfile;
    this.setState({
      userImage: user?.userAvatar,
      fullName: user?.fullName,
      email: user?.email,
      city: user?.city,
      Dob: user?.dateOfBirth,
      aboutMe: user?.aboutMe,
      interest: user?.interests,
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
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } 
      else {
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
        this.setState({
          userImage: data.url,
        });
        this.setState({ setPhoto: false })
      })
      .catch(err => {
        this.setState({ setPhoto: false })

      })
  }
  dobChange = () => {
    this.setState({ isDatePickerVisible: !this.state.isDatePickerVisible })
  }
  dateSet = (value) => {
    this.setState({ Dob: value })
  }
  submit = () => {
    const users = this.props.auth?.user?.user;
    const { email, fullName, city, Dob, aboutMe, interest } = this.state;
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
        userAvatar: this.state.userImage,
        id: users._id,
        valueChange: "third",
        interests: interest === '' ? '' : interest
      };
      this.props.updateUserProfile(user);
    }
  }
  render() {
    const { loading } = this.props.updateProfile;

    return (
      <>
        <ImageBackground source={Images.backgroundThird} style={styles.imageBackgroundWrapper} >
          <LinearGradient colors={[Colors.overlayColor, Colors.overlayColor]} style={styles.gradient} >
            <ScrollView>
              <View style={styles.backIcon}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Profile') }}>
                  <Image source={Images.back} style={styles.backImage} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.submit}>
                  <Text style={styles.saveText}>Save</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.mainContainer}>
                <Text style={styles.editProfileText}>{Constants.EDIT_PROFILE}</Text>
                <Image source={this.state.userImage != '' ? { uri: this.state.userImage } : Images.Rectangle} style={styles.avatar1} />
                <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                  <Text style={styles.changeProfileText}>{Constants.CHANGE_PROFILE}</Text>
                </TouchableOpacity>

              </View>
              <View style={styles.dataContainer}>
                <Text style={styles.headingText}>Full Name</Text>
                <TextInput
                  value={this.state.fullName}
                  style={{ color: Colors.White, width: 100, fontSize: 18 }}
                  onChangeText={(value) => {
                    this.setState({ fullName: value })
                  }}
                />
              </View>
              <View style={styles.dataContainer}>
                <Text style={styles.headingText}>Email</Text>
                <TextInput
                  value={this.state.email}
                  editable={false}
                  style={{ color: Colors.White, fontSize: 18 }}
                />
              </View>
              {/* 3 */}
              <View style={styles.dataContainer}>
                <Text style={styles.headingText}>Current City</Text>
                <TextInput
                  value={this.state.city}
                  style={{ color: Colors.White, width: 100, fontSize: 18 }}
                  onChangeText={(value) => {
                    this.setState({ city: value })
                  }}
                />
              </View>
              {/* 4 */}
              <View style={styles.dataContainer1}>
                <Text style={styles.headingText}>Bio</Text>
                <TextInput
                  value={this.state.aboutMe}
                  multiline={true}
                  style={{ color: Colors.White, fontSize: 18 }}
                  onChangeText={(value) => {
                    this.setState({ aboutMe: value })
                  }}
                />
              </View>
              {/* 5 */}
              <View style={styles.dataContainer}>
                <TouchableOpacity onPress={this.dobChange}>
                  <Text style={styles.headingText}>Date of birth</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.dobChange}>
                  <TextInput
                    style={{ color: Colors.White, width: 100, fontSize: 18 }}
                    value={this.state.Dob && moment.utc(this.state.Dob).format('YYYY-MM-DD')}
                    editable={false}
                  />
                </TouchableOpacity>
              </View>
              {
                this.state.isDatePickerVisible == true &&
                <DatePicker isDatePickerVisible={this.state.isDatePickerVisible}
                  hideDate={this.dobChange}
                  getdate={this.dateSet}
                />
              }
              {/* 6 */}
              <View style={styles.dataContainer1}>
                <Text style={styles.headingText}>Interests</Text>
                <TextInput
                  value={this.state.interest}
                  multiline={true}
                  style={{ color: Colors.White, fontSize: 18, width: 180 }}
                  placeholder={'Intersts'}
                  placeholderTextColor='white'
                  onChangeText={(value) => {
                    this.setState({ interest: value })
                  }}
                />
              </View>
            </ScrollView>
          </LinearGradient>
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
    getProfile: state.getProfile,
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
)(EditProfile);