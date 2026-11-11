import { useEffect, useState } from "react";
import { Text } from "react-native";
import API from "../API/API";
import ModuleList from "../entity/modules/ModuleList";
import Screen from "../layout/Screen";
import { Button, ButtonTray } from "../UI/Button";
import Icons from "../UI/Icons";

const ModuleListScreen = ({ navigation }) => {
    const modulesEndpoint = "https://api.unibase.kuapps.uk/api/modules";

    const [modules, setModules] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const loadModules = async (endpoint) => {
        const res = await API.get(endpoint);
        setIsLoading(false);
        if (res.isSuccess) setModules(res.result);
    };

    useEffect(() => {
        loadModules(modulesEndpoint);
    }, []);

    const handleDelete = (module) =>
        setModules(modules.filter((prev) => prev.ModuleID !== module.ModuleID));

    const handleAdd = (module) => setModules([...modules, module]);

    const handleModify = (updatedModule) =>
        setModules(
            modules.map((module) =>
                module.ModuleID === updatedModule.ModuleID ? updatedModule : module,
            ),
        );

    const onDelete = (module) => {
        handleDelete(module);
        navigation.goBack();
    };

    const onAdd = (module) => {
        handleAdd(module);
        navigation.goBack();
    };

    const onModify = (module) => {
        handleModify(module);
        navigation.replace("ModuleViewScreen", { module, onDelete, onModify });
    };

    const goToViewScreen = (module) =>
        navigation.navigate("ModuleViewScreen", { module, onDelete, onModify });
    const goToAddScreen = () => navigation.navigate("ModuleAddScreen", { onAdd });

    return (
        <Screen>
            <ButtonTray>
                <Button label="Add" icon={<Icons.Add />} onClick={goToAddScreen} />
            </ButtonTray>
            {isLoading && <Text>Loading records...</Text>}
            <ModuleList modules={modules} onSelect={goToViewScreen} />
        </Screen>
    );
};

export default ModuleListScreen;
