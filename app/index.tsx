import { Text, View, FlatList } from "react-native";
import { meditations } from "../src/data";

const meditation = meditations[0];

function MeditationListItem(props) {
  const meditation = props.meditation
  return (
    <View className="p-5 m-5 border-2 border-gray-300 rounded-2xl">
      <Text className="font-semibold text-2xl">{meditation.title}</Text>
    </View>
);
}

export default function HomeScreen() {
  return (
    <FlatList
    data={meditations}
    renderItem={({item}) => <MeditationListItem meditation={item}/>}/>
  );
}
