import { Text, View, FlatList } from "react-native";
import { meditations } from "@/data";
import { Meditation } from "@/types";
import { MeditationListItem } from "@/components/MeditationListItem";


export default function HomeScreen() {
  return (
    <FlatList
    data={meditations}
    className="bg-white"
    contentContainerClassName="gap-5 p-3"
    renderItem={({item}) => <MeditationListItem meditation={item}/>}/>
  );
}
