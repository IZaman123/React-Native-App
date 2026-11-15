import { ActivityIndicator, Alert, StyleSheet, Text, View } from "react-native";
import API from "../API/API";
import useLoad from "../API/useLoad";
import ModuleList from "../entity/modules/ModuleList";
import Screen from "../layout/Screen";
import { Button, ButtonTray } from "../UI/Button";
import Icons from "../UI/Icons";

const ModuleListScreen = ({ navigation }) => {
    const modulesEndpoint = "https://api.unibase.kuapps.uk/api/modules";

    const [modules, , isLoading, loadModules] = useLoad(modulesEndpoint);

    const onAdd = async (module) => {
        const res = await API.post(modulesEndpoint, module);
        if (res.isSuccess) {
            loadModules(modulesEndpoint);
            navigation.goBack();
        } else Alert.alert(res.message);
    };

    const onModify = async (module) => {
        const putEndpoint = `${modulesEndpoint}/${module.ModuleID}`;
        const res = await API.put(putEndpoint, module);
        if (res.isSuccess) {
            loadModules(modulesEndpoint);
            navigation.replace("ModuleViewScreen", { module, onDelete, onModify });
        } else Alert.alert(res.message);
    };

    const onDelete = async (module) => {
        const deleteEndpoint = `${modulesEndpoint}/${module.ModuleID}`;
        const res = await API.delete(deleteEndpoint, module);
        if (res.isSuccess) {
            loadModules(modulesEndpoint);
            navigation.goBack();
        } else Alert.alert(res.message);
    };

    const goToViewScreen = (module) =>
        navigation.navigate("ModuleViewScreen", { module, onDelete, onModify });
    const goToAddScreen = () => navigation.navigate("ModuleAddScreen", { onAdd });

    return (
        <Screen>
            <View style={styles.container}>
                <ButtonTray>
                    <Button label="Add" icon={<Icons.Add />} onClick={goToAddScreen} />
                </ButtonTray>
                {isLoading && (
                    <View>
                        <Text style={styles.loading}>
                            Retrieving records from {modulesEndpoint}...
                        </Text>
                        <ActivityIndicator size={"large"} />
                    </View>
                )}
                <ModuleList modules={modules} onSelect={goToViewScreen} />
            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 15,
    },
    loading: {
        height: 100,
        gap: 20,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default ModuleListScreen;
