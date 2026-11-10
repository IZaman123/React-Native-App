import ModuleForm from "../entity/modules/ModuleForm";
import Screen from "../layout/Screen";

const ModuleAddScreen = ({ navigation, route }) => {
    const { onAdd } = route.params;
    const handleCancel = navigation.goBack;

    return (
        <Screen>
            <ModuleForm onSubmit={onAdd} onCancel={handleCancel} />
        </Screen>
    );
};

export default ModuleAddScreen;
