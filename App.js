import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HabitDetail } from "./src/HabitDetail";
import { HabitList } from "./src/HabitList";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Habits" component={HabitList} />
        <Stack.Screen
          name="Habit Detail"
          component={HabitDetail}
          options={({ route }) => ({ title: route.params.item.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
