import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const SubjectId: React.FC = () => {

  const { subjectId } = useLocalSearchParams();

  return (
    <SafeAreaView className="bg-[#F6F6F6] h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full h-full px-6">

        <Text>Details of user {subjectId} </Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SubjectId;
