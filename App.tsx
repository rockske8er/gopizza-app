import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFonts, DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";
import { ThemeProvider } from "styled-components/native";
import Theme from "@Theme/index";
import { AuthProvider } from "@Hooks/Auth";

import * as SplashScreen from "expo-splash-screen";

import { AppRoutes } from "@Routes/index";

const App = () => {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <ThemeProvider theme={Theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style={"light"} translucent backgroundColor="transparent" />
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
};

export { App };
