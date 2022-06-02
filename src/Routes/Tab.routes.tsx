import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "@Screens/Home";
import { Orders } from "@Screens/Orders";
import { useTheme } from "styled-components/native";
import { Platform } from "react-native";

const { Group, Navigator, Screen } = createBottomTabNavigator();
const TabRoutes = () => {
  const { Colors } = useTheme();

  return (
    <Navigator>
      <Group
        screenOptions={{
          tabBarActiveTintColor: Colors.SECONDARY_900,
          tabBarInactiveTintColor: Colors.SECONDARY_400,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 80,
            paddingVertical: Platform.OS === "ios" ? 20 : 0,
          },
        }}
      >
        <Screen name="Home" component={Home} />
        <Screen name="Orders" component={Orders} />
      </Group>
    </Navigator>
  );
};

export { TabRoutes };
