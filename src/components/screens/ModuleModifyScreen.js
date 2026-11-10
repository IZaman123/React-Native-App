import ModuleForm from "../entity/modules/ModuleForm";
import Screen from "../layout/Screen";

const ModuleModifyScreen = ({ navigation, route }) => {
    const { module, onModify } = route.params;

    const handleCancel = () => navigation.goBack();

    return (
        <Screen>
            <ModuleForm
                originalModule={module}
                onSubmit={onModify}
                onCancel={handleCancel}
            ></ModuleForm>
        </Screen>
    );
};

export default ModuleModifyScreen;
