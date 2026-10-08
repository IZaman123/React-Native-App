import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import initialModules from "../../data/modules";
import Screen from "../layout/Screen";

const ModuleListScreen = () => {
    const modules = initialModules;

    const handleSelect = () => alert("Item selected");

    return (
        <Screen>
            <ScrollView style={styles.container}>
                {modules.map((m) => {
                    return (
                        <Pressable key={m.ModuleCode} onPress={handleSelect}>
                            <View style={styles.item}>
                                <Text style={styles.text}>
                                    {m.ModuleCode} {m.ModuleName}
                                </Text>
                            </View>
                        </Pressable>
                    );
                })}
            </ScrollView>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {},
    item: { paddingVertical: 15, borderTopWidth: 1, borderColor: "lightgray" },
    text: { fontSize: 16 },
});

export default ModuleListScreen;
