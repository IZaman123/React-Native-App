import { useState } from "react";
import initialModules from "../../data/modules";
import ModuleList from "../entity/modules/ModuleList";
import Screen from "../layout/Screen";
import RenderCount from "../UI/RenderCount";

const ModuleListScreen = ({ navigation }) => {
    const [modules, setModules] = useState(initialModules);

    const handleSelect = (module) => navigation.navigate("ModuleViewScreen", { module });
    const handleDelete = (module) =>
        setModules(modules.filter((prev) => prev.ModuleID !== module.ModuleID));

    return (
        <Screen>
            <RenderCount />
            <ModuleList modules={modules} onSelect={handleSelect} />
        </Screen>
    );
};

export default ModuleListScreen;
