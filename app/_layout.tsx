import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";

export const unstable_settings = {
  initialRouteName: "setUpPin"
}
export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name='(onboarding)' />

      </Stack>
      <StatusBar barStyle="dark-content" />
    </>)
}
