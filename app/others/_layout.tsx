import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="notifications" />
      </Stack>
      <StatusBar barStyle="light-content" backgroundColor={"#3077E3"}/>
    </>)
}
