import React, { useEffect, useState } from "react";
import { Platform } from "react-native";
import { useTheme } from "styled-components/native";

import Firestore from "@react-native-firebase/firestore";
//Screens
import { Home } from "@Screens/Home";
import { Orders } from "@Screens/Orders";
//Components
import { BottomMenu } from "@Components/BottomMenu";
//Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const { Group, Navigator, Screen } = createBottomTabNavigator();

const TabRoutes = () => {
  const [notifications, setNotifications] = useState("0");

  const { Colors } = useTheme();

  useEffect(() => {
    const subscriber = Firestore()
      .collection("orders")
      .where("status", "==", "Pronto")
      .onSnapshot((querySnapshot) => {
        setNotifications(String(querySnapshot.docs.length));
      });

    return () => subscriber();
  }, []);

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
        <Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <BottomMenu title="Cardápio" color={color} />
            ),
          }}
        />
        <Screen
          name="Orders"
          component={Orders}
          options={{
            tabBarIcon: ({ color }) => (
              <BottomMenu
                title="Pedidos"
                color={color}
                notifications={notifications}
              />
            ),
          }}
        />
      </Group>
    </Navigator>
  );
};

export { TabRoutes };
