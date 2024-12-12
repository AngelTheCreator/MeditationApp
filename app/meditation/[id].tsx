import { useLocalSearchParams, router } from "expo-router";
import { Text, View } from "react-native";
import { meditations } from "@/data";
import AntDesign from "@expo/vector-icons/AntDesign";
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
    <SafeAreaView className="bg-orange-400 flex-1">
      {/* Header */}
      <View>
        <AntDesign name="infocirlceo" size={24} color="black" />
        <AntDesign
          onPress={() => router.back()}
          name="close"
          size={24}
          color="black"
        />
      </View>
      <Text className="text-3xl mt-14">
        {meditation?.title}: {top}
      </Text>
    </SafeAreaView>
  );
}
