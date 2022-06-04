import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./Stack.routes";

import { useAuth } from "@Hooks/Auth";
import { SignIn } from "@Screens/SignIn";
import { TabRoutes } from "./Tab.routes";

const AppRoutes = () => {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      {user ? <StackRoutes /> : <SignIn />}
    </NavigationContainer>
  );
};

export { AppRoutes };
