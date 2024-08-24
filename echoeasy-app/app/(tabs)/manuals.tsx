import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from '../../src/context/GlobalProvider';

const Manuals: React.FC = () => {
  const { user, isLogged } = useGlobalContext();
  
  if (!isLogged) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center">
        <Text>Você precisa estar logado para acessar esta página.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="bg-[#F6F6F6] h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full h-full flex justify-center items-center p-4">
          <Text>Manuais</Text>
          <Text>Bem-vindo, {user?.name} {user?.lastname}!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Manuals;
