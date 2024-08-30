import { Stack } from "expo-router";

const DocumentLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="[documentId]" options={{ title:"Assuntos" }} />
            <Stack.Screen name="(subjects)" options={{ headerShown: false }} />
        </Stack>
    );
};

export default DocumentLayout;