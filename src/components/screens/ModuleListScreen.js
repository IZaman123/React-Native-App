import { useState } from "react";
import initialModules from "../../data/modules";
import ModuleList from "../entity/modules/ModuleList";
import Screen from "../layout/Screen";

const ModuleListScreen = ({ navigation }) => {
    const [modules, setModules] = useState(initialModules);

    const handleDelete = (module) =>
        setModules(modules.filter((prev) => prev.ModuleID !== module.ModuleID));

    const onDelete = (module) => {
        handleDelete(module);
        navigation.goBack();
    };

    const handleSelect = (module) => navigation.navigate("ModuleViewScreen", { module, onDelete });

    return (
        <Screen>
            <ModuleList modules={modules} onSelect={handleSelect} />
        </Screen>
    );
};

export default ModuleListScreen;
