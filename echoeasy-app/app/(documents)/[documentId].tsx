import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ItemCard from "../../components/ItemCard";
import { useGlobalContext } from "../../src/context/GlobalProvider";
import { SubjectService } from "../../src/service/SubjectService";

type Item = {
  _id: string;
  title: string;
  description: string;
  image: string;
};

const DocumentId: React.FC = () => {
  const { documentId } = useLocalSearchParams();
  const { token } = useGlobalContext();
  const [subjects, setSubjects] = useState<Item[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchSubjects();
    setRefreshing(false);
  };

  const fetchSubjects = async () => {
    try {
      const subjectService = new SubjectService();
      const response = await subjectService.getAllSubjectsOfTheDocument(
        token,
        documentId as string
      );
      setSubjects(response.data as Item[]);
    } catch (error: any) {
      console.error("Error fetching subjects:", error.message || error);
    }
  };

  useEffect(() => {
    fetchSubjects();
  }, []);

  return (
    <SafeAreaView className="bg-[#F6F6F6] h-full px-6">
      <View className="w-full h-full flex">
        <Text className="font-interMedium text-2xl">Assuntos</Text>

        <FlatList
          data={subjects}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <ItemCard
              title={item.title}
              description={item.description}
              image={item.image}
              handlePress={() => router.push(`(subjects)/${item._id}`)}
            />
          )}
          ListEmptyComponent={() => (
            <View className="flex justify-center items-center px-4">
              <Text className="p-6 font-interLight text-base">
                Ainda não há assuntos.
              </Text>
            </View>
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default DocumentId;
