import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { ListItem, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const list = [
  {
    name: "Read for 1hr",
    done: true,
    subtitle:
      "1 hr on average is enough to read 55 pages. It makes possible reading 1500 pages/month.",
  },
  {
    name: "30 minutes walk",
    done: false,
  },
  {
    name: "10 minutes meditation",
    done: false,
    subtitle: "People claim it helps with insomnia and makes you feel calm",
  },
  {
    name: "Online Spanish lesson",
    done: false,
    subtitle: "Hablemos española",
  },
  {
    name: "Attend a gym",
    done: false,
  },
  {
    name: "My habit",
    done: false,
    subtitle: "Additional habit",
  },
];

export const HabitList = () => {
  const { navigate } = useNavigation();

  return (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={list}
      renderItem={({ item }) => (
        <ListItem
          onPress={() => navigate("Habit Detail", { item })}
          title={item.name}
          subtitle={item.subtitle}
          leftIcon={
            <Image
              style={styles.image}
              source={
                item.done
                  ? require("./assets/habitDone.png")
                  : require("./assets/habitInProgress.png")
              }
            />
          }
          bottomDivider
          chevron
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});
