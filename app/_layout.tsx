import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name='(onboarding)' />
        <Stack.Screen name='(others)' />

      </Stack>
      <StatusBar barStyle="dark-content" />
    </>)
}
