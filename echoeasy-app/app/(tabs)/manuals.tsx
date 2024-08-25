import React from 'react';
import { View, Text, ScrollView, FlatList, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import ItemCard from '../../components/ItemCard';
import SearchInput from '../../components/SearchInput';

type Item = {
  title: string
  description: string
  image: string
};
const data: Item[] = [{ title: "Título", description: "Descrição", image: "" }, { title: "Interpretação de Imagens", description: "2 tópicos", image: "https://ufmg.br/thumbor/ycQy_k9_9Us1_NMirT293_HVnQw=/0x0:734x491/712x474/https://ufmg.br/storage/b/5/1/8/b518ab2347d168580bd6d18c12f47b7c_15354817310865_1687263323.png" },];

const Manuals: React.FC = () => {

  return (
    <SafeAreaView className="bg-[#F6F6F6] h-full p-6">
      <Text className='font-interMedium text-2xl'>Manuais</Text>
      <View className="w-full h-full flex items-center">

        <SearchInput
          placeholder='Pesquise por um manual'
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

export default Manuals;
