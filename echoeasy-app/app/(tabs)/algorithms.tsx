import React from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ItemCard from "../../components/ItemCard";
import SearchInput from "../../components/SearchInput";

type Item = {
  title: string;
  description: string;
  image: string;
};
const data: Item[] = [
  {
    title: "Disfunção Diastólica Incluindo o Strain",
    description: "",
    image: "",
  },
];

const Algorithms: React.FC = () => {
  return (
    <SafeAreaView className="bg-[#F6F6F6] h-full p-6 py-10">
      <Text className="font-interMedium text-2xl">Algoritmos</Text>
      <View className="w-full h-full flex items-center">
        <SearchInput
          placeholder="Pesquise por um algoritmo"
          icon="search-outline"
        />

        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <ItemCard
              title={item.title}
              description={item.description}
              image={item.image}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Algorithms;
