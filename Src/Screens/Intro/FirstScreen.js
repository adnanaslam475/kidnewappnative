import React, { Component } from 'react';
import {
	View,
	ImageBackground,
	Text,
	Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../Styles/Images';
import styles from './styles';
import Colors from '../../Styles/Colors';
import * as Constants from '../../Constants';

class FirstScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<>
				<ImageBackground source={Images.backgroundFirst} style={styles.imageBackgroundWrapper} >
					<LinearGradient colors={[Colors.overlayColor, Colors.overlayColor]} style={styles.gradient} >
						<View style={styles.contentLayout1}>
							<Text style={styles.missionText}>Our Mission,</Text>
							<Text style={styles.missionText}>Our Vision</Text>
							<Text style={styles.firstDescription}>{Constants.FIRST_DESCRIPTION}</Text>
						</View>
						<View style={styles.dotBox}>
							<Image source={Images.circle} style={[styles.circleDot, { tintColor: Colors.White }]} />
							<Image source={Images.circle} style={[styles.circleDot, { marginLeft: 7, tintColor: Colors.dotColor }]} />
						</View>
					</LinearGradient>
				</ImageBackground>

			</>
		);
	}
}

export default FirstScreen;