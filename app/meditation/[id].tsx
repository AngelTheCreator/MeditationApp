import { useLocalSearchParams, router } from "expo-router";
import { Text, View } from "react-native";
import { meditations } from "@/data";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function MeditationDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { top } = useSafeAreaInsets();

  const meditation = meditations.find((m) => m.id === Number(id));

  if (!meditation) {
    return <Text>Meditation not found!</Text>;
  }

  return (
    <SafeAreaView className="bg-orange-400 flex-1 p-2 items-center">
      {/* Header */}
      <View className="flex-row items-center justify-between p-10">
        <AntDesign name="infocirlceo" size={26} color="black" />
        <View className="bg-zinc-800 p-2 rounded-md">
          <Text className="text-zinc-200 font-semibold">
            Today's Meditation
          </Text>
        </View>
        <AntDesign
          onPress={() => router.back()}
          name="close"
          size={24}
          color="black"
        />
      </View>
      <Text className="text-3xl mt-14 text-center text-zinc-800 font-semibold">
        {meditation?.title}
      </Text>
      {/*Play/Pause Button*/}
      <View className="bg-zinc-800">
        <FontAwesome6 name="play" size={24} color="black" />
      </View>
    </SafeAreaView>
  );
}
