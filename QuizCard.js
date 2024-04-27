import { View, Text } from "react-native";

const QuizCard = ({ russian, english, hindi }) => {
  return (
    <View
      style={{
        width: "23%",
        marginRight: 6,
        marginTop: 20,
        height: 80,
        backgroundColor: "white",
        border: 2,
        borderWidth: 2,
        borderColor: "#e5e5e5",
        borderRadius: 16,
        borderBottomWidth: 4,
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Text style={{ marginTop: 10, fontWeight: 500 }}>{russian}</Text>
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

export default QuizCard;
