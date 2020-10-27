/** @format */

import React from "react";
import { View } from "react-native";
import BlogList from "./screens/BlogList";
import BlogPage from "./screens/BlogPage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Octicons, FontAwesome } from "@expo/vector-icons";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerTitleAlign: "center",
            headerRight: () => (
              <View style={{ paddingHorizontal: 10 }}>
                <Octicons name="search" size={24} color="black" />
              </View>
            ),
            headerLeft: () => (
              <View style={{ paddingHorizontal: 10 }}>
                <FontAwesome name="th" size={24} color="black" />
              </View>
            ),
          }}
          name="Discover"
          component={BlogList}
        />
        <Stack.Screen
          options={{
            header: () => null,
          }}
          name="Beauty"
          component={BlogPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
