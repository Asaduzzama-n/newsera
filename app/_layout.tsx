import { Stack } from "expo-router";
import './global.css'
import { StatusBar, StyleSheet } from "react-native";
export default function RootLayout() {
  return <>
  <StatusBar  hidden={true}/>
  <Stack
  screenOptions={{
    headerShown: false
  }}
  >
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    <Stack.Screen name="news/[id]" options={{ headerShown: false }} />
  </Stack>
  </>
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black", // Set the background color to black
  },
})