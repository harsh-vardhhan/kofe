import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";
import { Card, Text } from "react-native-paper";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          flex: 1,
          alignItems: "flex-start",
          marginTop: 50,
        }}
      >
        <QuizCard />
        <QuizCard />
        <QuizCard />
        <QuizCard />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const QuizCard = () => {
  return (
    <Card
      style={{
        width: "42%",
        marginLeft: 20,
        marginTop: 20,
        height: 200,
        backgroundColor: "white",
      }}
    >
      <View>
        <Image
          style={{
            height: 100,
            width: 90,
            margin: 10,
            marginLeft: 40,
            marginTop: 40,
          }}
          source={require("./assets/images/apple.png")}
        />
        <Text style={{ marginLeft: 60 }}>apple</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
