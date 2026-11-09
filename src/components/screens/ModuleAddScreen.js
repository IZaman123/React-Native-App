import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Screen from "../layout/Screen";
import { Button, ButtonTray } from "../UI/Button";
import Icons from "../UI/Icons";

const defaultModule = {
    ModuleID: null,
    ModuleCode: null, // "CI6330",
    ModuleName: null, // "Mobile Application Development",
    ModuleLevel: null, // 6,
    ModuleLeaderID: null, // 1,
    ModuleLeaderName: null, // "Graeme JONES",
    ModuleImage: null,
};

const ModuleAddScreen = ({ navigation, route }) => {
    const { onAdd } = route.params;
    defaultModule.ModuleCode = Math.floor(100000 + Math.random() * 900000);
    defaultModule.ModuleImage =
        "https://assets.codepen.io/2510825/courseImageMobileApplicationDevelopment.jpg";

    const [module, setModule] = useState(defaultModule);

    const handleAdd = () => onAdd(module);
    const handleCancel = navigation.goBack;

    const handleChange = (field, value) => setModule({ ...module, [field]: value });

    return (
        <Screen>
            <View style={styles.item}>
                <Text style={styles.itemLabel}>Module code</Text>
                <TextInput
                    value={module.ModuleCode}
                    onChangeText={(value) => handleChange("ModuleCode", value)}
                    style={styles.itemTextInput}
                />
            </View>

            <View style={styles.item}>
                <Text style={styles.itemLabel}>Module name</Text>
                <TextInput
                    value={module.ModuleName}
                    onChangeText={(value) => handleChange("ModuleName", value)}
                    style={styles.itemTextInput}
                />
            </View>

            <View style={styles.item}>
                <Text style={styles.itemLabel}>Module level</Text>
                <TextInput
                    value={module.ModuleLevel}
                    onChangeText={(value) => handleChange("ModuleLevel", value)}
                    style={styles.itemTextInput}
                />
            </View>

            <View style={styles.item}>
                <Text style={styles.itemLabel}>Module leader</Text>
                <TextInput
                    value={module.ModuleLeaderName}
                    onChangeText={(value) => handleChange("ModuleLeaderName", value)}
                    style={styles.itemTextInput}
                />
            </View>

            <View style={styles.item}>
                <Text style={styles.itemLabel}>Module image URL</Text>
                <TextInput
                    value={module.ModuleImage}
                    onChangeText={(value) => handleChange("ModuleImage", value)}
                    style={styles.itemTextInput}
                />
            </View>

            <Text>{module.ModuleCode} {module.ModuleName}</Text>

            <ButtonTray>
                <Button label="Add" icon={<Icons.Add />} onClick={handleAdd} />
                <Button label="Cancel" onClick={handleCancel} />
            </ButtonTray>
        </Screen>
    );
};

const styles = StyleSheet.create({
    itemLabel: {
        color: "grey",
        fontSize: 16,
        marginBottom: 5,
    },
    itemTextInput: {
        height: 50,
        paddingLeft: 10,
        fontSize: 16,
        backgroundColor: "white",
        borderRadius: 7,
        borderWidth: 1,
        borderColor: "lightgray",
    },
});

export default ModuleAddScreen;
