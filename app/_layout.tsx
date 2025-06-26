import { SplashScreen, Stack } from "expo-router";

import "./global.css"
import { useEffect } from "react";
import {useFonts} from "expo-font";

export default function RootLayout() {

   const [fontsLoaded] = useFonts({
    "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
    "Rubik-ExtraBold": require("../assets/fonts/Rubik-ExtraBold.ttf"),
    "Rubik-Light": require("../assets/fonts/Rubik-Light.ttf"),
    "Rubik-Medium": require("../assets/fonts/Rubik-Medium.ttf"),
    "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
    "Rubik-SemiBold": require("../assets/fonts/Rubik-SemiBold.ttf"),
  });


// This runs a side effect whenever the value of fontsLoaded changes
useEffect(() => {
  // If fonts are loaded successfully
  if (fontsLoaded) {
    // Hide the splash screen (manually) when fonts are ready
    SplashScreen.hideAsync(); 
  }
// This effect runs whenever `fontsLoaded` becomes true (i.e., after fonts are loaded)
}, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <Stack />;
}
