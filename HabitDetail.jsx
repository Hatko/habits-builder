import React from "react";
import { StyleSheet, View } from "react-native";
import { Image, Text } from "react-native-elements";

export const HabitDetail = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Image
          style={styles.icon}
          source={
            item.done
              ? require("./assets/habitDone.png")
              : require("./assets/habitInProgress.png")
          }
        />
        <Text>{item.subtitle}</Text>
      </View>
      <View style={styles.progressContainer}>
        <Image
          style={styles.image}
          resizeMode={"contain"}
          source={require("./assets/progressFull.png")}
        />
        <Text style={styles.text}>{"No skipped days since added"}</Text>
        <Image
          style={styles.image}
          resizeMode={"contain"}
          source={require("./assets/progressProgressing.png")}
        />
        <Text style={styles.text}>{"6 more days to form a habit!"}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "right",
  },
  progressContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  infoContainer: {
    flex: 1,
  },
  icon: {
    marginBottom: 30,
    width: 50,
    height: 50,
  },
  image: {
    width: "100%",
    height: 60,
  },
  container: {
    flex: 1,
    padding: 22,
    alignContent: "space-between",
    justifyContent: "space-between",
  },
});
