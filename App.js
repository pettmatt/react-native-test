import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, Image } from "react-native"
// import { Stack } from "expo-router"

import MainFeed from "./pages/MainFeed"
import Settings from "./pages/Settings"

export default function App() {

  return (
    <View style={styles.container}>
      <MainFeed />

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
