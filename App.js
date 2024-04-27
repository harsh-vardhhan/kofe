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
    russian: "A a",
    english: "a",
    hindi: "आ",
  },
  {
    id: 3,
    russian: "A a",
    english: "a",
    hindi: "आ",
  },
  {
    id: 4,
    russian: "A a",
    english: "a",
    hindi: "आ",
  },
];

const QuizCard = ({ russian, english, hindi }) => {
  return (
    <View
      style={{
        width: "25%",
        marginLeft: 20,
        marginTop: 20,
        height: 80,
        backgroundColor: "white",
        border: 2,
        borderWidth: 2,
        borderColor: "#e5e5e5",
        borderRadius: 16,
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Text style={{ marginTop: 10, fontWeight: 600 }}>{russian}</Text>
      </View>
      <View style={{ marginTop: -10 }}>
        <View style={[{ flexDirection: "row", alignItems: "center" }]}>
          <View style={[{ flex: 1, flexDirection: "row" }]}>
            <Text style={{ color: "#B4B4B8", marginTop: 10, marginLeft: 10 }}>
              {english}
            </Text>
          </View>
          <View
            style={[{ justifyContent: "space-evenly", marginVertical: 10 }]}
          >
            <Text style={{ color: "#B4B4B8", marginTop: 10, marginRight: 10 }}>
              {hindi}
            </Text>
          </View>
        </View>
      </View>
    </View>
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
