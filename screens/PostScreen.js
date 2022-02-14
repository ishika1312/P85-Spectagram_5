import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
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

export default class PostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
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
    if (!this.props.route.params) {
      this.props.navigation.navigate("Home");
    } else if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.iconImage}
              ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>Spectagram</Text>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <ScrollView style={styles.postCard}>
              <Image
                source={require("../assets/post#2.jpg")}
                style={styles.image}
              ></Image>

              <View style={styles.dataContainer}>
                <View style={styles.titleTextContainer}>
                  <Text style={styles.postAuthorText}>
                    {this.props.route.params.post.author}
                  </Text>
                  <Text style={styles.postCaptionText}>
                    {this.props.route.params.post.caption}
                  </Text>
                </View>
                <View style={styles.iconContainer}>
                </View>
              </View>
              <View style={styles.actionContainer}>
                <View style={styles.likeButton}>
                  <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                  <Text style={styles.likeText}>12k</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row",
    paddingRight: 70,
    marginTop: -5
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 70
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"  
  },
  cardContainer: {
    flex: 1
  },
  postCard: {
    margin: RFValue(15),
    backgroundColor: "#2C2A2A",
    borderRadius: RFValue(20)
  },
  image: {
    resizeMode: "contain",
    width: "93%",
    alignSelf: "center",
    height: RFValue(250),
    marginTop: RFValue(-20),
    marginBottom: RFValue(-20),
    marginLeft: RFValue(5),
    marginRight: RFValue(5),
  },
  dataContainer: {
    flexDirection: "row",
    padding: RFValue(20)
  },
  titleTextContainer: {
    flex: 0.8
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
  iconContainer: {
    flex: 0.2
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
})