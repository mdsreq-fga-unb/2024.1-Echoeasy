import { Stack } from "expo-router";

const SubjectLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="[subjectId]" options={{ title:"Conteúdo" }} />
        </Stack>
    );
};

export default SubjectLayout;