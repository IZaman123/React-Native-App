import { useState } from "react";
import initialModules from "../../data/modules";
import ModuleList from "../entity/modules/ModuleList";
import Screen from "../layout/Screen";
import { Button, ButtonTray } from "../UI/Button";
import Icons from "../UI/Icons";

const ModuleListScreen = ({ navigation }) => {
    const [modules, setModules] = useState(initialModules);

    const handleDelete = (module) =>
        setModules(modules.filter((prev) => prev.ModuleID !== module.ModuleID));

    const handleAdd = (module) => setModules([...modules, module]);

    const onDelete = (module) => {
        handleDelete(module);
        navigation.goBack();
    };

    const onAdd = (module) => {
        handleAdd(module);
        navigation.goBack();
    };

    const goToViewScreen = (module) =>
        navigation.navigate("ModuleViewScreen", { module, onDelete });
    const goToAddScreen = () => navigation.navigate("ModuleAddScreen", { onAdd });

    return (
        <Screen>
            <ButtonTray>
                <Button label="Add" icon={<Icons.Add />} onClick={goToAddScreen} />
            </ButtonTray>
            <ModuleList modules={modules} onSelect={goToViewScreen} />
        </Screen>
    );
};

export default ModuleListScreen;
