import { Stack } from "expo-router";

const DocumentLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="[documentId]" options={{ title:"Assuntos" }} />
        </Stack>
    );
};

export default DocumentLayout;