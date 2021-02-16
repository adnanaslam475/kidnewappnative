import React, { useEffect, useState } from 'react';
import styles from './Styles';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    Image,
    TextInput,
    ImageBackground
} from 'react-native';
import moment from 'moment';
import Images from '../../Styles/Images';
export const ChatMessage = ({ message, userId, oppositeUser }) => {
    const { content, fromUserId, createdAt } = message;
    const recieved = userId !== fromUserId;
    return <View style={recieved ? styles.receivedWrapper : styles.chatMessageWrapper}>
        <View style={recieved ? styles.receivedInnerWrapper : styles.chatMessageInner}>
            <View style={styles.chatMessageHeader}>
                {recieved &&
                    <View style={styles.avatarName}>
                        <Image source={oppositeUser && oppositeUser.userAvatar ? { uri: oppositeUser.userAvatar } : Images.blank_profile} style={styles.ImageChecing} />
                        <Text style={styles.textName}>{oppositeUser?.fullName}</Text>
                    </View>
                }
                <Text style={styles.DateWrapper}>{moment(createdAt).format("hh:mm a")}</Text>
            </View>
            <View style={recieved ? styles.chatMessageHeaderText : styles.chatMessageHeaderText1}>
                <Text style={{ color: recieved ? 'black' : 'white', margin: 7 }}>{content}</Text>
            </View>
        </View>
    </View>
    // <div className={`chatMessageWrapper ${recieved && 'receivedWrapper'}`} >
    //     <div className={`chatMessageInner ${recieved && 'receivedInnerWrapper'}`}>
    //         <div className="chatMessageHeader">
    //             {recieved && <div className="avatarName">
    //                 <img src={oppositeUser && oppositeUser.userAvatar ? oppositeUser.userAvatar : images.blankAvatar} alt="avatar" />
    //                 <h6>{oppositeUser?.fullName}</h6>
    //             </div>}
    //             <span>{moment(createdAt).format("hh:mm a")}</span>
    //         </div>
    //         <div className="chatMessageText">
    //             <p>{content}</p>
    //         </div>
    //     </div>
    // </div>
}