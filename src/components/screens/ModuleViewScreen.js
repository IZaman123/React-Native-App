import ModuleView from "../entity/modules/ModuleView";
import Screen from "../layout/Screen";

const ModuleViewScreen = ({ navigation, route }) => {
    const { module, onDelete, onModify } = route.params;

    const goToModifyScreen = () => navigation.replace("ModuleModifyScreen", { module, onModify });

    return (
        <Screen>
            <ModuleView module={module} onDelete={onDelete} onModify={goToModifyScreen} />
        </Screen>
    );
};

export default ModuleViewScreen;
