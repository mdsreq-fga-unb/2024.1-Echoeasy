import { StatusBar } from "expo-status-bar";
import { Tabs } from "expo-router";
import TabBarIcon from "../../components/TabBarIcon";


const TabLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#3CC1A9",
          tabBarInactiveTintColor: "#333333",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#FFFFFF",
            borderTopWidth: 1,
            borderTopColor: "#C4C4C4",
            height: 75,
          },
        }}
      >
        <Tabs.Screen
          name="algorithms"
          options={{
            title: "Algoritmos",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon 
                icon="analytics-outline" 
                color={color} 
                focused={focused} 
                label="Algoritmos" 
              />
            ),
          }}
        />
        <Tabs.Screen
          name="manuals"
          options={{
            title: "Manuais",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon 
                icon="document-text-outline" 
                color={color} 
                focused={focused} 
                label="Manuais" 
              />
            ),
          }}
        />
        <Tabs.Screen
          name="more"
          options={{
            title: "Mais",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon 
                icon="add-outline" 
                color={color} 
                focused={focused} 
                label="Mais" 
              />
            ),
          }}
        />
      </Tabs>
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default TabLayout;
