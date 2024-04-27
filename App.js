import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { StyleSheet, View, TouchableHighlight, Text } from "react-native";
import QuizCard from "./QuizCard";
import * as SplashScreen from "expo-splash-screen";

import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Feather-Bold": require("./assets/fonts/Feather-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View style={{ width: "100%" }}>
        <TouchableHighlight
          style={{
            backgroundColor: "#1CB0F6",
            height: 50,
            borderWidth: 1,
            borderColor: "rgb(24, 150, 209)",
            borderRadius: 16,
            borderBottomWidth: 4,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              marginTop: 10,
              fontWeight: 700,
              color: "white",
              fontSize: 14,
              fontFamily: "Feather-Bold",
            }}
          >
            LEARN THE LETTERS
          </Text>
        </TouchableHighlight>
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          flex: 1,
          alignItems: "flex-start",
          marginTop: 20,
        }}
      >
        {alphabets.map((alphabet) => {
          return (
            <QuizCard
              key={alphabet.id}
              russian={alphabet.russian}
              english={alphabet.english}
              hindi={alphabet.hindi}
            />
          );
        })}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const alphabets = [
  {
    id: 1,
    russian: "A a",
    english: "a",
    hindi: "आ",
  },
  {
    id: 2,
    russian: "Б б",
    english: "b",
    hindi: "ब",
  },
  {
    id: 3,
    russian: "В в",
    english: "v",
    hindi: "व",
  },
  {
    id: 4,
    russian: "В в",
    english: "v",
    hindi: "व",
  },
  {
    id: 5,
    russian: "В в",
    english: "v",
    hindi: "व",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 70,
    margin: 30,
  },
});
