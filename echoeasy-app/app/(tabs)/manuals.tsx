import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import ItemCard from '../../components/ItemCard';
import SearchInput from '../../components/SearchInput';
import { DocService } from '../../src/service/DocService';
import { useGlobalContext } from '../../src/context/GlobalProvider';

type Item = {
  title: string;
  description: string;
  image: string;
};

const Manuals: React.FC = () => {
  const { token } = useGlobalContext();
  const [docs, setDocs] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchDocuments = async () => {
    setLoading(true); //provisorio
    try {
      const docService = new DocService();
      const response = await docService.getAllDocuments(token);
      setDocs(response.data as Item[]);
    } catch (error: any) {
      console.error('Error fetching documents:', error.message || error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {

    fetchDocuments();

  }, []);

  if (loading) return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text>Loading...</Text>
    </SafeAreaView>
  );

  return (
    <SafeAreaView className="bg-[#F6F6F6] h-full p-6">
      <Text className='font-interMedium text-2xl'>Manuais</Text>
      <View className="w-full h-full flex items-center">
        <SearchInput
          placeholder='Pesquise por um manual'
          icon="search-outline"
        />
        <FlatList
          data={docs}
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
