import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  ScrollView,
} from "react-native";
import QuizCard from "./QuizCard";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={{ alignItems: "center", margin: 20 }}>
        <Text style={{ fontSize: 23, fontWeight: 700 }}>
          Let's Learn Russian!
        </Text>
      </View>
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
    </ScrollView>
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
    russian: "Г г",
    english: "g",
    hindi: "ग",
  },
  {
    id: 5,
    russian: "Д д",
    english: "d",
    hindi: "ड",
  },
  {
    id: 6,
    russian: "Е е",
    english: "ey",
    hindi: "य",
  },
  {
    id: 7,
    russian: "Ё ё",
    english: "yo",
    hindi: "यो",
  },
  {
    id: 8,
    russian: "Ж ж",
    english: "zh",
    hindi: "ज़ाह",
  },
  {
    id: 9,
    russian: "З з",
    english: "z",
    hindi: "",
  },
  {
    id: 10,
    russian: "И и",
    english: "i",
    hindi: "इ",
  },
  {
    id: 11,
    russian: "Й й",
    english: "",
    hindi: "",
  },
  {
    id: 12,
    russian: "К к",
    english: "k",
    hindi: "क",
  },
  {
    id: 13,
    russian: "Л л",
    english: "l",
    hindi: "ल",
  },
  {
    id: 14,
    russian: "М м",
    english: "m",
    hindi: "म",
  },
  {
    id: 15,
    russian: "Н н",
    english: "n",
    hindi: "न",
  },
  {
    id: 16,
    russian: "О о",
    english: "o",
    hindi: "",
  },
  {
    id: 17,
    russian: "П п",
    english: "p",
    hindi: "प",
  },
  {
    id: 18,
    russian: "Р р",
    english: "r",
    hindi: "",
  },
  {
    id: 19,
    russian: "С с",
    english: "s",
    hindi: "",
  },
  {
    id: 20,
    russian: "Т т",
    english: "t",
    hindi: "ठ्ठ",
  },
  {
    id: 21,
    russian: "У у",
    english: "oo",
    hindi: "ऊ",
  },
  {
    id: 22,
    russian: "Ф ф",
    english: "f",
    hindi: "फ",
  },
  {
    id: 23,
    russian: "Х х",
    english: "kh",
    hindi: "ख",
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
