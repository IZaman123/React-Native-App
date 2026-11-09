import ModuleView from "../entity/modules/ModuleView";
import Screen from "../layout/Screen";

const ModuleViewScreen = ({ navigate, route }) => {
    const { module, onDelete } = route.params;

    return (
        <Screen>
            <ModuleView module={module} onDelete={onDelete} />
        </Screen>
    );
};

export default ModuleViewScreen;
