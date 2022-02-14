import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <TouchableOpacity
          style = {styles.container}
          onPress = {() =>
            this.props.navigation.navigate("PostScreen",{
              post: this.props.post
            })
          }
        >
          <View style={styles.cardContainer}>
            <Image
              source={require("../assets/post#2.jpg")}
              style={styles.postImage}
            ></Image>

            <View style={styles.titleContainer}>
              <Text style={styles.postAuthorText}>
                {this.props.post.author}
              </Text>
              <Text style={styles.postCaptionText}>
                {this.props.post.caption}
              </Text>
            </View>
            <View style={styles.actionContainer}>
              <View style={styles.likeButton}>
                <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                <Text style={styles.likeText}>13.7k</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer: {
    margin: RFValue(15),
    backgroundColor: "#2C2A2A",
    borderRadius: RFValue(20)
  },
  postImage: {
    resizeMode: "contain",
    width: "93%",
    alignSelf: "center",
    height: RFValue(250),
    marginTop: -20,
    marginBottom: -20,
    marginLeft: 5,
    marginRight: 5,
  },
  titleContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center"
  },
  postAuthorText: {
    fontSize: RFValue(22),
    fontFamily: "Bubblegum-Sans",
    color: "white"
  },
  postCaptionText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(16),
    color: "white",
    paddingTop: RFValue(10)
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eb3948",
    borderRadius: RFValue(30)
  },
  likeText: {
    color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(23),
    marginLeft: RFValue(5)
  }
});
