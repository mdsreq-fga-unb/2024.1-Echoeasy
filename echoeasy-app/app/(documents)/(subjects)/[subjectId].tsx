import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SubjectService } from "../../../src/service/SubjectService";

type Item = {
  _id: string;
  title: string;
  description: string;
  image: string;
};

const SubjectId: React.FC = () => {
  const { subjectId } = useLocalSearchParams();
  const [content, setContent] = useState<Item[]>([]);

  const fetchContent = async () => {
    try {
      const subjectService = new SubjectService();
      const response = await subjectService.getAllSubjectsOfTheDocument(
        subjectId as string
      );
      setContent(response.data as Item[]);
    } catch (error: any) {
      console.error("Error fetching subjects:", error.message || error);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  return (
    <SafeAreaView className="bg-[#F6F6F6] h-full">
      <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
        <View className="w-full px-6">
          {content.map((item) => (
            <View key={item._id} className="mb-4">
              <Text className="font-interMedium text-2xl mb-2">{item.title}</Text>
              <Text className="mb-2">{item.description}</Text>
              {item.image && (
                <Image
                  source={{ uri: item.image }}
                  style={{ width: '100%', height: 200, resizeMode: 'cover' }}
                />
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SubjectId;
