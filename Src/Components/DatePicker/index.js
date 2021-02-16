import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  handleConfirm = (date) => {
    this.hideDatePicker()
    this.props.getdate(date)
  }
  hideDatePicker = () => {
    this.props.hideDate()
  }
  render() {
    return (
      <>
        <DateTimePickerModal
          isVisible={this.props.isDatePickerVisible}
          mode="date"
          onConfirm={this.handleConfirm}
          onCancel={this.hideDatePicker}
        />
      </>
    );
  }
}
export default DatePicker;
