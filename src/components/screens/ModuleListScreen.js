import { useEffect } from "react";
import { ActivityIndicator, Alert, StyleSheet, Text, View } from "react-native";
import API from "../API/API";
import useLoad from "../API/useLoad";
import ModuleList from "../entity/modules/ModuleList";
import Screen from "../layout/Screen";
import useStore from "../store/useStore";
import { Button, ButtonTray } from "../UI/Button";
import Icons from "../UI/Icons";

const ModuleListScreen = ({ navigation }) => {
    const modulesEndpoint = "https://api.unibase.kuapps.uk/api/modules";
    const loggedinUserKey = "loggedinUser";
    const favouritesKey = "moduleFavourites";

    const [modules, setModules, isLoading, loadModules] = useLoad(modulesEndpoint);
    const [loggedinUser] = useStore(loggedinUserKey, null);
    const [favourites, saveFavourites] = useStore(favouritesKey, []);

    const augmentModulesWithFavourites = () => {
        const modifyModule = (module) => ({
            ...module,
            ModuleFavourite: favourites.includes(module.ModuleID),
        });
        const augmentedModules = modules.map(modifyModule);
        setModules(augmentedModules);
    };

    useEffect(() => {
        augmentModulesWithFavourites();
    }, [isLoading]);

    const handleFavourite = (module) => {
        const isFavourite = !module.ModuleFavourite;
        const updateModule = (item) =>
            item.ModuleID === module.ModuleID ? { ...item, ModuleFavourite: isFavourite } : item;
        const updatedModuleList = modules.map(updateModule);
        setModules(updatedModuleList);
        const updatedFavouritesList = updatedModuleList
            .filter((item) => item.ModuleFavourite)
            .map((item) => item.ModuleID);
        saveFavourites(updatedFavouritesList);
    };

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
            {loggedinUser && (
                <Text style={styles.welcome}>Welcome {loggedinUser.UserFirstname}</Text>
            )}
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
                <ModuleList
                    modules={modules}
                    onSelect={goToViewScreen}
                    onFavourite={handleFavourite}
                />
            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
    welcome: {
        marginTop: 5,
        marginBottom: 5,
    },
    container: {
        gap: 15,
        marginBottom: 150,
    },
    loading: {
        height: 100,
        gap: 20,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default ModuleListScreen;
