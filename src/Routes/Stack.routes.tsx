import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@Screens/Home";
import { Product } from "@Screens/Product";

const { Group, Navigator, Screen } = createNativeStackNavigator();
const StackRoutes = () => {
  return (
    <Navigator>
      <Group
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="home" component={Home} />
        <Screen name={"product"} component={Product} />
      </Group>
    </Navigator>
  );
};

export { StackRoutes };
