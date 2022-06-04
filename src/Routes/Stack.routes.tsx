import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useAuth } from "@Hooks/Auth";

import { Home } from "@Screens/Home";
import { Product } from "@Screens/Product";
import { Order } from "@Screens/Order";
import { TabRoutes } from "./Tab.routes";

const { Group, Navigator, Screen } = createNativeStackNavigator();

const StackRoutes = () => {
  const { user } = useAuth();
  return (
    <Navigator>
      {user?.isAdmin ? (
        <Group
          screenOptions={{
            headerShown: false,
          }}
        >
          <Screen name={"Home"} component={Home} />
          <Screen name={"Product"} component={Product} />
        </Group>
      ) : (
        <Group
          screenOptions={{
            headerShown: false,
          }}
        >
          <Screen name={"TabRoutes"} component={TabRoutes} />
          <Screen name={"Order"} component={Order} />
        </Group>
      )}
    </Navigator>
  );
};

export { StackRoutes };
