import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from '../../src/context/GlobalProvider';

const More: React.FC = () => {
  const { logout } = useGlobalContext();
  
  return (
    <SafeAreaView className="bg-[#F6F6F6] h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full h-full flex justify-center items-center p-4">


          <Text>Mais</Text>
          <Button title="Logout" onPress={logout} />


        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default More;
