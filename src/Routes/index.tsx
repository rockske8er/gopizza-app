import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./Stack.routes";
import { TabRoutes } from "./Tab.routes";

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  );
};

export { AppRoutes };
