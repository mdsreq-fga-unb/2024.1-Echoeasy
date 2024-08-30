import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const DocumentId: React.FC = () => {

  const { documentId } = useLocalSearchParams();

  return (
    <SafeAreaView className="bg-[#F6F6F6] h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full h-full p-6">

        <Text>Details of user {documentId} </Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DocumentId;
